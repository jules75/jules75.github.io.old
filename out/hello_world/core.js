// Compiled by ClojureScript 0.0-2311
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
hello_world.core.anagrams = (function anagrams(word,wordlist){return cljs.core.filter.call(null,(function (p1__7479_SHARP_){return cljs.core._EQ_.call(null,cljs.core.sort.call(null,p1__7479_SHARP_),cljs.core.sort.call(null,word));
}),wordlist);
});
hello_world.core.results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.onsubmit = (function onsubmit(e){var letters = clojure.string.replace.call(null,clojure.string.upper_case.call(null,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)]))),/\s/,"");var result = hello_world.core.anagrams.call(null,letters,hello_world.data.nine_letter_words);cljs.core.reset_BANG_.call(null,hello_world.core.results,result);
dommy.core.clear_BANG_.call(null,document.getElementById("results"));
dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,result))+" anagram(s) found"));
var seq__7484_7488 = cljs.core.seq.call(null,result);var chunk__7485_7489 = null;var count__7486_7490 = (0);var i__7487_7491 = (0);while(true){
if((i__7487_7491 < count__7486_7490))
{var match_7492 = cljs.core._nth.call(null,chunk__7485_7489,i__7487_7491);console.log(match_7492);
{
var G__7493 = seq__7484_7488;
var G__7494 = chunk__7485_7489;
var G__7495 = count__7486_7490;
var G__7496 = (i__7487_7491 + (1));
seq__7484_7488 = G__7493;
chunk__7485_7489 = G__7494;
count__7486_7490 = G__7495;
i__7487_7491 = G__7496;
continue;
}
} else
{var temp__4126__auto___7497 = cljs.core.seq.call(null,seq__7484_7488);if(temp__4126__auto___7497)
{var seq__7484_7498__$1 = temp__4126__auto___7497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7484_7498__$1))
{var c__4307__auto___7499 = cljs.core.chunk_first.call(null,seq__7484_7498__$1);{
var G__7500 = cljs.core.chunk_rest.call(null,seq__7484_7498__$1);
var G__7501 = c__4307__auto___7499;
var G__7502 = cljs.core.count.call(null,c__4307__auto___7499);
var G__7503 = (0);
seq__7484_7488 = G__7500;
chunk__7485_7489 = G__7501;
count__7486_7490 = G__7502;
i__7487_7491 = G__7503;
continue;
}
} else
{var match_7504 = cljs.core.first.call(null,seq__7484_7498__$1);console.log(match_7504);
{
var G__7505 = cljs.core.next.call(null,seq__7484_7498__$1);
var G__7506 = null;
var G__7507 = (0);
var G__7508 = (0);
seq__7484_7488 = G__7505;
chunk__7485_7489 = G__7506;
count__7486_7490 = G__7507;
i__7487_7491 = G__7508;
continue;
}
}
} else
{}
}
break;
}
return e.preventDefault();
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),hello_world.core.onsubmit);

//# sourceMappingURL=core.js.map