(ns hello_world.core
  (:require [dommy.core :as dom :refer-macros [sel sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]))


(def PROXY-SRV "http://localhost/php/results.php")
(def MAX-RECORDS 150)

; mutable state
(def records (atom []))
(def keep-fetching? (atom true))
(def start-index (atom 0))
(def query (atom nil))


(defn ui-update
  "Update UI according to current state"
  []
  (when (pos? (count @records))

      ; set heading, clear results
      (-> (dom/sel1 :h3) (dom/set-text! (str (count @records) " results found")))
      (dom/clear! (dom/sel1 :#results))
	
      ; create list items
      (doseq [rec @records]
        (dom/append! 
            (dom/sel1 :#results) 
                (-> (dom/create-element "li")
                    (dom/set-attr! :id (:id rec))
                    )))
      
      ; populate list items
      (doseq [li (dom/sel :li)
              :let [id (dom/attr li :id)
                    rec (first (filter #(= id (:id %)) @records))
                    about (str "Died " (:death rec) " aged " (:age rec))]]
          (-> li
              (dom/append! (-> (dom/create-element :p)
                                 (dom/set-text! (:name rec))
                                 (dom/add-class! :name)))
              (dom/append! (-> (dom/create-element :p)
                                 (dom/set-text! about)
                                 (dom/add-class! :about)))
                ))
      
      ))


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


(declare fetch)

(defn callback
    "Handle response from server. Stores records found in memory,
    triggers request for more records if required."
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        (swap! records concat (parse-file text))
        (swap! start-index + 15)
        (reset! keep-fetching? (boolean (re-find #"start=" text)))
        (when (and @keep-fetching? (< @start-index MAX-RECORDS))
            (fetch))
        (reset! keep-fetching? false) 
        (ui-update)))


(defn fetch
    "Helper function, trigger request for records based on current state."
    []
    (.send goog.net.XhrIo (str PROXY-SRV "?start=" @start-index "&dataentered=" @query) callback))


(defn on-search
    [e]
    (reset! records [])
    (reset! start-index 0)
    (reset! query (-> :input dom/sel1 dom/value))
    (fetch)
    (.preventDefault e))


; listeners
(dom/listen! (dom/sel1 :form) :submit on-search)
