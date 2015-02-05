(ns hello_world.core
  (:require [hello_world.parse :refer [parse-details parse-file]]
            [hello_world.ui :refer [update]]
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


(defn ui-update
    "Pass state to UI for update"
    []
    (update @records @record-details @start-index MAX-RECORDS on-select))


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
