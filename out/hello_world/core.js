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
hello_world.core.anagrams = (function anagrams(word,wordlist){return cljs.core.filter.call(null,(function (p1__7819_SHARP_){return cljs.core._EQ_.call(null,cljs.core.sort.call(null,p1__7819_SHARP_),cljs.core.sort.call(null,word));
}),wordlist);
});
hello_world.core.results = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
hello_world.core.hint_count = cljs.core.atom.call(null,(0));
/**
* Update UI according to current state
*/
hello_world.core.ui_update = (function ui_update(){dommy.core.set_text_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("h2"))[(0)]),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)))+" anagram(s) found"));
dommy.core.set_text_BANG_.call(null,document.getElementById("result"),cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,cljs.core.deref.call(null,hello_world.core.hint_count),cljs.core.first.call(null,cljs.core.deref.call(null,hello_world.core.results)))));
return dommy.core.toggle_BANG_.call(null,document.getElementById("hint"),(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.results)) > (0)));
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