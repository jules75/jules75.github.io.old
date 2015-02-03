(ns hello_world.core
  (:require [hello_world.data :refer [words]]
			[dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [replace]])
  (:import [goog.net XhrIo]
           ))



;(defn ui-update
;  "Update UI according to current state"
;  []
;  (when (pos? (count @search))
;	(-> (dom/sel1 :h2) (dom/set-text! (str (count @found) " word(s) found")))
;	(dom/clear! (dom/sel1 :#result))
;	(doseq [res @found]
;	  (dom/append! (dom/sel1 :#result) (dom/set-text! (dom/create-element "li") res))
;	  )))



;(defn on-find
;  [e]
;  (let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))]
;	(init-state!)
;	(reset! search letters)
;	(.preventDefault e)))


; listeners
;(dom/listen! (dom/sel1 :form) :submit on-find)


; timers
;(js/setInterval find-some-anagrams 1000)
;(js/setInterval ui-update 1000)


;(init-state!)


(def raw "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
	<head>
		<title>Cemetery Search Results</title>
		<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />
		<meta name=\"keywords\" content=\"Ballaarat General Cemeteries,History,Burials,Lookup,Results\" />
		<meta name=\"description\" content=\"Ballaarat General Cemeteries, History\" />
		<meta name=\"robots\" content=\"follow,index\"/>
		<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
		<link href=\"../css/bgcDB.css\" rel=\"stylesheet\" media=\"screen\" type=\"text/css\" /> 
	</head>
	<body>
		<div id=\"container\">
 			<div id=\"banner\">
				<a href=\"../index.html\"><img src=\"../images/main site copy_r1_c1.jpg\" alt=\"Banner\" title=\"Home Page\"/></a>
			</div>
			<h1 id=\"resultshead\">Cemetery Search Results</h1>
			<div id=\"resultsbrowse\">
<table id=\"resultstable\">
<tr><th>Name</th><th>Age</th><th>Funeral/Crem</th></tr>
<tr><td>LAFFEY THOMAS</td><td>74</td><td>1/01/1917</td><td><a href=\"../php/details.php?id=52373\">Details</a></td></tr>
<tr><td>Laffey Thomas David</td><td>70</td><td>30/08/2004</td><td><a href=\"../php/details.php?id=130549\">Details</a></td></tr>
</table>
</div>
<div class=\"navbar1\">
<span class=\"pagenav\"><a href=\"../index.html\">Home</a>&nbsp;&nbsp;
<a href=\"javascript: history.go(-1);\">Back</a>&nbsp;&nbsp;
<a href=\"../php/search.php\" title=\"New search\">Search</a>
</span>
<span class=\"dbnav\">
Previous
&nbsp;&nbsp;Next
</span>
</div>
<div class=\"navbar2\">
<span class=\"pagenav\"><a href=\"../index.html\">Home</a>&nbsp;&nbsp;
<a href=\"javascript: history.go(-1);\">Back</a>&nbsp;&nbsp;
<a href=\"../php/search.php\" title=\"New search\">Search</a>
</span>
<span class=\"dbnav\">
Previous
&nbsp;&nbsp;Next
</span>
</div>
		</div>
	</body>
</html>")


(def url "http://localhost/php/results.php") ; proxy


(defn parse-row
    "Given single HTML table row, returns map of person data."
    [html]
    (let [[name age death link] (map last (re-seq #"<td>(.*?)</td>" html))
          id (last (re-find #"id=(.*?)\"" link))]
        {:name name :age age :death death :id id}
        ))


(defn parse-file
    "Takes entire HTML response from Ballarat Cemeteries and returns person
    objects (name, age, death, id)."
    [html]
    (let [s (replace html #"[\r\n]" " ")
          table (first (re-find #"id=\"resultstable\">(.*?)</tab" s))
          rows (rest (map first (re-seq #"<tr>(.*?)</tr>" table)))]
        (doall (mapv parse-row rows))
        ))


(defn callback 
    [reply]
    (let [text (-> reply .-target .getResponseText)]
        (.log js/console (clj->js (parse-file text)))
        ))


(.send goog.net.XhrIo url callback "POST" "dataentered=laffey")

;(.log js/console (clj->js (parse-file raw)))


