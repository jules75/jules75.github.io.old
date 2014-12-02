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
dommy.core.text = (function text(elem){var or__3638__auto__ = elem.textContent;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
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
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6623_SHARP_){return !((p1__6623_SHARP_ === base));
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
var style = elem.style;var seq__6630_6636 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6631_6637 = null;var count__6632_6638 = (0);var i__6633_6639 = (0);while(true){
if((i__6633_6639 < count__6632_6638))
{var vec__6634_6640 = cljs.core._nth.call(null,chunk__6631_6637,i__6633_6639);var k_6641 = cljs.core.nth.call(null,vec__6634_6640,(0),null);var v_6642 = cljs.core.nth.call(null,vec__6634_6640,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6641),v_6642);
{
var G__6643 = seq__6630_6636;
var G__6644 = chunk__6631_6637;
var G__6645 = count__6632_6638;
var G__6646 = (i__6633_6639 + (1));
seq__6630_6636 = G__6643;
chunk__6631_6637 = G__6644;
count__6632_6638 = G__6645;
i__6633_6639 = G__6646;
continue;
}
} else
{var temp__4126__auto___6647 = cljs.core.seq.call(null,seq__6630_6636);if(temp__4126__auto___6647)
{var seq__6630_6648__$1 = temp__4126__auto___6647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6630_6648__$1))
{var c__4408__auto___6649 = cljs.core.chunk_first.call(null,seq__6630_6648__$1);{
var G__6650 = cljs.core.chunk_rest.call(null,seq__6630_6648__$1);
var G__6651 = c__4408__auto___6649;
var G__6652 = cljs.core.count.call(null,c__4408__auto___6649);
var G__6653 = (0);
seq__6630_6636 = G__6650;
chunk__6631_6637 = G__6651;
count__6632_6638 = G__6652;
i__6633_6639 = G__6653;
continue;
}
} else
{var vec__6635_6654 = cljs.core.first.call(null,seq__6630_6648__$1);var k_6655 = cljs.core.nth.call(null,vec__6635_6654,(0),null);var v_6656 = cljs.core.nth.call(null,vec__6635_6654,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6655),v_6656);
{
var G__6657 = cljs.core.next.call(null,seq__6630_6648__$1);
var G__6658 = null;
var G__6659 = (0);
var G__6660 = (0);
seq__6630_6636 = G__6657;
chunk__6631_6637 = G__6658;
count__6632_6638 = G__6659;
i__6633_6639 = G__6660;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6661){
var elem = cljs.core.first(arglist__6661);
var kvs = cljs.core.rest(arglist__6661);
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
var seq__6668_6674 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6669_6675 = null;var count__6670_6676 = (0);var i__6671_6677 = (0);while(true){
if((i__6671_6677 < count__6670_6676))
{var vec__6672_6678 = cljs.core._nth.call(null,chunk__6669_6675,i__6671_6677);var k_6679 = cljs.core.nth.call(null,vec__6672_6678,(0),null);var v_6680 = cljs.core.nth.call(null,vec__6672_6678,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6679,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6680)+"px"));
{
var G__6681 = seq__6668_6674;
var G__6682 = chunk__6669_6675;
var G__6683 = count__6670_6676;
var G__6684 = (i__6671_6677 + (1));
seq__6668_6674 = G__6681;
chunk__6669_6675 = G__6682;
count__6670_6676 = G__6683;
i__6671_6677 = G__6684;
continue;
}
} else
{var temp__4126__auto___6685 = cljs.core.seq.call(null,seq__6668_6674);if(temp__4126__auto___6685)
{var seq__6668_6686__$1 = temp__4126__auto___6685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6668_6686__$1))
{var c__4408__auto___6687 = cljs.core.chunk_first.call(null,seq__6668_6686__$1);{
var G__6688 = cljs.core.chunk_rest.call(null,seq__6668_6686__$1);
var G__6689 = c__4408__auto___6687;
var G__6690 = cljs.core.count.call(null,c__4408__auto___6687);
var G__6691 = (0);
seq__6668_6674 = G__6688;
chunk__6669_6675 = G__6689;
count__6670_6676 = G__6690;
i__6671_6677 = G__6691;
continue;
}
} else
{var vec__6673_6692 = cljs.core.first.call(null,seq__6668_6686__$1);var k_6693 = cljs.core.nth.call(null,vec__6673_6692,(0),null);var v_6694 = cljs.core.nth.call(null,vec__6673_6692,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6693,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6694)+"px"));
{
var G__6695 = cljs.core.next.call(null,seq__6668_6686__$1);
var G__6696 = null;
var G__6697 = (0);
var G__6698 = (0);
seq__6668_6674 = G__6695;
chunk__6669_6675 = G__6696;
count__6670_6676 = G__6697;
i__6671_6677 = G__6698;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6699){
var elem = cljs.core.first(arglist__6699);
var kvs = cljs.core.rest(arglist__6699);
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
{var G__6708 = elem;(G__6708[k__$1] = v);
return G__6708;
} else
{var G__6709 = elem;G__6709.setAttribute(k__$1,v);
return G__6709;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6716__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6710_6717 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6711_6718 = null;var count__6712_6719 = (0);var i__6713_6720 = (0);while(true){
if((i__6713_6720 < count__6712_6719))
{var vec__6714_6721 = cljs.core._nth.call(null,chunk__6711_6718,i__6713_6720);var k_6722__$1 = cljs.core.nth.call(null,vec__6714_6721,(0),null);var v_6723__$1 = cljs.core.nth.call(null,vec__6714_6721,(1),null);set_attr_BANG_.call(null,elem,k_6722__$1,v_6723__$1);
{
var G__6724 = seq__6710_6717;
var G__6725 = chunk__6711_6718;
var G__6726 = count__6712_6719;
var G__6727 = (i__6713_6720 + (1));
seq__6710_6717 = G__6724;
chunk__6711_6718 = G__6725;
count__6712_6719 = G__6726;
i__6713_6720 = G__6727;
continue;
}
} else
{var temp__4126__auto___6728 = cljs.core.seq.call(null,seq__6710_6717);if(temp__4126__auto___6728)
{var seq__6710_6729__$1 = temp__4126__auto___6728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6729__$1))
{var c__4408__auto___6730 = cljs.core.chunk_first.call(null,seq__6710_6729__$1);{
var G__6731 = cljs.core.chunk_rest.call(null,seq__6710_6729__$1);
var G__6732 = c__4408__auto___6730;
var G__6733 = cljs.core.count.call(null,c__4408__auto___6730);
var G__6734 = (0);
seq__6710_6717 = G__6731;
chunk__6711_6718 = G__6732;
count__6712_6719 = G__6733;
i__6713_6720 = G__6734;
continue;
}
} else
{var vec__6715_6735 = cljs.core.first.call(null,seq__6710_6729__$1);var k_6736__$1 = cljs.core.nth.call(null,vec__6715_6735,(0),null);var v_6737__$1 = cljs.core.nth.call(null,vec__6715_6735,(1),null);set_attr_BANG_.call(null,elem,k_6736__$1,v_6737__$1);
{
var G__6738 = cljs.core.next.call(null,seq__6710_6729__$1);
var G__6739 = null;
var G__6740 = (0);
var G__6741 = (0);
seq__6710_6717 = G__6738;
chunk__6711_6718 = G__6739;
count__6712_6719 = G__6740;
i__6713_6720 = G__6741;
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
var G__6716 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6716__delegate.call(this,elem,k,v,kvs);};
G__6716.cljs$lang$maxFixedArity = 3;
G__6716.cljs$lang$applyTo = (function (arglist__6742){
var elem = cljs.core.first(arglist__6742);
arglist__6742 = cljs.core.next(arglist__6742);
var k = cljs.core.first(arglist__6742);
arglist__6742 = cljs.core.next(arglist__6742);
var v = cljs.core.first(arglist__6742);
var kvs = cljs.core.rest(arglist__6742);
return G__6716__delegate(elem,k,v,kvs);
});
G__6716.cljs$core$IFn$_invoke$arity$variadic = G__6716__delegate;
return G__6716;
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
var remove_attr_BANG___2 = (function (elem,k){var k_6751__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6751__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6751__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6752__delegate = function (elem,k,ks){var seq__6747_6753 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6748_6754 = null;var count__6749_6755 = (0);var i__6750_6756 = (0);while(true){
if((i__6750_6756 < count__6749_6755))
{var k_6757__$1 = cljs.core._nth.call(null,chunk__6748_6754,i__6750_6756);remove_attr_BANG_.call(null,elem,k_6757__$1);
{
var G__6758 = seq__6747_6753;
var G__6759 = chunk__6748_6754;
var G__6760 = count__6749_6755;
var G__6761 = (i__6750_6756 + (1));
seq__6747_6753 = G__6758;
chunk__6748_6754 = G__6759;
count__6749_6755 = G__6760;
i__6750_6756 = G__6761;
continue;
}
} else
{var temp__4126__auto___6762 = cljs.core.seq.call(null,seq__6747_6753);if(temp__4126__auto___6762)
{var seq__6747_6763__$1 = temp__4126__auto___6762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6747_6763__$1))
{var c__4408__auto___6764 = cljs.core.chunk_first.call(null,seq__6747_6763__$1);{
var G__6765 = cljs.core.chunk_rest.call(null,seq__6747_6763__$1);
var G__6766 = c__4408__auto___6764;
var G__6767 = cljs.core.count.call(null,c__4408__auto___6764);
var G__6768 = (0);
seq__6747_6753 = G__6765;
chunk__6748_6754 = G__6766;
count__6749_6755 = G__6767;
i__6750_6756 = G__6768;
continue;
}
} else
{var k_6769__$1 = cljs.core.first.call(null,seq__6747_6763__$1);remove_attr_BANG_.call(null,elem,k_6769__$1);
{
var G__6770 = cljs.core.next.call(null,seq__6747_6763__$1);
var G__6771 = null;
var G__6772 = (0);
var G__6773 = (0);
seq__6747_6753 = G__6770;
chunk__6748_6754 = G__6771;
count__6749_6755 = G__6772;
i__6750_6756 = G__6773;
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
var G__6752 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6752__delegate.call(this,elem,k,ks);};
G__6752.cljs$lang$maxFixedArity = 2;
G__6752.cljs$lang$applyTo = (function (arglist__6774){
var elem = cljs.core.first(arglist__6774);
arglist__6774 = cljs.core.next(arglist__6774);
var k = cljs.core.first(arglist__6774);
var ks = cljs.core.rest(arglist__6774);
return G__6752__delegate(elem,k,ks);
});
G__6752.cljs$core$IFn$_invoke$arity$variadic = G__6752__delegate;
return G__6752;
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
{var temp__4124__auto___6799 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6799))
{var class_list_6800 = temp__4124__auto___6799;var seq__6787_6801 = cljs.core.seq.call(null,classes__$1);var chunk__6788_6802 = null;var count__6789_6803 = (0);var i__6790_6804 = (0);while(true){
if((i__6790_6804 < count__6789_6803))
{var c_6805 = cljs.core._nth.call(null,chunk__6788_6802,i__6790_6804);class_list_6800.add(c_6805);
{
var G__6806 = seq__6787_6801;
var G__6807 = chunk__6788_6802;
var G__6808 = count__6789_6803;
var G__6809 = (i__6790_6804 + (1));
seq__6787_6801 = G__6806;
chunk__6788_6802 = G__6807;
count__6789_6803 = G__6808;
i__6790_6804 = G__6809;
continue;
}
} else
{var temp__4126__auto___6810 = cljs.core.seq.call(null,seq__6787_6801);if(temp__4126__auto___6810)
{var seq__6787_6811__$1 = temp__4126__auto___6810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6787_6811__$1))
{var c__4408__auto___6812 = cljs.core.chunk_first.call(null,seq__6787_6811__$1);{
var G__6813 = cljs.core.chunk_rest.call(null,seq__6787_6811__$1);
var G__6814 = c__4408__auto___6812;
var G__6815 = cljs.core.count.call(null,c__4408__auto___6812);
var G__6816 = (0);
seq__6787_6801 = G__6813;
chunk__6788_6802 = G__6814;
count__6789_6803 = G__6815;
i__6790_6804 = G__6816;
continue;
}
} else
{var c_6817 = cljs.core.first.call(null,seq__6787_6811__$1);class_list_6800.add(c_6817);
{
var G__6818 = cljs.core.next.call(null,seq__6787_6811__$1);
var G__6819 = null;
var G__6820 = (0);
var G__6821 = (0);
seq__6787_6801 = G__6818;
chunk__6788_6802 = G__6819;
count__6789_6803 = G__6820;
i__6790_6804 = G__6821;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6791_6822 = cljs.core.seq.call(null,classes__$1);var chunk__6792_6823 = null;var count__6793_6824 = (0);var i__6794_6825 = (0);while(true){
if((i__6794_6825 < count__6793_6824))
{var c_6826 = cljs.core._nth.call(null,chunk__6792_6823,i__6794_6825);var class_name_6827 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6827,c_6826)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6827 === ""))?c_6826:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6827)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6826))));
}
{
var G__6828 = seq__6791_6822;
var G__6829 = chunk__6792_6823;
var G__6830 = count__6793_6824;
var G__6831 = (i__6794_6825 + (1));
seq__6791_6822 = G__6828;
chunk__6792_6823 = G__6829;
count__6793_6824 = G__6830;
i__6794_6825 = G__6831;
continue;
}
} else
{var temp__4126__auto___6832 = cljs.core.seq.call(null,seq__6791_6822);if(temp__4126__auto___6832)
{var seq__6791_6833__$1 = temp__4126__auto___6832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6791_6833__$1))
{var c__4408__auto___6834 = cljs.core.chunk_first.call(null,seq__6791_6833__$1);{
var G__6835 = cljs.core.chunk_rest.call(null,seq__6791_6833__$1);
var G__6836 = c__4408__auto___6834;
var G__6837 = cljs.core.count.call(null,c__4408__auto___6834);
var G__6838 = (0);
seq__6791_6822 = G__6835;
chunk__6792_6823 = G__6836;
count__6793_6824 = G__6837;
i__6794_6825 = G__6838;
continue;
}
} else
{var c_6839 = cljs.core.first.call(null,seq__6791_6833__$1);var class_name_6840 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6840,c_6839)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6840 === ""))?c_6839:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6840)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6839))));
}
{
var G__6841 = cljs.core.next.call(null,seq__6791_6833__$1);
var G__6842 = null;
var G__6843 = (0);
var G__6844 = (0);
seq__6791_6822 = G__6841;
chunk__6792_6823 = G__6842;
count__6793_6824 = G__6843;
i__6794_6825 = G__6844;
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
var G__6845__delegate = function (elem,classes,more_classes){var seq__6795_6846 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6796_6847 = null;var count__6797_6848 = (0);var i__6798_6849 = (0);while(true){
if((i__6798_6849 < count__6797_6848))
{var c_6850 = cljs.core._nth.call(null,chunk__6796_6847,i__6798_6849);add_class_BANG_.call(null,elem,c_6850);
{
var G__6851 = seq__6795_6846;
var G__6852 = chunk__6796_6847;
var G__6853 = count__6797_6848;
var G__6854 = (i__6798_6849 + (1));
seq__6795_6846 = G__6851;
chunk__6796_6847 = G__6852;
count__6797_6848 = G__6853;
i__6798_6849 = G__6854;
continue;
}
} else
{var temp__4126__auto___6855 = cljs.core.seq.call(null,seq__6795_6846);if(temp__4126__auto___6855)
{var seq__6795_6856__$1 = temp__4126__auto___6855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6795_6856__$1))
{var c__4408__auto___6857 = cljs.core.chunk_first.call(null,seq__6795_6856__$1);{
var G__6858 = cljs.core.chunk_rest.call(null,seq__6795_6856__$1);
var G__6859 = c__4408__auto___6857;
var G__6860 = cljs.core.count.call(null,c__4408__auto___6857);
var G__6861 = (0);
seq__6795_6846 = G__6858;
chunk__6796_6847 = G__6859;
count__6797_6848 = G__6860;
i__6798_6849 = G__6861;
continue;
}
} else
{var c_6862 = cljs.core.first.call(null,seq__6795_6856__$1);add_class_BANG_.call(null,elem,c_6862);
{
var G__6863 = cljs.core.next.call(null,seq__6795_6856__$1);
var G__6864 = null;
var G__6865 = (0);
var G__6866 = (0);
seq__6795_6846 = G__6863;
chunk__6796_6847 = G__6864;
count__6797_6848 = G__6865;
i__6798_6849 = G__6866;
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
var G__6845 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6845__delegate.call(this,elem,classes,more_classes);};
G__6845.cljs$lang$maxFixedArity = 2;
G__6845.cljs$lang$applyTo = (function (arglist__6867){
var elem = cljs.core.first(arglist__6867);
arglist__6867 = cljs.core.next(arglist__6867);
var classes = cljs.core.first(arglist__6867);
var more_classes = cljs.core.rest(arglist__6867);
return G__6845__delegate(elem,classes,more_classes);
});
G__6845.cljs$core$IFn$_invoke$arity$variadic = G__6845__delegate;
return G__6845;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6876 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6876))
{var class_list_6877 = temp__4124__auto___6876;class_list_6877.remove(c__$1);
} else
{var class_name_6878 = dommy.core.class$.call(null,elem);var new_class_name_6879 = dommy.utils.remove_class_str.call(null,class_name_6878,c__$1);if((class_name_6878 === new_class_name_6879))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6879);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6880__delegate = function (elem,class$,classes){var seq__6872 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6873 = null;var count__6874 = (0);var i__6875 = (0);while(true){
if((i__6875 < count__6874))
{var c = cljs.core._nth.call(null,chunk__6873,i__6875);remove_class_BANG_.call(null,elem,c);
{
var G__6881 = seq__6872;
var G__6882 = chunk__6873;
var G__6883 = count__6874;
var G__6884 = (i__6875 + (1));
seq__6872 = G__6881;
chunk__6873 = G__6882;
count__6874 = G__6883;
i__6875 = G__6884;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6872);if(temp__4126__auto__)
{var seq__6872__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6872__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__6872__$1);{
var G__6885 = cljs.core.chunk_rest.call(null,seq__6872__$1);
var G__6886 = c__4408__auto__;
var G__6887 = cljs.core.count.call(null,c__4408__auto__);
var G__6888 = (0);
seq__6872 = G__6885;
chunk__6873 = G__6886;
count__6874 = G__6887;
i__6875 = G__6888;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6872__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6889 = cljs.core.next.call(null,seq__6872__$1);
var G__6890 = null;
var G__6891 = (0);
var G__6892 = (0);
seq__6872 = G__6889;
chunk__6873 = G__6890;
count__6874 = G__6891;
i__6875 = G__6892;
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
var G__6880 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6880__delegate.call(this,elem,class$,classes);};
G__6880.cljs$lang$maxFixedArity = 2;
G__6880.cljs$lang$applyTo = (function (arglist__6893){
var elem = cljs.core.first(arglist__6893);
arglist__6893 = cljs.core.next(arglist__6893);
var class$ = cljs.core.first(arglist__6893);
var classes = cljs.core.rest(arglist__6893);
return G__6880__delegate(elem,class$,classes);
});
G__6880.cljs$core$IFn$_invoke$arity$variadic = G__6880__delegate;
return G__6880;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6894 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6894))
{var class_list_6895 = temp__4124__auto___6894;class_list_6895.toggle(c__$1);
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
var append_BANG___2 = (function (parent,child){var G__6901 = parent;G__6901.appendChild(child);
return G__6901;
});
var append_BANG___3 = (function() { 
var G__6906__delegate = function (parent,child,more_children){var seq__6902_6907 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6903_6908 = null;var count__6904_6909 = (0);var i__6905_6910 = (0);while(true){
if((i__6905_6910 < count__6904_6909))
{var c_6911 = cljs.core._nth.call(null,chunk__6903_6908,i__6905_6910);append_BANG_.call(null,parent,c_6911);
{
var G__6912 = seq__6902_6907;
var G__6913 = chunk__6903_6908;
var G__6914 = count__6904_6909;
var G__6915 = (i__6905_6910 + (1));
seq__6902_6907 = G__6912;
chunk__6903_6908 = G__6913;
count__6904_6909 = G__6914;
i__6905_6910 = G__6915;
continue;
}
} else
{var temp__4126__auto___6916 = cljs.core.seq.call(null,seq__6902_6907);if(temp__4126__auto___6916)
{var seq__6902_6917__$1 = temp__4126__auto___6916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6902_6917__$1))
{var c__4408__auto___6918 = cljs.core.chunk_first.call(null,seq__6902_6917__$1);{
var G__6919 = cljs.core.chunk_rest.call(null,seq__6902_6917__$1);
var G__6920 = c__4408__auto___6918;
var G__6921 = cljs.core.count.call(null,c__4408__auto___6918);
var G__6922 = (0);
seq__6902_6907 = G__6919;
chunk__6903_6908 = G__6920;
count__6904_6909 = G__6921;
i__6905_6910 = G__6922;
continue;
}
} else
{var c_6923 = cljs.core.first.call(null,seq__6902_6917__$1);append_BANG_.call(null,parent,c_6923);
{
var G__6924 = cljs.core.next.call(null,seq__6902_6917__$1);
var G__6925 = null;
var G__6926 = (0);
var G__6927 = (0);
seq__6902_6907 = G__6924;
chunk__6903_6908 = G__6925;
count__6904_6909 = G__6926;
i__6905_6910 = G__6927;
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
var G__6906 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6906__delegate.call(this,parent,child,more_children);};
G__6906.cljs$lang$maxFixedArity = 2;
G__6906.cljs$lang$applyTo = (function (arglist__6928){
var parent = cljs.core.first(arglist__6928);
arglist__6928 = cljs.core.next(arglist__6928);
var child = cljs.core.first(arglist__6928);
var more_children = cljs.core.rest(arglist__6928);
return G__6906__delegate(parent,child,more_children);
});
G__6906.cljs$core$IFn$_invoke$arity$variadic = G__6906__delegate;
return G__6906;
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
var prepend_BANG___2 = (function (parent,child){var G__6934 = parent;G__6934.insertBefore(child,parent.firstChild);
return G__6934;
});
var prepend_BANG___3 = (function() { 
var G__6939__delegate = function (parent,child,more_children){var seq__6935_6940 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6936_6941 = null;var count__6937_6942 = (0);var i__6938_6943 = (0);while(true){
if((i__6938_6943 < count__6937_6942))
{var c_6944 = cljs.core._nth.call(null,chunk__6936_6941,i__6938_6943);prepend_BANG_.call(null,parent,c_6944);
{
var G__6945 = seq__6935_6940;
var G__6946 = chunk__6936_6941;
var G__6947 = count__6937_6942;
var G__6948 = (i__6938_6943 + (1));
seq__6935_6940 = G__6945;
chunk__6936_6941 = G__6946;
count__6937_6942 = G__6947;
i__6938_6943 = G__6948;
continue;
}
} else
{var temp__4126__auto___6949 = cljs.core.seq.call(null,seq__6935_6940);if(temp__4126__auto___6949)
{var seq__6935_6950__$1 = temp__4126__auto___6949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6935_6950__$1))
{var c__4408__auto___6951 = cljs.core.chunk_first.call(null,seq__6935_6950__$1);{
var G__6952 = cljs.core.chunk_rest.call(null,seq__6935_6950__$1);
var G__6953 = c__4408__auto___6951;
var G__6954 = cljs.core.count.call(null,c__4408__auto___6951);
var G__6955 = (0);
seq__6935_6940 = G__6952;
chunk__6936_6941 = G__6953;
count__6937_6942 = G__6954;
i__6938_6943 = G__6955;
continue;
}
} else
{var c_6956 = cljs.core.first.call(null,seq__6935_6950__$1);prepend_BANG_.call(null,parent,c_6956);
{
var G__6957 = cljs.core.next.call(null,seq__6935_6950__$1);
var G__6958 = null;
var G__6959 = (0);
var G__6960 = (0);
seq__6935_6940 = G__6957;
chunk__6936_6941 = G__6958;
count__6937_6942 = G__6959;
i__6938_6943 = G__6960;
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
var G__6939 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6939__delegate.call(this,parent,child,more_children);};
G__6939.cljs$lang$maxFixedArity = 2;
G__6939.cljs$lang$applyTo = (function (arglist__6961){
var parent = cljs.core.first(arglist__6961);
arglist__6961 = cljs.core.next(arglist__6961);
var child = cljs.core.first(arglist__6961);
var more_children = cljs.core.rest(arglist__6961);
return G__6939__delegate(parent,child,more_children);
});
G__6939.cljs$core$IFn$_invoke$arity$variadic = G__6939__delegate;
return G__6939;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___6962 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___6962))
{var next_6963 = temp__4124__auto___6962;dommy.core.insert_before_BANG_.call(null,elem,next_6963);
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
var remove_BANG___2 = (function (p,elem){var G__6965 = p;G__6965.removeChild(elem);
return G__6965;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6966){var vec__6967 = p__6966;var special_mouse_event = cljs.core.nth.call(null,vec__6967,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6967,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6967,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6967,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3638__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3626__auto__ = related_target;if(cljs.core.truth_(and__3626__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3626__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__6967,special_mouse_event,real_mouse_event))
});})(vec__6967,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3626__auto__ = selected_target;if(cljs.core.truth_(and__3626__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3626__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3638__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3638__auto__))
{return or__3638__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__6968){
var elem = cljs.core.first(arglist__6968);
arglist__6968 = cljs.core.next(arglist__6968);
var f = cljs.core.first(arglist__6968);
var args = cljs.core.rest(arglist__6968);
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
var vec__6992_7015 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7016 = cljs.core.nth.call(null,vec__6992_7015,(0),null);var selector_7017 = cljs.core.nth.call(null,vec__6992_7015,(1),null);var seq__6993_7018 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7000_7019 = null;var count__7001_7020 = (0);var i__7002_7021 = (0);while(true){
if((i__7002_7021 < count__7001_7020))
{var vec__7009_7022 = cljs.core._nth.call(null,chunk__7000_7019,i__7002_7021);var orig_type_7023 = cljs.core.nth.call(null,vec__7009_7022,(0),null);var f_7024 = cljs.core.nth.call(null,vec__7009_7022,(1),null);var seq__7003_7025 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7023,new cljs.core.PersistentArrayMap.fromArray([orig_type_7023,cljs.core.identity], true, false)));var chunk__7005_7026 = null;var count__7006_7027 = (0);var i__7007_7028 = (0);while(true){
if((i__7007_7028 < count__7006_7027))
{var vec__7010_7029 = cljs.core._nth.call(null,chunk__7005_7026,i__7007_7028);var actual_type_7030 = cljs.core.nth.call(null,vec__7010_7029,(0),null);var factory_7031 = cljs.core.nth.call(null,vec__7010_7029,(1),null);var canonical_f_7032 = (cljs.core.truth_(selector_7017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7016,selector_7017):cljs.core.identity).call(null,factory_7031.call(null,f_7024));dommy.core.update_event_listeners_BANG_.call(null,elem_7016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7017,actual_type_7030,f_7024], null),canonical_f_7032);
if(cljs.core.truth_(elem_7016.addEventListener))
{elem_7016.addEventListener(cljs.core.name.call(null,actual_type_7030),canonical_f_7032);
} else
{elem_7016.attachEvent(cljs.core.name.call(null,actual_type_7030),canonical_f_7032);
}
{
var G__7033 = seq__7003_7025;
var G__7034 = chunk__7005_7026;
var G__7035 = count__7006_7027;
var G__7036 = (i__7007_7028 + (1));
seq__7003_7025 = G__7033;
chunk__7005_7026 = G__7034;
count__7006_7027 = G__7035;
i__7007_7028 = G__7036;
continue;
}
} else
{var temp__4126__auto___7037 = cljs.core.seq.call(null,seq__7003_7025);if(temp__4126__auto___7037)
{var seq__7003_7038__$1 = temp__4126__auto___7037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7003_7038__$1))
{var c__4408__auto___7039 = cljs.core.chunk_first.call(null,seq__7003_7038__$1);{
var G__7040 = cljs.core.chunk_rest.call(null,seq__7003_7038__$1);
var G__7041 = c__4408__auto___7039;
var G__7042 = cljs.core.count.call(null,c__4408__auto___7039);
var G__7043 = (0);
seq__7003_7025 = G__7040;
chunk__7005_7026 = G__7041;
count__7006_7027 = G__7042;
i__7007_7028 = G__7043;
continue;
}
} else
{var vec__7011_7044 = cljs.core.first.call(null,seq__7003_7038__$1);var actual_type_7045 = cljs.core.nth.call(null,vec__7011_7044,(0),null);var factory_7046 = cljs.core.nth.call(null,vec__7011_7044,(1),null);var canonical_f_7047 = (cljs.core.truth_(selector_7017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7016,selector_7017):cljs.core.identity).call(null,factory_7046.call(null,f_7024));dommy.core.update_event_listeners_BANG_.call(null,elem_7016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7017,actual_type_7045,f_7024], null),canonical_f_7047);
if(cljs.core.truth_(elem_7016.addEventListener))
{elem_7016.addEventListener(cljs.core.name.call(null,actual_type_7045),canonical_f_7047);
} else
{elem_7016.attachEvent(cljs.core.name.call(null,actual_type_7045),canonical_f_7047);
}
{
var G__7048 = cljs.core.next.call(null,seq__7003_7038__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__7003_7025 = G__7048;
chunk__7005_7026 = G__7049;
count__7006_7027 = G__7050;
i__7007_7028 = G__7051;
continue;
}
}
} else
{}
}
break;
}
{
var G__7052 = seq__6993_7018;
var G__7053 = chunk__7000_7019;
var G__7054 = count__7001_7020;
var G__7055 = (i__7002_7021 + (1));
seq__6993_7018 = G__7052;
chunk__7000_7019 = G__7053;
count__7001_7020 = G__7054;
i__7002_7021 = G__7055;
continue;
}
} else
{var temp__4126__auto___7056 = cljs.core.seq.call(null,seq__6993_7018);if(temp__4126__auto___7056)
{var seq__6993_7057__$1 = temp__4126__auto___7056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6993_7057__$1))
{var c__4408__auto___7058 = cljs.core.chunk_first.call(null,seq__6993_7057__$1);{
var G__7059 = cljs.core.chunk_rest.call(null,seq__6993_7057__$1);
var G__7060 = c__4408__auto___7058;
var G__7061 = cljs.core.count.call(null,c__4408__auto___7058);
var G__7062 = (0);
seq__6993_7018 = G__7059;
chunk__7000_7019 = G__7060;
count__7001_7020 = G__7061;
i__7002_7021 = G__7062;
continue;
}
} else
{var vec__7012_7063 = cljs.core.first.call(null,seq__6993_7057__$1);var orig_type_7064 = cljs.core.nth.call(null,vec__7012_7063,(0),null);var f_7065 = cljs.core.nth.call(null,vec__7012_7063,(1),null);var seq__6994_7066 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7064,new cljs.core.PersistentArrayMap.fromArray([orig_type_7064,cljs.core.identity], true, false)));var chunk__6996_7067 = null;var count__6997_7068 = (0);var i__6998_7069 = (0);while(true){
if((i__6998_7069 < count__6997_7068))
{var vec__7013_7070 = cljs.core._nth.call(null,chunk__6996_7067,i__6998_7069);var actual_type_7071 = cljs.core.nth.call(null,vec__7013_7070,(0),null);var factory_7072 = cljs.core.nth.call(null,vec__7013_7070,(1),null);var canonical_f_7073 = (cljs.core.truth_(selector_7017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7016,selector_7017):cljs.core.identity).call(null,factory_7072.call(null,f_7065));dommy.core.update_event_listeners_BANG_.call(null,elem_7016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7017,actual_type_7071,f_7065], null),canonical_f_7073);
if(cljs.core.truth_(elem_7016.addEventListener))
{elem_7016.addEventListener(cljs.core.name.call(null,actual_type_7071),canonical_f_7073);
} else
{elem_7016.attachEvent(cljs.core.name.call(null,actual_type_7071),canonical_f_7073);
}
{
var G__7074 = seq__6994_7066;
var G__7075 = chunk__6996_7067;
var G__7076 = count__6997_7068;
var G__7077 = (i__6998_7069 + (1));
seq__6994_7066 = G__7074;
chunk__6996_7067 = G__7075;
count__6997_7068 = G__7076;
i__6998_7069 = G__7077;
continue;
}
} else
{var temp__4126__auto___7078__$1 = cljs.core.seq.call(null,seq__6994_7066);if(temp__4126__auto___7078__$1)
{var seq__6994_7079__$1 = temp__4126__auto___7078__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6994_7079__$1))
{var c__4408__auto___7080 = cljs.core.chunk_first.call(null,seq__6994_7079__$1);{
var G__7081 = cljs.core.chunk_rest.call(null,seq__6994_7079__$1);
var G__7082 = c__4408__auto___7080;
var G__7083 = cljs.core.count.call(null,c__4408__auto___7080);
var G__7084 = (0);
seq__6994_7066 = G__7081;
chunk__6996_7067 = G__7082;
count__6997_7068 = G__7083;
i__6998_7069 = G__7084;
continue;
}
} else
{var vec__7014_7085 = cljs.core.first.call(null,seq__6994_7079__$1);var actual_type_7086 = cljs.core.nth.call(null,vec__7014_7085,(0),null);var factory_7087 = cljs.core.nth.call(null,vec__7014_7085,(1),null);var canonical_f_7088 = (cljs.core.truth_(selector_7017)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7016,selector_7017):cljs.core.identity).call(null,factory_7087.call(null,f_7065));dommy.core.update_event_listeners_BANG_.call(null,elem_7016,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7017,actual_type_7086,f_7065], null),canonical_f_7088);
if(cljs.core.truth_(elem_7016.addEventListener))
{elem_7016.addEventListener(cljs.core.name.call(null,actual_type_7086),canonical_f_7088);
} else
{elem_7016.attachEvent(cljs.core.name.call(null,actual_type_7086),canonical_f_7088);
}
{
var G__7089 = cljs.core.next.call(null,seq__6994_7079__$1);
var G__7090 = null;
var G__7091 = (0);
var G__7092 = (0);
seq__6994_7066 = G__7089;
chunk__6996_7067 = G__7090;
count__6997_7068 = G__7091;
i__6998_7069 = G__7092;
continue;
}
}
} else
{}
}
break;
}
{
var G__7093 = cljs.core.next.call(null,seq__6993_7057__$1);
var G__7094 = null;
var G__7095 = (0);
var G__7096 = (0);
seq__6993_7018 = G__7093;
chunk__7000_7019 = G__7094;
count__7001_7020 = G__7095;
i__7002_7021 = G__7096;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__7097){
var elem_sel = cljs.core.first(arglist__7097);
var type_fs = cljs.core.rest(arglist__7097);
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
var vec__7121_7144 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7145 = cljs.core.nth.call(null,vec__7121_7144,(0),null);var selector_7146 = cljs.core.nth.call(null,vec__7121_7144,(1),null);var seq__7122_7147 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7129_7148 = null;var count__7130_7149 = (0);var i__7131_7150 = (0);while(true){
if((i__7131_7150 < count__7130_7149))
{var vec__7138_7151 = cljs.core._nth.call(null,chunk__7129_7148,i__7131_7150);var orig_type_7152 = cljs.core.nth.call(null,vec__7138_7151,(0),null);var f_7153 = cljs.core.nth.call(null,vec__7138_7151,(1),null);var seq__7132_7154 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7152,new cljs.core.PersistentArrayMap.fromArray([orig_type_7152,cljs.core.identity], true, false)));var chunk__7134_7155 = null;var count__7135_7156 = (0);var i__7136_7157 = (0);while(true){
if((i__7136_7157 < count__7135_7156))
{var vec__7139_7158 = cljs.core._nth.call(null,chunk__7134_7155,i__7136_7157);var actual_type_7159 = cljs.core.nth.call(null,vec__7139_7158,(0),null);var __7160 = cljs.core.nth.call(null,vec__7139_7158,(1),null);var keys_7161 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7146,actual_type_7159,f_7153], null);var canonical_f_7162 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7145),keys_7161);dommy.core.update_event_listeners_BANG_.call(null,elem_7145,dommy.utils.dissoc_in,keys_7161);
if(cljs.core.truth_(elem_7145.removeEventListener))
{elem_7145.removeEventListener(cljs.core.name.call(null,actual_type_7159),canonical_f_7162);
} else
{elem_7145.detachEvent(cljs.core.name.call(null,actual_type_7159),canonical_f_7162);
}
{
var G__7163 = seq__7132_7154;
var G__7164 = chunk__7134_7155;
var G__7165 = count__7135_7156;
var G__7166 = (i__7136_7157 + (1));
seq__7132_7154 = G__7163;
chunk__7134_7155 = G__7164;
count__7135_7156 = G__7165;
i__7136_7157 = G__7166;
continue;
}
} else
{var temp__4126__auto___7167 = cljs.core.seq.call(null,seq__7132_7154);if(temp__4126__auto___7167)
{var seq__7132_7168__$1 = temp__4126__auto___7167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7132_7168__$1))
{var c__4408__auto___7169 = cljs.core.chunk_first.call(null,seq__7132_7168__$1);{
var G__7170 = cljs.core.chunk_rest.call(null,seq__7132_7168__$1);
var G__7171 = c__4408__auto___7169;
var G__7172 = cljs.core.count.call(null,c__4408__auto___7169);
var G__7173 = (0);
seq__7132_7154 = G__7170;
chunk__7134_7155 = G__7171;
count__7135_7156 = G__7172;
i__7136_7157 = G__7173;
continue;
}
} else
{var vec__7140_7174 = cljs.core.first.call(null,seq__7132_7168__$1);var actual_type_7175 = cljs.core.nth.call(null,vec__7140_7174,(0),null);var __7176 = cljs.core.nth.call(null,vec__7140_7174,(1),null);var keys_7177 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7146,actual_type_7175,f_7153], null);var canonical_f_7178 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7145),keys_7177);dommy.core.update_event_listeners_BANG_.call(null,elem_7145,dommy.utils.dissoc_in,keys_7177);
if(cljs.core.truth_(elem_7145.removeEventListener))
{elem_7145.removeEventListener(cljs.core.name.call(null,actual_type_7175),canonical_f_7178);
} else
{elem_7145.detachEvent(cljs.core.name.call(null,actual_type_7175),canonical_f_7178);
}
{
var G__7179 = cljs.core.next.call(null,seq__7132_7168__$1);
var G__7180 = null;
var G__7181 = (0);
var G__7182 = (0);
seq__7132_7154 = G__7179;
chunk__7134_7155 = G__7180;
count__7135_7156 = G__7181;
i__7136_7157 = G__7182;
continue;
}
}
} else
{}
}
break;
}
{
var G__7183 = seq__7122_7147;
var G__7184 = chunk__7129_7148;
var G__7185 = count__7130_7149;
var G__7186 = (i__7131_7150 + (1));
seq__7122_7147 = G__7183;
chunk__7129_7148 = G__7184;
count__7130_7149 = G__7185;
i__7131_7150 = G__7186;
continue;
}
} else
{var temp__4126__auto___7187 = cljs.core.seq.call(null,seq__7122_7147);if(temp__4126__auto___7187)
{var seq__7122_7188__$1 = temp__4126__auto___7187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7122_7188__$1))
{var c__4408__auto___7189 = cljs.core.chunk_first.call(null,seq__7122_7188__$1);{
var G__7190 = cljs.core.chunk_rest.call(null,seq__7122_7188__$1);
var G__7191 = c__4408__auto___7189;
var G__7192 = cljs.core.count.call(null,c__4408__auto___7189);
var G__7193 = (0);
seq__7122_7147 = G__7190;
chunk__7129_7148 = G__7191;
count__7130_7149 = G__7192;
i__7131_7150 = G__7193;
continue;
}
} else
{var vec__7141_7194 = cljs.core.first.call(null,seq__7122_7188__$1);var orig_type_7195 = cljs.core.nth.call(null,vec__7141_7194,(0),null);var f_7196 = cljs.core.nth.call(null,vec__7141_7194,(1),null);var seq__7123_7197 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7195,new cljs.core.PersistentArrayMap.fromArray([orig_type_7195,cljs.core.identity], true, false)));var chunk__7125_7198 = null;var count__7126_7199 = (0);var i__7127_7200 = (0);while(true){
if((i__7127_7200 < count__7126_7199))
{var vec__7142_7201 = cljs.core._nth.call(null,chunk__7125_7198,i__7127_7200);var actual_type_7202 = cljs.core.nth.call(null,vec__7142_7201,(0),null);var __7203 = cljs.core.nth.call(null,vec__7142_7201,(1),null);var keys_7204 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7146,actual_type_7202,f_7196], null);var canonical_f_7205 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7145),keys_7204);dommy.core.update_event_listeners_BANG_.call(null,elem_7145,dommy.utils.dissoc_in,keys_7204);
if(cljs.core.truth_(elem_7145.removeEventListener))
{elem_7145.removeEventListener(cljs.core.name.call(null,actual_type_7202),canonical_f_7205);
} else
{elem_7145.detachEvent(cljs.core.name.call(null,actual_type_7202),canonical_f_7205);
}
{
var G__7206 = seq__7123_7197;
var G__7207 = chunk__7125_7198;
var G__7208 = count__7126_7199;
var G__7209 = (i__7127_7200 + (1));
seq__7123_7197 = G__7206;
chunk__7125_7198 = G__7207;
count__7126_7199 = G__7208;
i__7127_7200 = G__7209;
continue;
}
} else
{var temp__4126__auto___7210__$1 = cljs.core.seq.call(null,seq__7123_7197);if(temp__4126__auto___7210__$1)
{var seq__7123_7211__$1 = temp__4126__auto___7210__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7123_7211__$1))
{var c__4408__auto___7212 = cljs.core.chunk_first.call(null,seq__7123_7211__$1);{
var G__7213 = cljs.core.chunk_rest.call(null,seq__7123_7211__$1);
var G__7214 = c__4408__auto___7212;
var G__7215 = cljs.core.count.call(null,c__4408__auto___7212);
var G__7216 = (0);
seq__7123_7197 = G__7213;
chunk__7125_7198 = G__7214;
count__7126_7199 = G__7215;
i__7127_7200 = G__7216;
continue;
}
} else
{var vec__7143_7217 = cljs.core.first.call(null,seq__7123_7211__$1);var actual_type_7218 = cljs.core.nth.call(null,vec__7143_7217,(0),null);var __7219 = cljs.core.nth.call(null,vec__7143_7217,(1),null);var keys_7220 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7146,actual_type_7218,f_7196], null);var canonical_f_7221 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7145),keys_7220);dommy.core.update_event_listeners_BANG_.call(null,elem_7145,dommy.utils.dissoc_in,keys_7220);
if(cljs.core.truth_(elem_7145.removeEventListener))
{elem_7145.removeEventListener(cljs.core.name.call(null,actual_type_7218),canonical_f_7221);
} else
{elem_7145.detachEvent(cljs.core.name.call(null,actual_type_7218),canonical_f_7221);
}
{
var G__7222 = cljs.core.next.call(null,seq__7123_7211__$1);
var G__7223 = null;
var G__7224 = (0);
var G__7225 = (0);
seq__7123_7197 = G__7222;
chunk__7125_7198 = G__7223;
count__7126_7199 = G__7224;
i__7127_7200 = G__7225;
continue;
}
}
} else
{}
}
break;
}
{
var G__7226 = cljs.core.next.call(null,seq__7122_7188__$1);
var G__7227 = null;
var G__7228 = (0);
var G__7229 = (0);
seq__7122_7147 = G__7226;
chunk__7129_7148 = G__7227;
count__7130_7149 = G__7228;
i__7131_7150 = G__7229;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7230){
var elem_sel = cljs.core.first(arglist__7230);
var type_fs = cljs.core.rest(arglist__7230);
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
var vec__7238_7245 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7246 = cljs.core.nth.call(null,vec__7238_7245,(0),null);var selector_7247 = cljs.core.nth.call(null,vec__7238_7245,(1),null);var seq__7239_7248 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7240_7249 = null;var count__7241_7250 = (0);var i__7242_7251 = (0);while(true){
if((i__7242_7251 < count__7241_7250))
{var vec__7243_7252 = cljs.core._nth.call(null,chunk__7240_7249,i__7242_7251);var type_7253 = cljs.core.nth.call(null,vec__7243_7252,(0),null);var f_7254 = cljs.core.nth.call(null,vec__7243_7252,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7253,((function (seq__7239_7248,chunk__7240_7249,count__7241_7250,i__7242_7251,vec__7243_7252,type_7253,f_7254,vec__7238_7245,elem_7246,selector_7247){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7253,this_fn);
return f_7254.call(null,e);
});})(seq__7239_7248,chunk__7240_7249,count__7241_7250,i__7242_7251,vec__7243_7252,type_7253,f_7254,vec__7238_7245,elem_7246,selector_7247))
);
{
var G__7255 = seq__7239_7248;
var G__7256 = chunk__7240_7249;
var G__7257 = count__7241_7250;
var G__7258 = (i__7242_7251 + (1));
seq__7239_7248 = G__7255;
chunk__7240_7249 = G__7256;
count__7241_7250 = G__7257;
i__7242_7251 = G__7258;
continue;
}
} else
{var temp__4126__auto___7259 = cljs.core.seq.call(null,seq__7239_7248);if(temp__4126__auto___7259)
{var seq__7239_7260__$1 = temp__4126__auto___7259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7239_7260__$1))
{var c__4408__auto___7261 = cljs.core.chunk_first.call(null,seq__7239_7260__$1);{
var G__7262 = cljs.core.chunk_rest.call(null,seq__7239_7260__$1);
var G__7263 = c__4408__auto___7261;
var G__7264 = cljs.core.count.call(null,c__4408__auto___7261);
var G__7265 = (0);
seq__7239_7248 = G__7262;
chunk__7240_7249 = G__7263;
count__7241_7250 = G__7264;
i__7242_7251 = G__7265;
continue;
}
} else
{var vec__7244_7266 = cljs.core.first.call(null,seq__7239_7260__$1);var type_7267 = cljs.core.nth.call(null,vec__7244_7266,(0),null);var f_7268 = cljs.core.nth.call(null,vec__7244_7266,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7267,((function (seq__7239_7248,chunk__7240_7249,count__7241_7250,i__7242_7251,vec__7244_7266,type_7267,f_7268,seq__7239_7260__$1,temp__4126__auto___7259,vec__7238_7245,elem_7246,selector_7247){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7267,this_fn);
return f_7268.call(null,e);
});})(seq__7239_7248,chunk__7240_7249,count__7241_7250,i__7242_7251,vec__7244_7266,type_7267,f_7268,seq__7239_7260__$1,temp__4126__auto___7259,vec__7238_7245,elem_7246,selector_7247))
);
{
var G__7269 = cljs.core.next.call(null,seq__7239_7260__$1);
var G__7270 = null;
var G__7271 = (0);
var G__7272 = (0);
seq__7239_7248 = G__7269;
chunk__7240_7249 = G__7270;
count__7241_7250 = G__7271;
i__7242_7251 = G__7272;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7273){
var elem_sel = cljs.core.first(arglist__7273);
var type_fs = cljs.core.rest(arglist__7273);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map