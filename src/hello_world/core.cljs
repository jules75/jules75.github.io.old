(ns hello_world.core
  (:require [dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]
           ))


(def proxy-srv "http://localhost/php/results.php")


; mutable state
(def records (atom []))
(def more-to-fetch (atom true))
(def start-index (atom 0))
(def query (atom nil))


(defn ui-update
  "Update UI according to current state"
  []
  (when (pos? (count @records))
	(-> (dom/sel1 :h2) (dom/set-text! (str (count @records) " result(s) found")))
	(dom/clear! (dom/sel1 :#results))
	(doseq [rec @records]
	  (dom/append! 
          (dom/sel1 :#results) 
          (dom/set-text! (dom/create-element "li") (:name rec)))
	  )))


(defn parse-row
    "Given single HTML table row, returns map of person data."
    [html]
    (let [[name age death link] (map last (re-seq #"<td>(.*?)</td>" html))
          id (last (re-find #"id=(.*?)\"" link))]
        {:name name :age age :death death :id id}
        ))


(defn parse-file
    "Takes entire HTML response from Ballarat Cemeteries and returns person
    objects (name, age, death, id). Depends on source HTML not changing."
    [html]
    (let [s (replace html #"[\r\n]" " ")
          table (first (re-find #"id=\"resultstable\">(.*?)</tab" s))
          rows (rest (map first (re-seq #"<tr>(.*?)</tr>" table)))]
        (doall (mapv parse-row rows))
        ))


(declare fetch)

(defn callback 
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        (swap! records concat (parse-file text))
        (reset! more-to-fetch (boolean (re-find #"start=" text)))
        (when @more-to-fetch
            (swap! start-index (partial + 15))
            (fetch))
        (ui-update)
        ))


(defn fetch
    []
    (.send goog.net.XhrIo (str proxy-srv "?start=" @start-index "&dataentered=" @query) callback))


(defn on-search
    [e]
    (reset! records [])
    (reset! start-index 0)
    (reset! query (-> :input dom/sel1 dom/value))
    (fetch)
    (.preventDefault e))


; listeners
(dom/listen! (dom/sel1 :body) :click on-search)
