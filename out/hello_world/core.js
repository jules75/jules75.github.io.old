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
return (function (p1__10061_SHARP_){return cljs.core.get.call(null,lookup,p1__10061_SHARP_);
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
return cljs.core.reset_BANG_.call(null,hello_world.core.dict,hello_world.data.nine_letter_words);
});
hello_world.core.substr = (function substr(n,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s));
});
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.found)))+" anagram(s) found"));
dommy.core.clear_BANG_.call(null,document.getElementById("result"));
var seq__10066 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.found));var chunk__10067 = null;var count__10068 = (0);var i__10069 = (0);while(true){
if((i__10069 < count__10068))
{var res = cljs.core._nth.call(null,chunk__10067,i__10069);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),res));
{
var G__10070 = seq__10066;
var G__10071 = chunk__10067;
var G__10072 = count__10068;
var G__10073 = (i__10069 + (1));
seq__10066 = G__10070;
chunk__10067 = G__10071;
count__10068 = G__10072;
i__10069 = G__10073;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__10066);if(temp__4126__auto__)
{var seq__10066__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10066__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__10066__$1);{
var G__10074 = cljs.core.chunk_rest.call(null,seq__10066__$1);
var G__10075 = c__4408__auto__;
var G__10076 = cljs.core.count.call(null,c__4408__auto__);
var G__10077 = (0);
seq__10066 = G__10074;
chunk__10067 = G__10075;
count__10068 = G__10076;
i__10069 = G__10077;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__10066__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),res));
{
var G__10078 = cljs.core.next.call(null,seq__10066__$1);
var G__10079 = null;
var G__10080 = (0);
var G__10081 = (0);
seq__10066 = G__10078;
chunk__10067 = G__10079;
count__10068 = G__10080;
i__10069 = G__10081;
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
/**
* Find some (not all) anagrams based on current app state.
* Called in chunks to avoid blocking.
*/
hello_world.core.find_some_anagrams = (function find_some_anagrams(){if((cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.search)) > (0)))
{var chunk = (1000);var anagrams = cljs.core.filter.call(null,((function (chunk){
return (function (p1__10082_SHARP_){return hello_world.core.partial_anagram_QMARK_.call(null,cljs.core.deref.call(null,hello_world.core.search),p1__10082_SHARP_);
});})(chunk))
,cljs.core.take.call(null,chunk,cljs.core.deref.call(null,hello_world.core.dict)));cljs.core.swap_BANG_.call(null,hello_world.core.found,((function (chunk,anagrams){
return (function (p1__10083_SHARP_){return cljs.core.into.call(null,p1__10083_SHARP_,anagrams);
});})(chunk,anagrams))
);
return cljs.core.swap_BANG_.call(null,hello_world.core.dict,((function (chunk,anagrams){
return (function (p1__10084_SHARP_){return cljs.core.drop.call(null,chunk,p1__10084_SHARP_);
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