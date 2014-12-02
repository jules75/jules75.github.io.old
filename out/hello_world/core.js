// Compiled by ClojureScript 0.0-2371
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('hello_world.data');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('hello_world.data');
/**
* Gives string a score, useful for determining anagrams
* and partial anagrams. Expects uppercase string.
* If two words have they same score, they are anagrams.
* If A's score is a factor of B's score, each letter in A is contained in B.
*/
hello_world.core.score = (function score(s){var primes = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(5),(7),(11),(13),(17),(19),(23),(29),(31),(37),(41),(43),(47),(53),(59),(61),(67),(71),(73),(79),(83),(89),(97),(101)], null);var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";var lookup = cljs.core.zipmap.call(null,letters,primes);return cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,((function (primes,letters,lookup){
return (function (p1__9189_SHARP_){return cljs.core.get.call(null,lookup,p1__9189_SHARP_);
});})(primes,letters,lookup))
,s));
});
/**
* True if each letter in s1 is contained in s2.
*/
hello_world.core.partial_anagram_QMARK_ = (function partial_anagram_QMARK_(s1,s2){return (cljs.core.rem.call(null,hello_world.core.score.call(null,s2),hello_world.core.score.call(null,s1)) === (0));
});
hello_world.core.results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.hint_count = cljs.core.atom.call(null,(0));
hello_world.core.substr = (function substr(n,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s));
});
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)))+" anagram(s) found"));
dommy.core.toggle_BANG_.call(null,document.getElementById("hint"),(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)) > (0)));
dommy.core.clear_BANG_.call(null,document.getElementById("result"));
var seq__9194 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.results));var chunk__9195 = null;var count__9196 = (0);var i__9197 = (0);while(true){
if((i__9197 < count__9196))
{var res = cljs.core._nth.call(null,chunk__9195,i__9197);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__9198 = seq__9194;
var G__9199 = chunk__9195;
var G__9200 = count__9196;
var G__9201 = (i__9197 + (1));
seq__9194 = G__9198;
chunk__9195 = G__9199;
count__9196 = G__9200;
i__9197 = G__9201;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9194);if(temp__4126__auto__)
{var seq__9194__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9194__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__9194__$1);{
var G__9202 = cljs.core.chunk_rest.call(null,seq__9194__$1);
var G__9203 = c__4408__auto__;
var G__9204 = cljs.core.count.call(null,c__4408__auto__);
var G__9205 = (0);
seq__9194 = G__9202;
chunk__9195 = G__9203;
count__9196 = G__9204;
i__9197 = G__9205;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__9194__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__9206 = cljs.core.next.call(null,seq__9194__$1);
var G__9207 = null;
var G__9208 = (0);
var G__9209 = (0);
seq__9194 = G__9206;
chunk__9195 = G__9207;
count__9196 = G__9208;
i__9197 = G__9209;
continue;
}
}
} else
{return null;
}
}
break;
}
});
hello_world.core.on_find = (function on_find(e){var letters = clojure.string.replace.call(null,clojure.string.upper_case.call(null,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)]))),/\s/,"");var dict = cljs.core.atom.call(null,hello_world.data.nine_letter_words);var chunk = (500);cljs.core.reset_BANG_.call(null,hello_world.core.results,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,hello_world.core.hint_count,(0));
while(true){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dict)))
{var anagrams_9213 = cljs.core.filter.call(null,((function (letters,dict,chunk){
return (function (p1__9210_SHARP_){return hello_world.core.partial_anagram_QMARK_.call(null,letters,p1__9210_SHARP_);
});})(letters,dict,chunk))
,cljs.core.take.call(null,chunk,cljs.core.deref.call(null,dict)));cljs.core.swap_BANG_.call(null,hello_world.core.results,((function (anagrams_9213,letters,dict,chunk){
return (function (p1__9211_SHARP_){return cljs.core.into.call(null,p1__9211_SHARP_,anagrams_9213);
});})(anagrams_9213,letters,dict,chunk))
);
hello_world.core.ui_update.call(null);
cljs.core.swap_BANG_.call(null,dict,((function (letters,dict,chunk){
return (function (p1__9212_SHARP_){return cljs.core.drop.call(null,chunk,p1__9212_SHARP_);
});})(letters,dict,chunk))
);
{
continue;
}
} else
{}
break;
}
return e.preventDefault();
});
hello_world.core.on_hint = (function on_hint(e){cljs.core.swap_BANG_.call(null,hello_world.core.hint_count,cljs.core.inc);
return hello_world.core.ui_update.call(null);
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),hello_world.core.on_find);
dommy.core.listen_BANG_.call(null,document.getElementById("hint"),new cljs.core.Keyword(null,"click","click",1912301393),hello_world.core.on_hint);
hello_world.core.ui_update.call(null);

//# sourceMappingURL=core.js.map