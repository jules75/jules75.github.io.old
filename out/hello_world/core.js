// Compiled by ClojureScript 0.0-2371
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('hello_world.data');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('hello_world.data');
hello_world.core.search = cljs.core.atom.call(null,null);
hello_world.core.found = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.dict = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
/**
* Gives string a score, useful for determining anagrams
* and partial anagrams. Expects uppercase string.
* If two words have they same score, they are anagrams.
* If A's score is a factor of B's score, each letter in A is contained in B.
*/
hello_world.core.score = (function score(s){var primes = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3),(5),(7),(11),(13),(17),(19),(23),(29),(31),(37),(41),(43),(47),(53),(59),(61),(67),(71),(73),(79),(83),(89),(97),(101)], null);var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";var lookup = cljs.core.zipmap.call(null,letters,primes);return cljs.core.apply.call(null,cljs.core._STAR_,cljs.core.map.call(null,((function (primes,letters,lookup){
return (function (p1__10253_SHARP_){return cljs.core.get.call(null,lookup,p1__10253_SHARP_);
});})(primes,letters,lookup))
,s));
});
/**
* True if each letter in s1 is contained in s2.
*/
hello_world.core.partial_anagram_QMARK_ = (function partial_anagram_QMARK_(s1,s2){return (cljs.core.rem.call(null,hello_world.core.score.call(null,s2),hello_world.core.score.call(null,s1)) === (0));
});
/**
* Reset mutable state.
*/
hello_world.core.init_state_BANG_ = (function init_state_BANG_(){cljs.core.reset_BANG_.call(null,hello_world.core.search,null);
cljs.core.reset_BANG_.call(null,hello_world.core.found,cljs.core.PersistentVector.EMPTY);
return cljs.core.reset_BANG_.call(null,hello_world.core.dict,hello_world.data.words);
});
hello_world.core.substr = (function substr(n,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s));
});
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){if((cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.search)) > (0)))
{dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.found)))+" word(s) found"));
dommy.core.clear_BANG_.call(null,document.getElementById("result"));
var seq__10258 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.found));var chunk__10259 = null;var count__10260 = (0);var i__10261 = (0);while(true){
if((i__10261 < count__10260))
{var res = cljs.core._nth.call(null,chunk__10259,i__10261);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),res));
{
var G__10262 = seq__10258;
var G__10263 = chunk__10259;
var G__10264 = count__10260;
var G__10265 = (i__10261 + (1));
seq__10258 = G__10262;
chunk__10259 = G__10263;
count__10260 = G__10264;
i__10261 = G__10265;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10258);if(temp__4126__auto__)
{var seq__10258__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10258__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10258__$1);{
var G__10266 = cljs.core.chunk_rest.call(null,seq__10258__$1);
var G__10267 = c__4408__auto__;
var G__10268 = cljs.core.count.call(null,c__4408__auto__);
var G__10269 = (0);
seq__10258 = G__10266;
chunk__10259 = G__10267;
count__10260 = G__10268;
i__10261 = G__10269;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__10258__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),res));
{
var G__10270 = cljs.core.next.call(null,seq__10258__$1);
var G__10271 = null;
var G__10272 = (0);
var G__10273 = (0);
seq__10258 = G__10270;
chunk__10259 = G__10271;
count__10260 = G__10272;
i__10261 = G__10273;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
/**
* Find some (not all) anagrams based on current app state.
* Called in chunks to avoid blocking.
*/
hello_world.core.find_some_anagrams = (function find_some_anagrams(){if((cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.search)) > (0)))
{var chunk = (500);var anagrams = cljs.core.filter.call(null,((function (chunk){
return (function (p1__10274_SHARP_){return hello_world.core.partial_anagram_QMARK_.call(null,cljs.core.deref.call(null,hello_world.core.search),p1__10274_SHARP_);
});})(chunk))
,cljs.core.take.call(null,chunk,cljs.core.deref.call(null,hello_world.core.dict)));cljs.core.swap_BANG_.call(null,hello_world.core.found,((function (chunk,anagrams){
return (function (p1__10275_SHARP_){return cljs.core.into.call(null,p1__10275_SHARP_,anagrams);
});})(chunk,anagrams))
);
return cljs.core.swap_BANG_.call(null,hello_world.core.dict,((function (chunk,anagrams){
return (function (p1__10276_SHARP_){return cljs.core.drop.call(null,chunk,p1__10276_SHARP_);
});})(chunk,anagrams))
);
} else
{return null;
}
});
hello_world.core.on_find = (function on_find(e){var letters = clojure.string.replace.call(null,clojure.string.upper_case.call(null,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)]))),/\s/,"");hello_world.core.init_state_BANG_.call(null);
cljs.core.reset_BANG_.call(null,hello_world.core.search,letters);
return e.preventDefault();
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),hello_world.core.on_find);
setInterval(hello_world.core.find_some_anagrams,(1000));
setInterval(hello_world.core.ui_update,(1000));
hello_world.core.init_state_BANG_.call(null);

//# sourceMappingURL=core.js.map