// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.parse');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Given records details HTML from Ballarat Cememeteries, returns map
* of details (location, name, area etc.)
*/
cemetery.parse.parse_details = (function parse_details(html){var s = clojure.string.replace.call(null,html,/[\r\n]/," ");var location = cljs.core.last.call(null,cljs.core.re_find.call(null,/id=\"detailhead\">(.*?)<\/h1/,s));var fullname = cljs.core.last.call(null,cljs.core.re_find.call(null,/id=\"fullname\">(.*?)<\/h2/,s));var table = cljs.core.last.call(null,cljs.core.re_find.call(null,/id=\"loctable\">(.*?)<\/tab/,s));var cells = cljs.core.map.call(null,cljs.core.last,cljs.core.re_seq.call(null,/<td>(.*?)<\/td>/,table));var vec__5434 = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,cells));var area1 = cljs.core.nth.call(null,vec__5434,(0),null);var area2 = cljs.core.nth.call(null,vec__5434,(1),null);var section1 = cljs.core.nth.call(null,vec__5434,(2),null);var section2 = cljs.core.nth.call(null,vec__5434,(3),null);var row = cljs.core.nth.call(null,vec__5434,(4),null);var grave = cljs.core.nth.call(null,vec__5434,(5),null);return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"fullname","fullname",1638772587),fullname,new cljs.core.Keyword(null,"area1","area1",-316994623),area1,new cljs.core.Keyword(null,"area2","area2",208933376),area2,new cljs.core.Keyword(null,"section1","section1",1772462392),section1,new cljs.core.Keyword(null,"section2","section2",630697586),section2,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"grave","grave",2143694981),grave], null);
});
/**
* Given single HTML table row, returns map of person data.
*/
cemetery.parse.parse_row = (function parse_row(html){var vec__5436 = cljs.core.map.call(null,cljs.core.last,cljs.core.re_seq.call(null,/<td>(.*?)<\/td>/,html));var name = cljs.core.nth.call(null,vec__5436,(0),null);var age = cljs.core.nth.call(null,vec__5436,(1),null);var death = cljs.core.nth.call(null,vec__5436,(2),null);var link = cljs.core.nth.call(null,vec__5436,(3),null);var id = cljs.core.last.call(null,cljs.core.re_find.call(null,/id=(.*?)\"/,link));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"age","age",-604307804),age,new cljs.core.Keyword(null,"death","death",2026112826),death,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
/**
* Takes entire HTML response from Ballarat Cemeteries and returns person
* objects (name, age, death, id). Depends on source HTML not changing.
*/
cemetery.parse.parse_file = (function parse_file(html){var s = clojure.string.replace.call(null,html,/[\r\n]/," ");var table = cljs.core.first.call(null,cljs.core.re_find.call(null,/id=\"resultstable\">(.*?)<\/tab/,s));var rows = cljs.core.rest.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,/<tr>(.*?)<\/tr>/,table)));return cljs.core.doall.call(null,cljs.core.mapv.call(null,cemetery.parse.parse_row,rows));
});

//# sourceMappingURL=parse.js.map