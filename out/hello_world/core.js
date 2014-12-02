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
return (function (p1__9941_SHARP_){return cljs.core.get.call(null,lookup,p1__9941_SHARP_);
});})(primes,letters,lookup))
,s));
});
/**
* True if each letter in s1 is contained in s2.
*/
hello_world.core.partial_anagram_QMARK_ = (function partial_anagram_QMARK_(s1,s2){return (cljs.core.rem.call(null,hello_world.core.score.call(null,s2),hello_world.core.score.call(null,s1)) === (0));
});
hello_world.core.search = cljs.core.atom.call(null,null);
hello_world.core.found = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.dict = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.hint_count = cljs.core.atom.call(null,(0));
/**
* Reset mutable state.
*/
hello_world.core.init_state_BANG_ = (function init_state_BANG_(){cljs.core.reset_BANG_.call(null,hello_world.core.search,null);
cljs.core.reset_BANG_.call(null,hello_world.core.found,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,hello_world.core.dict,hello_world.data.nine_letter_words);
return cljs.core.reset_BANG_.call(null,hello_world.core.hint_count,(0));
});
hello_world.core.substr = (function substr(n,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s));
});
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.found)))+" anagram(s) found"));
dommy.core.toggle_BANG_.call(null,document.getElementById("hint"),(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.found)) > (0)));
dommy.core.clear_BANG_.call(null,document.getElementById("result"));
var seq__9946 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.found));var chunk__9947 = null;var count__9948 = (0);var i__9949 = (0);while(true){
if((i__9949 < count__9948))
{var res = cljs.core._nth.call(null,chunk__9947,i__9949);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__9950 = seq__9946;
var G__9951 = chunk__9947;
var G__9952 = count__9948;
var G__9953 = (i__9949 + (1));
seq__9946 = G__9950;
chunk__9947 = G__9951;
count__9948 = G__9952;
i__9949 = G__9953;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__9946);if(temp__4126__auto__)
{var seq__9946__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9946__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__9946__$1);{
var G__9954 = cljs.core.chunk_rest.call(null,seq__9946__$1);
var G__9955 = c__4408__auto__;
var G__9956 = cljs.core.count.call(null,c__4408__auto__);
var G__9957 = (0);
seq__9946 = G__9954;
chunk__9947 = G__9955;
count__9948 = G__9956;
i__9949 = G__9957;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__9946__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__9958 = cljs.core.next.call(null,seq__9946__$1);
var G__9959 = null;
var G__9960 = (0);
var G__9961 = (0);
seq__9946 = G__9958;
chunk__9947 = G__9959;
count__9948 = G__9960;
i__9949 = G__9961;
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
{var chunk = (500);var anagrams = cljs.core.filter.call(null,((function (chunk){
return (function (p1__9962_SHARP_){return hello_world.core.partial_anagram_QMARK_.call(null,cljs.core.deref.call(null,hello_world.core.search),p1__9962_SHARP_);
});})(chunk))
,cljs.core.take.call(null,chunk,cljs.core.deref.call(null,hello_world.core.dict)));cljs.core.swap_BANG_.call(null,hello_world.core.found,((function (chunk,anagrams){
return (function (p1__9963_SHARP_){return cljs.core.into.call(null,p1__9963_SHARP_,anagrams);
});})(chunk,anagrams))
);
return cljs.core.swap_BANG_.call(null,hello_world.core.dict,((function (chunk,anagrams){
return (function (p1__9964_SHARP_){return cljs.core.drop.call(null,chunk,p1__9964_SHARP_);
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
hello_world.core.on_hint = (function on_hint(e){cljs.core.swap_BANG_.call(null,hello_world.core.hint_count,cljs.core.inc);
return hello_world.core.ui_update.call(null);
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),hello_world.core.on_find);
dommy.core.listen_BANG_.call(null,document.getElementById("hint"),new cljs.core.Keyword(null,"click","click",1912301393),hello_world.core.on_hint);
setInterval(hello_world.core.find_some_anagrams,(1000));
setInterval(hello_world.core.ui_update,(1000));
hello_world.core.init_state_BANG_.call(null);

//# sourceMappingURL=core.js.map