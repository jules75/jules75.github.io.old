// Compiled by ClojureScript 0.0-2371
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('hello_world.data');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('hello_world.data');
hello_world.core.raw = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\t<head>\n\t\t<title>Cemetery Search Results</title>\n\t\t<meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\" />\n\t\t<meta name=\"keywords\" content=\"Ballaarat General Cemeteries,History,Burials,Lookup,Results\" />\n\t\t<meta name=\"description\" content=\"Ballaarat General Cemeteries, History\" />\n\t\t<meta name=\"robots\" content=\"follow,index\"/>\n\t\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n\t\t<link href=\"../css/bgcDB.css\" rel=\"stylesheet\" media=\"screen\" type=\"text/css\" /> \n\t</head>\n\t<body>\n\t\t<div id=\"container\">\n \t\t\t<div id=\"banner\">\n\t\t\t\t<a href=\"../index.html\"><img src=\"../images/main site copy_r1_c1.jpg\" alt=\"Banner\" title=\"Home Page\"/></a>\n\t\t\t</div>\n\t\t\t<h1 id=\"resultshead\">Cemetery Search Results</h1>\n\t\t\t<div id=\"resultsbrowse\">\n<table id=\"resultstable\">\n<tr><th>Name</th><th>Age</th><th>Funeral/Crem</th></tr>\n<tr><td>LAFFEY THOMAS</td><td>74</td><td>1/01/1917</td><td><a href=\"../php/details.php?id=52373\">Details</a></td></tr>\n<tr><td>Laffey Thomas David</td><td>70</td><td>30/08/2004</td><td><a href=\"../php/details.php?id=130549\">Details</a></td></tr>\n</table>\n</div>\n<div class=\"navbar1\">\n<span class=\"pagenav\"><a href=\"../index.html\">Home</a>&nbsp;&nbsp;\n<a href=\"javascript: history.go(-1);\">Back</a>&nbsp;&nbsp;\n<a href=\"../php/search.php\" title=\"New search\">Search</a>\n</span>\n<span class=\"dbnav\">\nPrevious\n&nbsp;&nbsp;Next\n</span>\n</div>\n<div class=\"navbar2\">\n<span class=\"pagenav\"><a href=\"../index.html\">Home</a>&nbsp;&nbsp;\n<a href=\"javascript: history.go(-1);\">Back</a>&nbsp;&nbsp;\n<a href=\"../php/search.php\" title=\"New search\">Search</a>\n</span>\n<span class=\"dbnav\">\nPrevious\n&nbsp;&nbsp;Next\n</span>\n</div>\n\t\t</div>\n\t</body>\n</html>";
hello_world.core.url = "http://localhost/php/results.php";
/**
* Given single HTML table row, returns map of person data.
*/
hello_world.core.parse_row = (function parse_row(html){var vec__6952 = cljs.core.map.call(null,cljs.core.last,cljs.core.re_seq.call(null,/<td>(.*?)<\/td>/,html));var name = cljs.core.nth.call(null,vec__6952,(0),null);var age = cljs.core.nth.call(null,vec__6952,(1),null);var death = cljs.core.nth.call(null,vec__6952,(2),null);var link = cljs.core.nth.call(null,vec__6952,(3),null);var id = cljs.core.last.call(null,cljs.core.re_find.call(null,/id=(.*?)\"/,link));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"age","age",-604307804),age,new cljs.core.Keyword(null,"death","death",2026112826),death,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
/**
* Takes entire HTML response from Ballarat Cemeteries and returns person
* objects (name, age, death, id).
*/
hello_world.core.parse_file = (function parse_file(html){var s = clojure.string.replace.call(null,html,/[\r\n]/," ");var table = cljs.core.first.call(null,cljs.core.re_find.call(null,/id=\"resultstable\">(.*?)<\/tab/,s));var rows = cljs.core.rest.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,/<tr>(.*?)<\/tr>/,table)));return cljs.core.doall.call(null,cljs.core.mapv.call(null,hello_world.core.parse_row,rows));
});
hello_world.core.callback = (function callback(reply){var text = reply.target.getResponseText();return console.log(cljs.core.clj__GT_js.call(null,hello_world.core.parse_file.call(null,text)));
});
goog.net.XhrIo.send(hello_world.core.url,hello_world.core.callback,"POST","dataentered=laffey");

//# sourceMappingURL=core.js.map