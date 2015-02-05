(ns hello_world.core
  (:require [dommy.core :as dom :refer-macros [sel sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]))


(def PROXY-SRV "http://localhost/")
(def MAX-RECORDS 150)

(declare fetch-records)
(declare on-select)


; mutable state
(def records (atom []))
(def record-id (atom nil))
(def record-details (atom nil))
(def keep-fetching? (atom true))
(def start-index (atom 0))
(def query (atom nil))


(defn parse-details
    "Given records details HTML from Ballarat Cememeteries, returns map
    of details (location, name, area etc.)"
    [html]
    (let [s (replace html #"[\r\n]" " ")
          location (last (re-find #"id=\"detailhead\">(.*?)</h1" s))
          fullname (last (re-find #"id=\"fullname\">(.*?)</h2" s))
          table (last (re-find #"id=\"loctable\">(.*?)</tab" s))
          cells (map last (re-seq #"<td>(.*?)</td>" table))
          [area1 area2 section1 section2 row grave] (take-nth 2 (rest cells))]
        {:location location ; there must be a better way to do this?
         :fullname fullname 
         :area1 area1 
         :area2 area2 
         :section1 section1 
         :section2 section2 
         :row row 
         :grave grave}))


(defn ui-create-list-items
    []
    (doseq [rec @records]
        (dom/append! 
            (dom/sel1 :#results) 
                (-> (dom/create-element "li")
                    (dom/set-attr! :id (:id rec))
                    (dom/listen! :click on-select)
                    ))))


(defn ui-populate-list
    []
    (doseq [li (dom/sel :li)
              :let [id (dom/attr li :id)
                    rec (first (filter #(= id (:id %)) @records))
                    about (str "Funeral on " (:death rec) " aged " (:age rec))
                    f #(dom/append! 
                           %1 (-> (dom/create-element :p)
                                  (dom/set-text! %2)
                                  (dom/add-class! %3)))]]
          (-> li
              (f (:name rec) :name)
              (f about :about))))


(defn ui-render-details
    []
    (-> (dom/sel1 :#details)
        (dom/set-text! (str @record-details))
        ;(dom/show!)
        ))


(defn ui-update
    "Update UI according to current state"
    []
    (dom/toggle! (dom/sel1 :#limit) (= @start-index MAX-RECORDS))
    (when (pos? (count @records))
        (dom/clear! (dom/sel1 :#results))
        (ui-create-list-items)
        (ui-populate-list)
        (ui-render-details)))


(defn parse-row
    "Given single HTML table row, returns map of person data."
    [html]
    (let [[name age death link] (map last (re-seq #"<td>(.*?)</td>" html))
          id (last (re-find #"id=(.*?)\"" link))]
        {:name name :age age :death death :id id}))


(defn parse-file
    "Takes entire HTML response from Ballarat Cemeteries and returns person
    objects (name, age, death, id). Depends on source HTML not changing."
    [html]
    (let [s (replace html #"[\r\n]" " ")
          table (first (re-find #"id=\"resultstable\">(.*?)</tab" s))
          rows (rest (map first (re-seq #"<tr>(.*?)</tr>" table)))]
        (doall (mapv parse-row rows))))


(defn search-callback
    "Handle response from server. Stores records found in memory,
    triggers request for more records if required."
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        (swap! records concat (parse-file text))
        (swap! start-index + 15)
        (reset! keep-fetching? (boolean (re-find #"start=" text)))
        (when (and @keep-fetching? (< @start-index MAX-RECORDS))
            (fetch-records))
        (reset! keep-fetching? false) 
        (ui-update)))


(defn details-callback
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        (reset! record-details (parse-details text))
        (ui-update)))


(defn fetch-records
    "Helper function, request MULTIPLE records based on current state."
    []
    (.send goog.net.XhrIo (str PROXY-SRV "/php/results.php?start=" @start-index "&dataentered=" @query) search-callback))


(defn fetch-details
    "Helper function, request SINGLE record based on current state."
    []
    (.send goog.net.XhrIo (str PROXY-SRV "/php/details.php?id=" @record-id) details-callback))


(defn on-search
    [e]
    (reset! records [])
    (reset! start-index 0)
    (reset! query (-> :input dom/sel1 dom/value))
    (fetch-records)
    (.preventDefault e))


(defn on-select
    [e]
    (let [id (if (= "LI" (-> e .-target .-tagName))
                 (-> e .-target .-id)
                 (-> e .-target .-parentElement .-id))]
        (reset! record-id id)
        (fetch-details)
        (.preventDefault e)))


; listeners
(dom/listen! (dom/sel1 :form) :submit on-search)

(ui-update)
