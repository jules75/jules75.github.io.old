// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3646__auto__ = elem.textContent;if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6703_SHARP_){return !((p1__6703_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__6710_6716 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6711_6717 = null;var count__6712_6718 = (0);var i__6713_6719 = (0);while(true){
if((i__6713_6719 < count__6712_6718))
{var vec__6714_6720 = cljs.core._nth.call(null,chunk__6711_6717,i__6713_6719);var k_6721 = cljs.core.nth.call(null,vec__6714_6720,(0),null);var v_6722 = cljs.core.nth.call(null,vec__6714_6720,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6721),v_6722);
{
var G__6723 = seq__6710_6716;
var G__6724 = chunk__6711_6717;
var G__6725 = count__6712_6718;
var G__6726 = (i__6713_6719 + (1));
seq__6710_6716 = G__6723;
chunk__6711_6717 = G__6724;
count__6712_6718 = G__6725;
i__6713_6719 = G__6726;
continue;
}
} else
{var temp__4126__auto___6727 = cljs.core.seq.call(null,seq__6710_6716);if(temp__4126__auto___6727)
{var seq__6710_6728__$1 = temp__4126__auto___6727;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6728__$1))
{var c__4416__auto___6729 = cljs.core.chunk_first.call(null,seq__6710_6728__$1);{
var G__6730 = cljs.core.chunk_rest.call(null,seq__6710_6728__$1);
var G__6731 = c__4416__auto___6729;
var G__6732 = cljs.core.count.call(null,c__4416__auto___6729);
var G__6733 = (0);
seq__6710_6716 = G__6730;
chunk__6711_6717 = G__6731;
count__6712_6718 = G__6732;
i__6713_6719 = G__6733;
continue;
}
} else
{var vec__6715_6734 = cljs.core.first.call(null,seq__6710_6728__$1);var k_6735 = cljs.core.nth.call(null,vec__6715_6734,(0),null);var v_6736 = cljs.core.nth.call(null,vec__6715_6734,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6735),v_6736);
{
var G__6737 = cljs.core.next.call(null,seq__6710_6728__$1);
var G__6738 = null;
var G__6739 = (0);
var G__6740 = (0);
seq__6710_6716 = G__6737;
chunk__6711_6717 = G__6738;
count__6712_6718 = G__6739;
i__6713_6719 = G__6740;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6741){
var elem = cljs.core.first(arglist__6741);
var kvs = cljs.core.rest(arglist__6741);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6748_6754 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6749_6755 = null;var count__6750_6756 = (0);var i__6751_6757 = (0);while(true){
if((i__6751_6757 < count__6750_6756))
{var vec__6752_6758 = cljs.core._nth.call(null,chunk__6749_6755,i__6751_6757);var k_6759 = cljs.core.nth.call(null,vec__6752_6758,(0),null);var v_6760 = cljs.core.nth.call(null,vec__6752_6758,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6759,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6760)+"px"));
{
var G__6761 = seq__6748_6754;
var G__6762 = chunk__6749_6755;
var G__6763 = count__6750_6756;
var G__6764 = (i__6751_6757 + (1));
seq__6748_6754 = G__6761;
chunk__6749_6755 = G__6762;
count__6750_6756 = G__6763;
i__6751_6757 = G__6764;
continue;
}
} else
{var temp__4126__auto___6765 = cljs.core.seq.call(null,seq__6748_6754);if(temp__4126__auto___6765)
{var seq__6748_6766__$1 = temp__4126__auto___6765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6748_6766__$1))
{var c__4416__auto___6767 = cljs.core.chunk_first.call(null,seq__6748_6766__$1);{
var G__6768 = cljs.core.chunk_rest.call(null,seq__6748_6766__$1);
var G__6769 = c__4416__auto___6767;
var G__6770 = cljs.core.count.call(null,c__4416__auto___6767);
var G__6771 = (0);
seq__6748_6754 = G__6768;
chunk__6749_6755 = G__6769;
count__6750_6756 = G__6770;
i__6751_6757 = G__6771;
continue;
}
} else
{var vec__6753_6772 = cljs.core.first.call(null,seq__6748_6766__$1);var k_6773 = cljs.core.nth.call(null,vec__6753_6772,(0),null);var v_6774 = cljs.core.nth.call(null,vec__6753_6772,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6773,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6774)+"px"));
{
var G__6775 = cljs.core.next.call(null,seq__6748_6766__$1);
var G__6776 = null;
var G__6777 = (0);
var G__6778 = (0);
seq__6748_6754 = G__6775;
chunk__6749_6755 = G__6776;
count__6750_6756 = G__6777;
i__6751_6757 = G__6778;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6779){
var elem = cljs.core.first(arglist__6779);
var kvs = cljs.core.rest(arglist__6779);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6788 = elem;(G__6788[k__$1] = v);
return G__6788;
} else
{var G__6789 = elem;G__6789.setAttribute(k__$1,v);
return G__6789;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6796__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6790_6797 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6791_6798 = null;var count__6792_6799 = (0);var i__6793_6800 = (0);while(true){
if((i__6793_6800 < count__6792_6799))
{var vec__6794_6801 = cljs.core._nth.call(null,chunk__6791_6798,i__6793_6800);var k_6802__$1 = cljs.core.nth.call(null,vec__6794_6801,(0),null);var v_6803__$1 = cljs.core.nth.call(null,vec__6794_6801,(1),null);set_attr_BANG_.call(null,elem,k_6802__$1,v_6803__$1);
{
var G__6804 = seq__6790_6797;
var G__6805 = chunk__6791_6798;
var G__6806 = count__6792_6799;
var G__6807 = (i__6793_6800 + (1));
seq__6790_6797 = G__6804;
chunk__6791_6798 = G__6805;
count__6792_6799 = G__6806;
i__6793_6800 = G__6807;
continue;
}
} else
{var temp__4126__auto___6808 = cljs.core.seq.call(null,seq__6790_6797);if(temp__4126__auto___6808)
{var seq__6790_6809__$1 = temp__4126__auto___6808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6790_6809__$1))
{var c__4416__auto___6810 = cljs.core.chunk_first.call(null,seq__6790_6809__$1);{
var G__6811 = cljs.core.chunk_rest.call(null,seq__6790_6809__$1);
var G__6812 = c__4416__auto___6810;
var G__6813 = cljs.core.count.call(null,c__4416__auto___6810);
var G__6814 = (0);
seq__6790_6797 = G__6811;
chunk__6791_6798 = G__6812;
count__6792_6799 = G__6813;
i__6793_6800 = G__6814;
continue;
}
} else
{var vec__6795_6815 = cljs.core.first.call(null,seq__6790_6809__$1);var k_6816__$1 = cljs.core.nth.call(null,vec__6795_6815,(0),null);var v_6817__$1 = cljs.core.nth.call(null,vec__6795_6815,(1),null);set_attr_BANG_.call(null,elem,k_6816__$1,v_6817__$1);
{
var G__6818 = cljs.core.next.call(null,seq__6790_6809__$1);
var G__6819 = null;
var G__6820 = (0);
var G__6821 = (0);
seq__6790_6797 = G__6818;
chunk__6791_6798 = G__6819;
count__6792_6799 = G__6820;
i__6793_6800 = G__6821;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6796 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6796__delegate.call(this,elem,k,v,kvs);};
G__6796.cljs$lang$maxFixedArity = 3;
G__6796.cljs$lang$applyTo = (function (arglist__6822){
var elem = cljs.core.first(arglist__6822);
arglist__6822 = cljs.core.next(arglist__6822);
var k = cljs.core.first(arglist__6822);
arglist__6822 = cljs.core.next(arglist__6822);
var v = cljs.core.first(arglist__6822);
var kvs = cljs.core.rest(arglist__6822);
return G__6796__delegate(elem,k,v,kvs);
});
G__6796.cljs$core$IFn$_invoke$arity$variadic = G__6796__delegate;
return G__6796;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_6831__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6831__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6831__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6832__delegate = function (elem,k,ks){var seq__6827_6833 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6828_6834 = null;var count__6829_6835 = (0);var i__6830_6836 = (0);while(true){
if((i__6830_6836 < count__6829_6835))
{var k_6837__$1 = cljs.core._nth.call(null,chunk__6828_6834,i__6830_6836);remove_attr_BANG_.call(null,elem,k_6837__$1);
{
var G__6838 = seq__6827_6833;
var G__6839 = chunk__6828_6834;
var G__6840 = count__6829_6835;
var G__6841 = (i__6830_6836 + (1));
seq__6827_6833 = G__6838;
chunk__6828_6834 = G__6839;
count__6829_6835 = G__6840;
i__6830_6836 = G__6841;
continue;
}
} else
{var temp__4126__auto___6842 = cljs.core.seq.call(null,seq__6827_6833);if(temp__4126__auto___6842)
{var seq__6827_6843__$1 = temp__4126__auto___6842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6827_6843__$1))
{var c__4416__auto___6844 = cljs.core.chunk_first.call(null,seq__6827_6843__$1);{
var G__6845 = cljs.core.chunk_rest.call(null,seq__6827_6843__$1);
var G__6846 = c__4416__auto___6844;
var G__6847 = cljs.core.count.call(null,c__4416__auto___6844);
var G__6848 = (0);
seq__6827_6833 = G__6845;
chunk__6828_6834 = G__6846;
count__6829_6835 = G__6847;
i__6830_6836 = G__6848;
continue;
}
} else
{var k_6849__$1 = cljs.core.first.call(null,seq__6827_6843__$1);remove_attr_BANG_.call(null,elem,k_6849__$1);
{
var G__6850 = cljs.core.next.call(null,seq__6827_6843__$1);
var G__6851 = null;
var G__6852 = (0);
var G__6853 = (0);
seq__6827_6833 = G__6850;
chunk__6828_6834 = G__6851;
count__6829_6835 = G__6852;
i__6830_6836 = G__6853;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6832 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6832__delegate.call(this,elem,k,ks);};
G__6832.cljs$lang$maxFixedArity = 2;
G__6832.cljs$lang$applyTo = (function (arglist__6854){
var elem = cljs.core.first(arglist__6854);
arglist__6854 = cljs.core.next(arglist__6854);
var k = cljs.core.first(arglist__6854);
var ks = cljs.core.rest(arglist__6854);
return G__6832__delegate(elem,k,ks);
});
G__6832.cljs$core$IFn$_invoke$arity$variadic = G__6832__delegate;
return G__6832;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___6879 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6879))
{var class_list_6880 = temp__4124__auto___6879;var seq__6867_6881 = cljs.core.seq.call(null,classes__$1);var chunk__6868_6882 = null;var count__6869_6883 = (0);var i__6870_6884 = (0);while(true){
if((i__6870_6884 < count__6869_6883))
{var c_6885 = cljs.core._nth.call(null,chunk__6868_6882,i__6870_6884);class_list_6880.add(c_6885);
{
var G__6886 = seq__6867_6881;
var G__6887 = chunk__6868_6882;
var G__6888 = count__6869_6883;
var G__6889 = (i__6870_6884 + (1));
seq__6867_6881 = G__6886;
chunk__6868_6882 = G__6887;
count__6869_6883 = G__6888;
i__6870_6884 = G__6889;
continue;
}
} else
{var temp__4126__auto___6890 = cljs.core.seq.call(null,seq__6867_6881);if(temp__4126__auto___6890)
{var seq__6867_6891__$1 = temp__4126__auto___6890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6867_6891__$1))
{var c__4416__auto___6892 = cljs.core.chunk_first.call(null,seq__6867_6891__$1);{
var G__6893 = cljs.core.chunk_rest.call(null,seq__6867_6891__$1);
var G__6894 = c__4416__auto___6892;
var G__6895 = cljs.core.count.call(null,c__4416__auto___6892);
var G__6896 = (0);
seq__6867_6881 = G__6893;
chunk__6868_6882 = G__6894;
count__6869_6883 = G__6895;
i__6870_6884 = G__6896;
continue;
}
} else
{var c_6897 = cljs.core.first.call(null,seq__6867_6891__$1);class_list_6880.add(c_6897);
{
var G__6898 = cljs.core.next.call(null,seq__6867_6891__$1);
var G__6899 = null;
var G__6900 = (0);
var G__6901 = (0);
seq__6867_6881 = G__6898;
chunk__6868_6882 = G__6899;
count__6869_6883 = G__6900;
i__6870_6884 = G__6901;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6871_6902 = cljs.core.seq.call(null,classes__$1);var chunk__6872_6903 = null;var count__6873_6904 = (0);var i__6874_6905 = (0);while(true){
if((i__6874_6905 < count__6873_6904))
{var c_6906 = cljs.core._nth.call(null,chunk__6872_6903,i__6874_6905);var class_name_6907 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6907,c_6906)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6907 === ""))?c_6906:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6907)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6906))));
}
{
var G__6908 = seq__6871_6902;
var G__6909 = chunk__6872_6903;
var G__6910 = count__6873_6904;
var G__6911 = (i__6874_6905 + (1));
seq__6871_6902 = G__6908;
chunk__6872_6903 = G__6909;
count__6873_6904 = G__6910;
i__6874_6905 = G__6911;
continue;
}
} else
{var temp__4126__auto___6912 = cljs.core.seq.call(null,seq__6871_6902);if(temp__4126__auto___6912)
{var seq__6871_6913__$1 = temp__4126__auto___6912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6871_6913__$1))
{var c__4416__auto___6914 = cljs.core.chunk_first.call(null,seq__6871_6913__$1);{
var G__6915 = cljs.core.chunk_rest.call(null,seq__6871_6913__$1);
var G__6916 = c__4416__auto___6914;
var G__6917 = cljs.core.count.call(null,c__4416__auto___6914);
var G__6918 = (0);
seq__6871_6902 = G__6915;
chunk__6872_6903 = G__6916;
count__6873_6904 = G__6917;
i__6874_6905 = G__6918;
continue;
}
} else
{var c_6919 = cljs.core.first.call(null,seq__6871_6913__$1);var class_name_6920 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6920,c_6919)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6920 === ""))?c_6919:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6920)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6919))));
}
{
var G__6921 = cljs.core.next.call(null,seq__6871_6913__$1);
var G__6922 = null;
var G__6923 = (0);
var G__6924 = (0);
seq__6871_6902 = G__6921;
chunk__6872_6903 = G__6922;
count__6873_6904 = G__6923;
i__6874_6905 = G__6924;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__6925__delegate = function (elem,classes,more_classes){var seq__6875_6926 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6876_6927 = null;var count__6877_6928 = (0);var i__6878_6929 = (0);while(true){
if((i__6878_6929 < count__6877_6928))
{var c_6930 = cljs.core._nth.call(null,chunk__6876_6927,i__6878_6929);add_class_BANG_.call(null,elem,c_6930);
{
var G__6931 = seq__6875_6926;
var G__6932 = chunk__6876_6927;
var G__6933 = count__6877_6928;
var G__6934 = (i__6878_6929 + (1));
seq__6875_6926 = G__6931;
chunk__6876_6927 = G__6932;
count__6877_6928 = G__6933;
i__6878_6929 = G__6934;
continue;
}
} else
{var temp__4126__auto___6935 = cljs.core.seq.call(null,seq__6875_6926);if(temp__4126__auto___6935)
{var seq__6875_6936__$1 = temp__4126__auto___6935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6875_6936__$1))
{var c__4416__auto___6937 = cljs.core.chunk_first.call(null,seq__6875_6936__$1);{
var G__6938 = cljs.core.chunk_rest.call(null,seq__6875_6936__$1);
var G__6939 = c__4416__auto___6937;
var G__6940 = cljs.core.count.call(null,c__4416__auto___6937);
var G__6941 = (0);
seq__6875_6926 = G__6938;
chunk__6876_6927 = G__6939;
count__6877_6928 = G__6940;
i__6878_6929 = G__6941;
continue;
}
} else
{var c_6942 = cljs.core.first.call(null,seq__6875_6936__$1);add_class_BANG_.call(null,elem,c_6942);
{
var G__6943 = cljs.core.next.call(null,seq__6875_6936__$1);
var G__6944 = null;
var G__6945 = (0);
var G__6946 = (0);
seq__6875_6926 = G__6943;
chunk__6876_6927 = G__6944;
count__6877_6928 = G__6945;
i__6878_6929 = G__6946;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6925 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6925__delegate.call(this,elem,classes,more_classes);};
G__6925.cljs$lang$maxFixedArity = 2;
G__6925.cljs$lang$applyTo = (function (arglist__6947){
var elem = cljs.core.first(arglist__6947);
arglist__6947 = cljs.core.next(arglist__6947);
var classes = cljs.core.first(arglist__6947);
var more_classes = cljs.core.rest(arglist__6947);
return G__6925__delegate(elem,classes,more_classes);
});
G__6925.cljs$core$IFn$_invoke$arity$variadic = G__6925__delegate;
return G__6925;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6956 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6956))
{var class_list_6957 = temp__4124__auto___6956;class_list_6957.remove(c__$1);
} else
{var class_name_6958 = dommy.core.class$.call(null,elem);var new_class_name_6959 = dommy.utils.remove_class_str.call(null,class_name_6958,c__$1);if((class_name_6958 === new_class_name_6959))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6959);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6960__delegate = function (elem,class$,classes){var seq__6952 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6953 = null;var count__6954 = (0);var i__6955 = (0);while(true){
if((i__6955 < count__6954))
{var c = cljs.core._nth.call(null,chunk__6953,i__6955);remove_class_BANG_.call(null,elem,c);
{
var G__6961 = seq__6952;
var G__6962 = chunk__6953;
var G__6963 = count__6954;
var G__6964 = (i__6955 + (1));
seq__6952 = G__6961;
chunk__6953 = G__6962;
count__6954 = G__6963;
i__6955 = G__6964;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6952);if(temp__4126__auto__)
{var seq__6952__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6952__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__6952__$1);{
var G__6965 = cljs.core.chunk_rest.call(null,seq__6952__$1);
var G__6966 = c__4416__auto__;
var G__6967 = cljs.core.count.call(null,c__4416__auto__);
var G__6968 = (0);
seq__6952 = G__6965;
chunk__6953 = G__6966;
count__6954 = G__6967;
i__6955 = G__6968;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6952__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6969 = cljs.core.next.call(null,seq__6952__$1);
var G__6970 = null;
var G__6971 = (0);
var G__6972 = (0);
seq__6952 = G__6969;
chunk__6953 = G__6970;
count__6954 = G__6971;
i__6955 = G__6972;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6960 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6960__delegate.call(this,elem,class$,classes);};
G__6960.cljs$lang$maxFixedArity = 2;
G__6960.cljs$lang$applyTo = (function (arglist__6973){
var elem = cljs.core.first(arglist__6973);
arglist__6973 = cljs.core.next(arglist__6973);
var class$ = cljs.core.first(arglist__6973);
var classes = cljs.core.rest(arglist__6973);
return G__6960__delegate(elem,class$,classes);
});
G__6960.cljs$core$IFn$_invoke$arity$variadic = G__6960__delegate;
return G__6960;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6974 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6974))
{var class_list_6975 = temp__4124__auto___6974;class_list_6975.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6981 = parent;G__6981.appendChild(child);
return G__6981;
});
var append_BANG___3 = (function() { 
var G__6986__delegate = function (parent,child,more_children){var seq__6982_6987 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6983_6988 = null;var count__6984_6989 = (0);var i__6985_6990 = (0);while(true){
if((i__6985_6990 < count__6984_6989))
{var c_6991 = cljs.core._nth.call(null,chunk__6983_6988,i__6985_6990);append_BANG_.call(null,parent,c_6991);
{
var G__6992 = seq__6982_6987;
var G__6993 = chunk__6983_6988;
var G__6994 = count__6984_6989;
var G__6995 = (i__6985_6990 + (1));
seq__6982_6987 = G__6992;
chunk__6983_6988 = G__6993;
count__6984_6989 = G__6994;
i__6985_6990 = G__6995;
continue;
}
} else
{var temp__4126__auto___6996 = cljs.core.seq.call(null,seq__6982_6987);if(temp__4126__auto___6996)
{var seq__6982_6997__$1 = temp__4126__auto___6996;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6982_6997__$1))
{var c__4416__auto___6998 = cljs.core.chunk_first.call(null,seq__6982_6997__$1);{
var G__6999 = cljs.core.chunk_rest.call(null,seq__6982_6997__$1);
var G__7000 = c__4416__auto___6998;
var G__7001 = cljs.core.count.call(null,c__4416__auto___6998);
var G__7002 = (0);
seq__6982_6987 = G__6999;
chunk__6983_6988 = G__7000;
count__6984_6989 = G__7001;
i__6985_6990 = G__7002;
continue;
}
} else
{var c_7003 = cljs.core.first.call(null,seq__6982_6997__$1);append_BANG_.call(null,parent,c_7003);
{
var G__7004 = cljs.core.next.call(null,seq__6982_6997__$1);
var G__7005 = null;
var G__7006 = (0);
var G__7007 = (0);
seq__6982_6987 = G__7004;
chunk__6983_6988 = G__7005;
count__6984_6989 = G__7006;
i__6985_6990 = G__7007;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6986 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6986__delegate.call(this,parent,child,more_children);};
G__6986.cljs$lang$maxFixedArity = 2;
G__6986.cljs$lang$applyTo = (function (arglist__7008){
var parent = cljs.core.first(arglist__7008);
arglist__7008 = cljs.core.next(arglist__7008);
var child = cljs.core.first(arglist__7008);
var more_children = cljs.core.rest(arglist__7008);
return G__6986__delegate(parent,child,more_children);
});
G__6986.cljs$core$IFn$_invoke$arity$variadic = G__6986__delegate;
return G__6986;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__7014 = parent;G__7014.insertBefore(child,parent.firstChild);
return G__7014;
});
var prepend_BANG___3 = (function() { 
var G__7019__delegate = function (parent,child,more_children){var seq__7015_7020 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__7016_7021 = null;var count__7017_7022 = (0);var i__7018_7023 = (0);while(true){
if((i__7018_7023 < count__7017_7022))
{var c_7024 = cljs.core._nth.call(null,chunk__7016_7021,i__7018_7023);prepend_BANG_.call(null,parent,c_7024);
{
var G__7025 = seq__7015_7020;
var G__7026 = chunk__7016_7021;
var G__7027 = count__7017_7022;
var G__7028 = (i__7018_7023 + (1));
seq__7015_7020 = G__7025;
chunk__7016_7021 = G__7026;
count__7017_7022 = G__7027;
i__7018_7023 = G__7028;
continue;
}
} else
{var temp__4126__auto___7029 = cljs.core.seq.call(null,seq__7015_7020);if(temp__4126__auto___7029)
{var seq__7015_7030__$1 = temp__4126__auto___7029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7015_7030__$1))
{var c__4416__auto___7031 = cljs.core.chunk_first.call(null,seq__7015_7030__$1);{
var G__7032 = cljs.core.chunk_rest.call(null,seq__7015_7030__$1);
var G__7033 = c__4416__auto___7031;
var G__7034 = cljs.core.count.call(null,c__4416__auto___7031);
var G__7035 = (0);
seq__7015_7020 = G__7032;
chunk__7016_7021 = G__7033;
count__7017_7022 = G__7034;
i__7018_7023 = G__7035;
continue;
}
} else
{var c_7036 = cljs.core.first.call(null,seq__7015_7030__$1);prepend_BANG_.call(null,parent,c_7036);
{
var G__7037 = cljs.core.next.call(null,seq__7015_7030__$1);
var G__7038 = null;
var G__7039 = (0);
var G__7040 = (0);
seq__7015_7020 = G__7037;
chunk__7016_7021 = G__7038;
count__7017_7022 = G__7039;
i__7018_7023 = G__7040;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__7019 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__7019__delegate.call(this,parent,child,more_children);};
G__7019.cljs$lang$maxFixedArity = 2;
G__7019.cljs$lang$applyTo = (function (arglist__7041){
var parent = cljs.core.first(arglist__7041);
arglist__7041 = cljs.core.next(arglist__7041);
var child = cljs.core.first(arglist__7041);
var more_children = cljs.core.rest(arglist__7041);
return G__7019__delegate(parent,child,more_children);
});
G__7019.cljs$core$IFn$_invoke$arity$variadic = G__7019__delegate;
return G__7019;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___7042 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___7042))
{var next_7043 = temp__4124__auto___7042;dommy.core.insert_before_BANG_.call(null,elem,next_7043);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__7045 = p;G__7045.removeChild(elem);
return G__7045;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7046){var vec__7047 = p__7046;var special_mouse_event = cljs.core.nth.call(null,vec__7047,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__7047,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__7047,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__7047,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3646__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3634__auto__ = related_target;if(cljs.core.truth_(and__3634__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3634__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__7047,special_mouse_event,real_mouse_event))
});})(vec__7047,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3634__auto__ = selected_target;if(cljs.core.truth_(and__3634__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3634__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3646__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3646__auto__))
{return or__3646__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7048){
var elem = cljs.core.first(arglist__7048);
arglist__7048 = cljs.core.next(arglist__7048);
var f = cljs.core.first(arglist__7048);
var args = cljs.core.rest(arglist__7048);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7072_7095 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7096 = cljs.core.nth.call(null,vec__7072_7095,(0),null);var selector_7097 = cljs.core.nth.call(null,vec__7072_7095,(1),null);var seq__7073_7098 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7080_7099 = null;var count__7081_7100 = (0);var i__7082_7101 = (0);while(true){
if((i__7082_7101 < count__7081_7100))
{var vec__7089_7102 = cljs.core._nth.call(null,chunk__7080_7099,i__7082_7101);var orig_type_7103 = cljs.core.nth.call(null,vec__7089_7102,(0),null);var f_7104 = cljs.core.nth.call(null,vec__7089_7102,(1),null);var seq__7083_7105 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7103,new cljs.core.PersistentArrayMap.fromArray([orig_type_7103,cljs.core.identity], true, false)));var chunk__7085_7106 = null;var count__7086_7107 = (0);var i__7087_7108 = (0);while(true){
if((i__7087_7108 < count__7086_7107))
{var vec__7090_7109 = cljs.core._nth.call(null,chunk__7085_7106,i__7087_7108);var actual_type_7110 = cljs.core.nth.call(null,vec__7090_7109,(0),null);var factory_7111 = cljs.core.nth.call(null,vec__7090_7109,(1),null);var canonical_f_7112 = (cljs.core.truth_(selector_7097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7096,selector_7097):cljs.core.identity).call(null,factory_7111.call(null,f_7104));dommy.core.update_event_listeners_BANG_.call(null,elem_7096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7097,actual_type_7110,f_7104], null),canonical_f_7112);
if(cljs.core.truth_(elem_7096.addEventListener))
{elem_7096.addEventListener(cljs.core.name.call(null,actual_type_7110),canonical_f_7112);
} else
{elem_7096.attachEvent(cljs.core.name.call(null,actual_type_7110),canonical_f_7112);
}
{
var G__7113 = seq__7083_7105;
var G__7114 = chunk__7085_7106;
var G__7115 = count__7086_7107;
var G__7116 = (i__7087_7108 + (1));
seq__7083_7105 = G__7113;
chunk__7085_7106 = G__7114;
count__7086_7107 = G__7115;
i__7087_7108 = G__7116;
continue;
}
} else
{var temp__4126__auto___7117 = cljs.core.seq.call(null,seq__7083_7105);if(temp__4126__auto___7117)
{var seq__7083_7118__$1 = temp__4126__auto___7117;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7083_7118__$1))
{var c__4416__auto___7119 = cljs.core.chunk_first.call(null,seq__7083_7118__$1);{
var G__7120 = cljs.core.chunk_rest.call(null,seq__7083_7118__$1);
var G__7121 = c__4416__auto___7119;
var G__7122 = cljs.core.count.call(null,c__4416__auto___7119);
var G__7123 = (0);
seq__7083_7105 = G__7120;
chunk__7085_7106 = G__7121;
count__7086_7107 = G__7122;
i__7087_7108 = G__7123;
continue;
}
} else
{var vec__7091_7124 = cljs.core.first.call(null,seq__7083_7118__$1);var actual_type_7125 = cljs.core.nth.call(null,vec__7091_7124,(0),null);var factory_7126 = cljs.core.nth.call(null,vec__7091_7124,(1),null);var canonical_f_7127 = (cljs.core.truth_(selector_7097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7096,selector_7097):cljs.core.identity).call(null,factory_7126.call(null,f_7104));dommy.core.update_event_listeners_BANG_.call(null,elem_7096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7097,actual_type_7125,f_7104], null),canonical_f_7127);
if(cljs.core.truth_(elem_7096.addEventListener))
{elem_7096.addEventListener(cljs.core.name.call(null,actual_type_7125),canonical_f_7127);
} else
{elem_7096.attachEvent(cljs.core.name.call(null,actual_type_7125),canonical_f_7127);
}
{
var G__7128 = cljs.core.next.call(null,seq__7083_7118__$1);
var G__7129 = null;
var G__7130 = (0);
var G__7131 = (0);
seq__7083_7105 = G__7128;
chunk__7085_7106 = G__7129;
count__7086_7107 = G__7130;
i__7087_7108 = G__7131;
continue;
}
}
} else
{}
}
break;
}
{
var G__7132 = seq__7073_7098;
var G__7133 = chunk__7080_7099;
var G__7134 = count__7081_7100;
var G__7135 = (i__7082_7101 + (1));
seq__7073_7098 = G__7132;
chunk__7080_7099 = G__7133;
count__7081_7100 = G__7134;
i__7082_7101 = G__7135;
continue;
}
} else
{var temp__4126__auto___7136 = cljs.core.seq.call(null,seq__7073_7098);if(temp__4126__auto___7136)
{var seq__7073_7137__$1 = temp__4126__auto___7136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7073_7137__$1))
{var c__4416__auto___7138 = cljs.core.chunk_first.call(null,seq__7073_7137__$1);{
var G__7139 = cljs.core.chunk_rest.call(null,seq__7073_7137__$1);
var G__7140 = c__4416__auto___7138;
var G__7141 = cljs.core.count.call(null,c__4416__auto___7138);
var G__7142 = (0);
seq__7073_7098 = G__7139;
chunk__7080_7099 = G__7140;
count__7081_7100 = G__7141;
i__7082_7101 = G__7142;
continue;
}
} else
{var vec__7092_7143 = cljs.core.first.call(null,seq__7073_7137__$1);var orig_type_7144 = cljs.core.nth.call(null,vec__7092_7143,(0),null);var f_7145 = cljs.core.nth.call(null,vec__7092_7143,(1),null);var seq__7074_7146 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7144,new cljs.core.PersistentArrayMap.fromArray([orig_type_7144,cljs.core.identity], true, false)));var chunk__7076_7147 = null;var count__7077_7148 = (0);var i__7078_7149 = (0);while(true){
if((i__7078_7149 < count__7077_7148))
{var vec__7093_7150 = cljs.core._nth.call(null,chunk__7076_7147,i__7078_7149);var actual_type_7151 = cljs.core.nth.call(null,vec__7093_7150,(0),null);var factory_7152 = cljs.core.nth.call(null,vec__7093_7150,(1),null);var canonical_f_7153 = (cljs.core.truth_(selector_7097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7096,selector_7097):cljs.core.identity).call(null,factory_7152.call(null,f_7145));dommy.core.update_event_listeners_BANG_.call(null,elem_7096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7097,actual_type_7151,f_7145], null),canonical_f_7153);
if(cljs.core.truth_(elem_7096.addEventListener))
{elem_7096.addEventListener(cljs.core.name.call(null,actual_type_7151),canonical_f_7153);
} else
{elem_7096.attachEvent(cljs.core.name.call(null,actual_type_7151),canonical_f_7153);
}
{
var G__7154 = seq__7074_7146;
var G__7155 = chunk__7076_7147;
var G__7156 = count__7077_7148;
var G__7157 = (i__7078_7149 + (1));
seq__7074_7146 = G__7154;
chunk__7076_7147 = G__7155;
count__7077_7148 = G__7156;
i__7078_7149 = G__7157;
continue;
}
} else
{var temp__4126__auto___7158__$1 = cljs.core.seq.call(null,seq__7074_7146);if(temp__4126__auto___7158__$1)
{var seq__7074_7159__$1 = temp__4126__auto___7158__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7074_7159__$1))
{var c__4416__auto___7160 = cljs.core.chunk_first.call(null,seq__7074_7159__$1);{
var G__7161 = cljs.core.chunk_rest.call(null,seq__7074_7159__$1);
var G__7162 = c__4416__auto___7160;
var G__7163 = cljs.core.count.call(null,c__4416__auto___7160);
var G__7164 = (0);
seq__7074_7146 = G__7161;
chunk__7076_7147 = G__7162;
count__7077_7148 = G__7163;
i__7078_7149 = G__7164;
continue;
}
} else
{var vec__7094_7165 = cljs.core.first.call(null,seq__7074_7159__$1);var actual_type_7166 = cljs.core.nth.call(null,vec__7094_7165,(0),null);var factory_7167 = cljs.core.nth.call(null,vec__7094_7165,(1),null);var canonical_f_7168 = (cljs.core.truth_(selector_7097)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7096,selector_7097):cljs.core.identity).call(null,factory_7167.call(null,f_7145));dommy.core.update_event_listeners_BANG_.call(null,elem_7096,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7097,actual_type_7166,f_7145], null),canonical_f_7168);
if(cljs.core.truth_(elem_7096.addEventListener))
{elem_7096.addEventListener(cljs.core.name.call(null,actual_type_7166),canonical_f_7168);
} else
{elem_7096.attachEvent(cljs.core.name.call(null,actual_type_7166),canonical_f_7168);
}
{
var G__7169 = cljs.core.next.call(null,seq__7074_7159__$1);
var G__7170 = null;
var G__7171 = (0);
var G__7172 = (0);
seq__7074_7146 = G__7169;
chunk__7076_7147 = G__7170;
count__7077_7148 = G__7171;
i__7078_7149 = G__7172;
continue;
}
}
} else
{}
}
break;
}
{
var G__7173 = cljs.core.next.call(null,seq__7073_7137__$1);
var G__7174 = null;
var G__7175 = (0);
var G__7176 = (0);
seq__7073_7098 = G__7173;
chunk__7080_7099 = G__7174;
count__7081_7100 = G__7175;
i__7082_7101 = G__7176;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__7177){
var elem_sel = cljs.core.first(arglist__7177);
var type_fs = cljs.core.rest(arglist__7177);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7201_7224 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7225 = cljs.core.nth.call(null,vec__7201_7224,(0),null);var selector_7226 = cljs.core.nth.call(null,vec__7201_7224,(1),null);var seq__7202_7227 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7209_7228 = null;var count__7210_7229 = (0);var i__7211_7230 = (0);while(true){
if((i__7211_7230 < count__7210_7229))
{var vec__7218_7231 = cljs.core._nth.call(null,chunk__7209_7228,i__7211_7230);var orig_type_7232 = cljs.core.nth.call(null,vec__7218_7231,(0),null);var f_7233 = cljs.core.nth.call(null,vec__7218_7231,(1),null);var seq__7212_7234 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7232,new cljs.core.PersistentArrayMap.fromArray([orig_type_7232,cljs.core.identity], true, false)));var chunk__7214_7235 = null;var count__7215_7236 = (0);var i__7216_7237 = (0);while(true){
if((i__7216_7237 < count__7215_7236))
{var vec__7219_7238 = cljs.core._nth.call(null,chunk__7214_7235,i__7216_7237);var actual_type_7239 = cljs.core.nth.call(null,vec__7219_7238,(0),null);var __7240 = cljs.core.nth.call(null,vec__7219_7238,(1),null);var keys_7241 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7226,actual_type_7239,f_7233], null);var canonical_f_7242 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7225),keys_7241);dommy.core.update_event_listeners_BANG_.call(null,elem_7225,dommy.utils.dissoc_in,keys_7241);
if(cljs.core.truth_(elem_7225.removeEventListener))
{elem_7225.removeEventListener(cljs.core.name.call(null,actual_type_7239),canonical_f_7242);
} else
{elem_7225.detachEvent(cljs.core.name.call(null,actual_type_7239),canonical_f_7242);
}
{
var G__7243 = seq__7212_7234;
var G__7244 = chunk__7214_7235;
var G__7245 = count__7215_7236;
var G__7246 = (i__7216_7237 + (1));
seq__7212_7234 = G__7243;
chunk__7214_7235 = G__7244;
count__7215_7236 = G__7245;
i__7216_7237 = G__7246;
continue;
}
} else
{var temp__4126__auto___7247 = cljs.core.seq.call(null,seq__7212_7234);if(temp__4126__auto___7247)
{var seq__7212_7248__$1 = temp__4126__auto___7247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7212_7248__$1))
{var c__4416__auto___7249 = cljs.core.chunk_first.call(null,seq__7212_7248__$1);{
var G__7250 = cljs.core.chunk_rest.call(null,seq__7212_7248__$1);
var G__7251 = c__4416__auto___7249;
var G__7252 = cljs.core.count.call(null,c__4416__auto___7249);
var G__7253 = (0);
seq__7212_7234 = G__7250;
chunk__7214_7235 = G__7251;
count__7215_7236 = G__7252;
i__7216_7237 = G__7253;
continue;
}
} else
{var vec__7220_7254 = cljs.core.first.call(null,seq__7212_7248__$1);var actual_type_7255 = cljs.core.nth.call(null,vec__7220_7254,(0),null);var __7256 = cljs.core.nth.call(null,vec__7220_7254,(1),null);var keys_7257 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7226,actual_type_7255,f_7233], null);var canonical_f_7258 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7225),keys_7257);dommy.core.update_event_listeners_BANG_.call(null,elem_7225,dommy.utils.dissoc_in,keys_7257);
if(cljs.core.truth_(elem_7225.removeEventListener))
{elem_7225.removeEventListener(cljs.core.name.call(null,actual_type_7255),canonical_f_7258);
} else
{elem_7225.detachEvent(cljs.core.name.call(null,actual_type_7255),canonical_f_7258);
}
{
var G__7259 = cljs.core.next.call(null,seq__7212_7248__$1);
var G__7260 = null;
var G__7261 = (0);
var G__7262 = (0);
seq__7212_7234 = G__7259;
chunk__7214_7235 = G__7260;
count__7215_7236 = G__7261;
i__7216_7237 = G__7262;
continue;
}
}
} else
{}
}
break;
}
{
var G__7263 = seq__7202_7227;
var G__7264 = chunk__7209_7228;
var G__7265 = count__7210_7229;
var G__7266 = (i__7211_7230 + (1));
seq__7202_7227 = G__7263;
chunk__7209_7228 = G__7264;
count__7210_7229 = G__7265;
i__7211_7230 = G__7266;
continue;
}
} else
{var temp__4126__auto___7267 = cljs.core.seq.call(null,seq__7202_7227);if(temp__4126__auto___7267)
{var seq__7202_7268__$1 = temp__4126__auto___7267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7202_7268__$1))
{var c__4416__auto___7269 = cljs.core.chunk_first.call(null,seq__7202_7268__$1);{
var G__7270 = cljs.core.chunk_rest.call(null,seq__7202_7268__$1);
var G__7271 = c__4416__auto___7269;
var G__7272 = cljs.core.count.call(null,c__4416__auto___7269);
var G__7273 = (0);
seq__7202_7227 = G__7270;
chunk__7209_7228 = G__7271;
count__7210_7229 = G__7272;
i__7211_7230 = G__7273;
continue;
}
} else
{var vec__7221_7274 = cljs.core.first.call(null,seq__7202_7268__$1);var orig_type_7275 = cljs.core.nth.call(null,vec__7221_7274,(0),null);var f_7276 = cljs.core.nth.call(null,vec__7221_7274,(1),null);var seq__7203_7277 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7275,new cljs.core.PersistentArrayMap.fromArray([orig_type_7275,cljs.core.identity], true, false)));var chunk__7205_7278 = null;var count__7206_7279 = (0);var i__7207_7280 = (0);while(true){
if((i__7207_7280 < count__7206_7279))
{var vec__7222_7281 = cljs.core._nth.call(null,chunk__7205_7278,i__7207_7280);var actual_type_7282 = cljs.core.nth.call(null,vec__7222_7281,(0),null);var __7283 = cljs.core.nth.call(null,vec__7222_7281,(1),null);var keys_7284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7226,actual_type_7282,f_7276], null);var canonical_f_7285 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7225),keys_7284);dommy.core.update_event_listeners_BANG_.call(null,elem_7225,dommy.utils.dissoc_in,keys_7284);
if(cljs.core.truth_(elem_7225.removeEventListener))
{elem_7225.removeEventListener(cljs.core.name.call(null,actual_type_7282),canonical_f_7285);
} else
{elem_7225.detachEvent(cljs.core.name.call(null,actual_type_7282),canonical_f_7285);
}
{
var G__7286 = seq__7203_7277;
var G__7287 = chunk__7205_7278;
var G__7288 = count__7206_7279;
var G__7289 = (i__7207_7280 + (1));
seq__7203_7277 = G__7286;
chunk__7205_7278 = G__7287;
count__7206_7279 = G__7288;
i__7207_7280 = G__7289;
continue;
}
} else
{var temp__4126__auto___7290__$1 = cljs.core.seq.call(null,seq__7203_7277);if(temp__4126__auto___7290__$1)
{var seq__7203_7291__$1 = temp__4126__auto___7290__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7203_7291__$1))
{var c__4416__auto___7292 = cljs.core.chunk_first.call(null,seq__7203_7291__$1);{
var G__7293 = cljs.core.chunk_rest.call(null,seq__7203_7291__$1);
var G__7294 = c__4416__auto___7292;
var G__7295 = cljs.core.count.call(null,c__4416__auto___7292);
var G__7296 = (0);
seq__7203_7277 = G__7293;
chunk__7205_7278 = G__7294;
count__7206_7279 = G__7295;
i__7207_7280 = G__7296;
continue;
}
} else
{var vec__7223_7297 = cljs.core.first.call(null,seq__7203_7291__$1);var actual_type_7298 = cljs.core.nth.call(null,vec__7223_7297,(0),null);var __7299 = cljs.core.nth.call(null,vec__7223_7297,(1),null);var keys_7300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7226,actual_type_7298,f_7276], null);var canonical_f_7301 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7225),keys_7300);dommy.core.update_event_listeners_BANG_.call(null,elem_7225,dommy.utils.dissoc_in,keys_7300);
if(cljs.core.truth_(elem_7225.removeEventListener))
{elem_7225.removeEventListener(cljs.core.name.call(null,actual_type_7298),canonical_f_7301);
} else
{elem_7225.detachEvent(cljs.core.name.call(null,actual_type_7298),canonical_f_7301);
}
{
var G__7302 = cljs.core.next.call(null,seq__7203_7291__$1);
var G__7303 = null;
var G__7304 = (0);
var G__7305 = (0);
seq__7203_7277 = G__7302;
chunk__7205_7278 = G__7303;
count__7206_7279 = G__7304;
i__7207_7280 = G__7305;
continue;
}
}
} else
{}
}
break;
}
{
var G__7306 = cljs.core.next.call(null,seq__7202_7268__$1);
var G__7307 = null;
var G__7308 = (0);
var G__7309 = (0);
seq__7202_7227 = G__7306;
chunk__7209_7228 = G__7307;
count__7210_7229 = G__7308;
i__7211_7230 = G__7309;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7310){
var elem_sel = cljs.core.first(arglist__7310);
var type_fs = cljs.core.rest(arglist__7310);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7318_7325 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7326 = cljs.core.nth.call(null,vec__7318_7325,(0),null);var selector_7327 = cljs.core.nth.call(null,vec__7318_7325,(1),null);var seq__7319_7328 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7320_7329 = null;var count__7321_7330 = (0);var i__7322_7331 = (0);while(true){
if((i__7322_7331 < count__7321_7330))
{var vec__7323_7332 = cljs.core._nth.call(null,chunk__7320_7329,i__7322_7331);var type_7333 = cljs.core.nth.call(null,vec__7323_7332,(0),null);var f_7334 = cljs.core.nth.call(null,vec__7323_7332,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7333,((function (seq__7319_7328,chunk__7320_7329,count__7321_7330,i__7322_7331,vec__7323_7332,type_7333,f_7334,vec__7318_7325,elem_7326,selector_7327){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7333,this_fn);
return f_7334.call(null,e);
});})(seq__7319_7328,chunk__7320_7329,count__7321_7330,i__7322_7331,vec__7323_7332,type_7333,f_7334,vec__7318_7325,elem_7326,selector_7327))
);
{
var G__7335 = seq__7319_7328;
var G__7336 = chunk__7320_7329;
var G__7337 = count__7321_7330;
var G__7338 = (i__7322_7331 + (1));
seq__7319_7328 = G__7335;
chunk__7320_7329 = G__7336;
count__7321_7330 = G__7337;
i__7322_7331 = G__7338;
continue;
}
} else
{var temp__4126__auto___7339 = cljs.core.seq.call(null,seq__7319_7328);if(temp__4126__auto___7339)
{var seq__7319_7340__$1 = temp__4126__auto___7339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7319_7340__$1))
{var c__4416__auto___7341 = cljs.core.chunk_first.call(null,seq__7319_7340__$1);{
var G__7342 = cljs.core.chunk_rest.call(null,seq__7319_7340__$1);
var G__7343 = c__4416__auto___7341;
var G__7344 = cljs.core.count.call(null,c__4416__auto___7341);
var G__7345 = (0);
seq__7319_7328 = G__7342;
chunk__7320_7329 = G__7343;
count__7321_7330 = G__7344;
i__7322_7331 = G__7345;
continue;
}
} else
{var vec__7324_7346 = cljs.core.first.call(null,seq__7319_7340__$1);var type_7347 = cljs.core.nth.call(null,vec__7324_7346,(0),null);var f_7348 = cljs.core.nth.call(null,vec__7324_7346,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7347,((function (seq__7319_7328,chunk__7320_7329,count__7321_7330,i__7322_7331,vec__7324_7346,type_7347,f_7348,seq__7319_7340__$1,temp__4126__auto___7339,vec__7318_7325,elem_7326,selector_7327){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7347,this_fn);
return f_7348.call(null,e);
});})(seq__7319_7328,chunk__7320_7329,count__7321_7330,i__7322_7331,vec__7324_7346,type_7347,f_7348,seq__7319_7340__$1,temp__4126__auto___7339,vec__7318_7325,elem_7326,selector_7327))
);
{
var G__7349 = cljs.core.next.call(null,seq__7319_7340__$1);
var G__7350 = null;
var G__7351 = (0);
var G__7352 = (0);
seq__7319_7328 = G__7349;
chunk__7320_7329 = G__7350;
count__7321_7330 = G__7351;
i__7322_7331 = G__7352;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7353){
var elem_sel = cljs.core.first(arglist__7353);
var type_fs = cljs.core.rest(arglist__7353);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
