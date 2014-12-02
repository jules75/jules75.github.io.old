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
* Find all anagrams of 'word' in wordlist.
*/
hello_world.core.anagrams = (function anagrams(word,wordlist){return cljs.core.filter.call(null,(function (p1__7338_SHARP_){return cljs.core._EQ_.call(null,cljs.core.sort.call(null,p1__7338_SHARP_),cljs.core.sort.call(null,word));
}),wordlist);
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
var seq__7343 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.results));var chunk__7344 = null;var count__7345 = (0);var i__7346 = (0);while(true){
if((i__7346 < count__7345))
{var res = cljs.core._nth.call(null,chunk__7344,i__7346);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__7347 = seq__7343;
var G__7348 = chunk__7344;
var G__7349 = count__7345;
var G__7350 = (i__7346 + (1));
seq__7343 = G__7347;
chunk__7344 = G__7348;
count__7345 = G__7349;
i__7346 = G__7350;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7343);if(temp__4126__auto__)
{var seq__7343__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7343__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__7343__$1);{
var G__7351 = cljs.core.chunk_rest.call(null,seq__7343__$1);
var G__7352 = c__4408__auto__;
var G__7353 = cljs.core.count.call(null,c__4408__auto__);
var G__7354 = (0);
seq__7343 = G__7351;
chunk__7344 = G__7352;
count__7345 = G__7353;
i__7346 = G__7354;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__7343__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.substr.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__7355 = cljs.core.next.call(null,seq__7343__$1);
var G__7356 = null;
var G__7357 = (0);
var G__7358 = (0);
seq__7343 = G__7355;
chunk__7344 = G__7356;
count__7345 = G__7357;
i__7346 = G__7358;
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
hello_world.core.on_find = (function on_find(e){var letters = clojure.string.replace.call(null,clojure.string.upper_case.call(null,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)]))),/\s/,"");var dict = cljs.core.atom.call(null,hello_world.data.nine_letter_words);var chunk = (100);cljs.core.reset_BANG_.call(null,hello_world.core.results,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,hello_world.core.hint_count,(0));
while(true){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dict)))
{cljs.core.swap_BANG_.call(null,hello_world.core.results,((function (letters,dict,chunk){
return (function (p1__7359_SHARP_){return cljs.core.into.call(null,p1__7359_SHARP_,hello_world.core.anagrams.call(null,letters,cljs.core.take.call(null,chunk,cljs.core.deref.call(null,dict))));
});})(letters,dict,chunk))
);
hello_world.core.ui_update.call(null);
cljs.core.swap_BANG_.call(null,dict,((function (letters,dict,chunk){
return (function (p1__7360_SHARP_){return cljs.core.drop.call(null,chunk,p1__7360_SHARP_);
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