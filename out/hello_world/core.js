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
hello_world.core.anagrams = (function anagrams(word,wordlist){return cljs.core.filter.call(null,(function (p1__8057_SHARP_){return cljs.core._EQ_.call(null,cljs.core.sort.call(null,p1__8057_SHARP_),cljs.core.sort.call(null,word));
}),wordlist);
});
hello_world.core.results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.hint_count = cljs.core.atom.call(null,(0));
hello_world.core.subs = (function subs(n,s){return cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,n,s));
});
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)))+" anagram(s) found"));
dommy.core.toggle_BANG_.call(null,document.getElementById("hint"),(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)) > (0)));
dommy.core.clear_BANG_.call(null,document.getElementById("result"));
var seq__8062 = cljs.core.seq.call(null,cljs.core.deref.call(null,hello_world.core.results));var chunk__8063 = null;var count__8064 = (0);var i__8065 = (0);while(true){
if((i__8065 < count__8064))
{var res = cljs.core._nth.call(null,chunk__8063,i__8065);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.subs.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__8066 = seq__8062;
var G__8067 = chunk__8063;
var G__8068 = count__8064;
var G__8069 = (i__8065 + (1));
seq__8062 = G__8066;
chunk__8063 = G__8067;
count__8064 = G__8068;
i__8065 = G__8069;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8062);if(temp__4126__auto__)
{var seq__8062__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8062__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__8062__$1);{
var G__8070 = cljs.core.chunk_rest.call(null,seq__8062__$1);
var G__8071 = c__4307__auto__;
var G__8072 = cljs.core.count.call(null,c__4307__auto__);
var G__8073 = (0);
seq__8062 = G__8070;
chunk__8063 = G__8071;
count__8064 = G__8072;
i__8065 = G__8073;
continue;
}
} else
{var res = cljs.core.first.call(null,seq__8062__$1);dommy.core.append_BANG_.call(null,document.getElementById("result"),dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,"li"),hello_world.core.subs.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),res)));
{
var G__8074 = cljs.core.next.call(null,seq__8062__$1);
var G__8075 = null;
var G__8076 = (0);
var G__8077 = (0);
seq__8062 = G__8074;
chunk__8063 = G__8075;
count__8064 = G__8076;
i__8065 = G__8077;
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
hello_world.core.on_find = (function on_find(e){var letters = clojure.string.replace.call(null,clojure.string.upper_case.call(null,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)]))),/\s/,"");var result = hello_world.core.anagrams.call(null,letters,hello_world.data.nine_letter_words);cljs.core.reset_BANG_.call(null,hello_world.core.results,result);
cljs.core.reset_BANG_.call(null,hello_world.core.hint_count,(0));
hello_world.core.ui_update.call(null);
return e.preventDefault();
});
hello_world.core.on_hint = (function on_hint(e){cljs.core.swap_BANG_.call(null,hello_world.core.hint_count,cljs.core.inc);
return hello_world.core.ui_update.call(null);
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),hello_world.core.on_find);
dommy.core.listen_BANG_.call(null,document.getElementById("hint"),new cljs.core.Keyword(null,"click","click",1912301393),hello_world.core.on_hint);
hello_world.core.ui_update.call(null);

//# sourceMappingURL=core.js.map