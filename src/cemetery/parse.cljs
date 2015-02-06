(ns cemetery.parse
    (:require [clojure.string :refer [replace]]))


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


(defn- parse-row
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

