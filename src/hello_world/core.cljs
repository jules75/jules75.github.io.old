(ns hello_world.core
  (:require [dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]
           ))


(def proxy-srv "http://localhost/php/results.php")
(def results (atom []))


(defn ui-update
  "Update UI according to current state"
  []
  (when (pos? (count @results))
	(-> (dom/sel1 :h2) (dom/set-text! (str (count @results) " result(s) found")))
	(dom/clear! (dom/sel1 :#results))
	(doseq [res @results]
	  (dom/append! 
          (dom/sel1 :#results) 
          (dom/set-text! (dom/create-element "li") (:name res)))
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


(defn callback 
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        ;(.log js/console (clj->js (parse-file text)))
        (reset! results (parse-file text))
        (ui-update)
        ))

(defn on-search
  [e]
  (let [s (-> :input dom/sel1 dom/value)]
      (.send goog.net.XhrIo proxy-srv callback "POST" (str "dataentered=" s))
      (.preventDefault e)))


; listeners
(dom/listen! (dom/sel1 :body) :click on-search)
