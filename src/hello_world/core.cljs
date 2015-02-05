(ns hello_world.core
  (:require [hello_world.parse :refer [parse-details parse-file]]
      [dommy.core :as dom :refer-macros [sel sel1]]
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
