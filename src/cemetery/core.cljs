(ns cemetery.core
  (:require [cemetery.parse :refer [parse-details parse-file]]
            [cemetery.ui :refer [update]]
            [cemetery.data :refer [areas]]
            [dommy.core :as d :refer-macros [sel sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]))


(def PROXY-SRV "http://50.116.14.16:82/")
(def MAX-RECORDS 150)

(declare fetch-records)
(declare on-select)
(declare on-close)


; mutable state
(def records (atom []))
(def record-id (atom nil))
(def record-details (atom nil))
(def keep-fetching? (atom true))
(def start-index (atom 0))
(def query (atom nil))


(defn ui-update
    "Pass state to UI for update"
    []
    (update @records @record-details @record-id @start-index MAX-RECORDS on-select))


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
    (let [text (-> reply .-target .getResponseText)
          details (parse-details text)
          area {:id "BN" :lat -37.7 :lng 143.3}
          area (first (filter #(= (:area1 details) (:id %)) areas))]
        (reset! record-details details)
        (swap! record-details assoc :lat (:lat area))
        (swap! record-details assoc :lng (:lng area))
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
    (reset! query (-> :input d/sel1 d/value))
    (fetch-records)
    (.preventDefault e))


(defn on-select
    [e]
    (let [id (apply str (rest (if (= "LI" (-> e .-target .-tagName))
                 (-> e .-target .-id)
                 (-> e .-target .-parentElement .-id))))]
        (reset! record-id id)
        (fetch-details)
        (.preventDefault e)))


; create listeners
(d/listen! (d/sel1 :form) :submit on-search)


(ui-update)

