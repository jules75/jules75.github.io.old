// Compiled by ClojureScript 0.0-2311
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
dommy.core.text = (function text(elem){var or__3551__auto__ = elem.textContent;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
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
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__5302_SHARP_){return !((p1__5302_SHARP_ === base));
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
var style = elem.style;var seq__5309_5315 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__5310_5316 = null;var count__5311_5317 = (0);var i__5312_5318 = (0);while(true){
if((i__5312_5318 < count__5311_5317))
{var vec__5313_5319 = cljs.core._nth.call(null,chunk__5310_5316,i__5312_5318);var k_5320 = cljs.core.nth.call(null,vec__5313_5319,(0),null);var v_5321 = cljs.core.nth.call(null,vec__5313_5319,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_5320),v_5321);
{
var G__5322 = seq__5309_5315;
var G__5323 = chunk__5310_5316;
var G__5324 = count__5311_5317;
var G__5325 = (i__5312_5318 + (1));
seq__5309_5315 = G__5322;
chunk__5310_5316 = G__5323;
count__5311_5317 = G__5324;
i__5312_5318 = G__5325;
continue;
}
} else
{var temp__4126__auto___5326 = cljs.core.seq.call(null,seq__5309_5315);if(temp__4126__auto___5326)
{var seq__5309_5327__$1 = temp__4126__auto___5326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5309_5327__$1))
{var c__4307__auto___5328 = cljs.core.chunk_first.call(null,seq__5309_5327__$1);{
var G__5329 = cljs.core.chunk_rest.call(null,seq__5309_5327__$1);
var G__5330 = c__4307__auto___5328;
var G__5331 = cljs.core.count.call(null,c__4307__auto___5328);
var G__5332 = (0);
seq__5309_5315 = G__5329;
chunk__5310_5316 = G__5330;
count__5311_5317 = G__5331;
i__5312_5318 = G__5332;
continue;
}
} else
{var vec__5314_5333 = cljs.core.first.call(null,seq__5309_5327__$1);var k_5334 = cljs.core.nth.call(null,vec__5314_5333,(0),null);var v_5335 = cljs.core.nth.call(null,vec__5314_5333,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_5334),v_5335);
{
var G__5336 = cljs.core.next.call(null,seq__5309_5327__$1);
var G__5337 = null;
var G__5338 = (0);
var G__5339 = (0);
seq__5309_5315 = G__5336;
chunk__5310_5316 = G__5337;
count__5311_5317 = G__5338;
i__5312_5318 = G__5339;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5340){
var elem = cljs.core.first(arglist__5340);
var kvs = cljs.core.rest(arglist__5340);
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
var seq__5347_5353 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__5348_5354 = null;var count__5349_5355 = (0);var i__5350_5356 = (0);while(true){
if((i__5350_5356 < count__5349_5355))
{var vec__5351_5357 = cljs.core._nth.call(null,chunk__5348_5354,i__5350_5356);var k_5358 = cljs.core.nth.call(null,vec__5351_5357,(0),null);var v_5359 = cljs.core.nth.call(null,vec__5351_5357,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_5358,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_5359)+"px"));
{
var G__5360 = seq__5347_5353;
var G__5361 = chunk__5348_5354;
var G__5362 = count__5349_5355;
var G__5363 = (i__5350_5356 + (1));
seq__5347_5353 = G__5360;
chunk__5348_5354 = G__5361;
count__5349_5355 = G__5362;
i__5350_5356 = G__5363;
continue;
}
} else
{var temp__4126__auto___5364 = cljs.core.seq.call(null,seq__5347_5353);if(temp__4126__auto___5364)
{var seq__5347_5365__$1 = temp__4126__auto___5364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5347_5365__$1))
{var c__4307__auto___5366 = cljs.core.chunk_first.call(null,seq__5347_5365__$1);{
var G__5367 = cljs.core.chunk_rest.call(null,seq__5347_5365__$1);
var G__5368 = c__4307__auto___5366;
var G__5369 = cljs.core.count.call(null,c__4307__auto___5366);
var G__5370 = (0);
seq__5347_5353 = G__5367;
chunk__5348_5354 = G__5368;
count__5349_5355 = G__5369;
i__5350_5356 = G__5370;
continue;
}
} else
{var vec__5352_5371 = cljs.core.first.call(null,seq__5347_5365__$1);var k_5372 = cljs.core.nth.call(null,vec__5352_5371,(0),null);var v_5373 = cljs.core.nth.call(null,vec__5352_5371,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_5372,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_5373)+"px"));
{
var G__5374 = cljs.core.next.call(null,seq__5347_5365__$1);
var G__5375 = null;
var G__5376 = (0);
var G__5377 = (0);
seq__5347_5353 = G__5374;
chunk__5348_5354 = G__5375;
count__5349_5355 = G__5376;
i__5350_5356 = G__5377;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__5378){
var elem = cljs.core.first(arglist__5378);
var kvs = cljs.core.rest(arglist__5378);
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
{var G__5387 = elem;(G__5387[k__$1] = v);
return G__5387;
} else
{var G__5388 = elem;G__5388.setAttribute(k__$1,v);
return G__5388;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__5395__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__5389_5396 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__5390_5397 = null;var count__5391_5398 = (0);var i__5392_5399 = (0);while(true){
if((i__5392_5399 < count__5391_5398))
{var vec__5393_5400 = cljs.core._nth.call(null,chunk__5390_5397,i__5392_5399);var k_5401__$1 = cljs.core.nth.call(null,vec__5393_5400,(0),null);var v_5402__$1 = cljs.core.nth.call(null,vec__5393_5400,(1),null);set_attr_BANG_.call(null,elem,k_5401__$1,v_5402__$1);
{
var G__5403 = seq__5389_5396;
var G__5404 = chunk__5390_5397;
var G__5405 = count__5391_5398;
var G__5406 = (i__5392_5399 + (1));
seq__5389_5396 = G__5403;
chunk__5390_5397 = G__5404;
count__5391_5398 = G__5405;
i__5392_5399 = G__5406;
continue;
}
} else
{var temp__4126__auto___5407 = cljs.core.seq.call(null,seq__5389_5396);if(temp__4126__auto___5407)
{var seq__5389_5408__$1 = temp__4126__auto___5407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5389_5408__$1))
{var c__4307__auto___5409 = cljs.core.chunk_first.call(null,seq__5389_5408__$1);{
var G__5410 = cljs.core.chunk_rest.call(null,seq__5389_5408__$1);
var G__5411 = c__4307__auto___5409;
var G__5412 = cljs.core.count.call(null,c__4307__auto___5409);
var G__5413 = (0);
seq__5389_5396 = G__5410;
chunk__5390_5397 = G__5411;
count__5391_5398 = G__5412;
i__5392_5399 = G__5413;
continue;
}
} else
{var vec__5394_5414 = cljs.core.first.call(null,seq__5389_5408__$1);var k_5415__$1 = cljs.core.nth.call(null,vec__5394_5414,(0),null);var v_5416__$1 = cljs.core.nth.call(null,vec__5394_5414,(1),null);set_attr_BANG_.call(null,elem,k_5415__$1,v_5416__$1);
{
var G__5417 = cljs.core.next.call(null,seq__5389_5408__$1);
var G__5418 = null;
var G__5419 = (0);
var G__5420 = (0);
seq__5389_5396 = G__5417;
chunk__5390_5397 = G__5418;
count__5391_5398 = G__5419;
i__5392_5399 = G__5420;
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
var G__5395 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__5395__delegate.call(this,elem,k,v,kvs);};
G__5395.cljs$lang$maxFixedArity = 3;
G__5395.cljs$lang$applyTo = (function (arglist__5421){
var elem = cljs.core.first(arglist__5421);
arglist__5421 = cljs.core.next(arglist__5421);
var k = cljs.core.first(arglist__5421);
arglist__5421 = cljs.core.next(arglist__5421);
var v = cljs.core.first(arglist__5421);
var kvs = cljs.core.rest(arglist__5421);
return G__5395__delegate(elem,k,v,kvs);
});
G__5395.cljs$core$IFn$_invoke$arity$variadic = G__5395__delegate;
return G__5395;
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
var remove_attr_BANG___2 = (function (elem,k){var k_5430__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_5430__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_5430__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__5431__delegate = function (elem,k,ks){var seq__5426_5432 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__5427_5433 = null;var count__5428_5434 = (0);var i__5429_5435 = (0);while(true){
if((i__5429_5435 < count__5428_5434))
{var k_5436__$1 = cljs.core._nth.call(null,chunk__5427_5433,i__5429_5435);remove_attr_BANG_.call(null,elem,k_5436__$1);
{
var G__5437 = seq__5426_5432;
var G__5438 = chunk__5427_5433;
var G__5439 = count__5428_5434;
var G__5440 = (i__5429_5435 + (1));
seq__5426_5432 = G__5437;
chunk__5427_5433 = G__5438;
count__5428_5434 = G__5439;
i__5429_5435 = G__5440;
continue;
}
} else
{var temp__4126__auto___5441 = cljs.core.seq.call(null,seq__5426_5432);if(temp__4126__auto___5441)
{var seq__5426_5442__$1 = temp__4126__auto___5441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5426_5442__$1))
{var c__4307__auto___5443 = cljs.core.chunk_first.call(null,seq__5426_5442__$1);{
var G__5444 = cljs.core.chunk_rest.call(null,seq__5426_5442__$1);
var G__5445 = c__4307__auto___5443;
var G__5446 = cljs.core.count.call(null,c__4307__auto___5443);
var G__5447 = (0);
seq__5426_5432 = G__5444;
chunk__5427_5433 = G__5445;
count__5428_5434 = G__5446;
i__5429_5435 = G__5447;
continue;
}
} else
{var k_5448__$1 = cljs.core.first.call(null,seq__5426_5442__$1);remove_attr_BANG_.call(null,elem,k_5448__$1);
{
var G__5449 = cljs.core.next.call(null,seq__5426_5442__$1);
var G__5450 = null;
var G__5451 = (0);
var G__5452 = (0);
seq__5426_5432 = G__5449;
chunk__5427_5433 = G__5450;
count__5428_5434 = G__5451;
i__5429_5435 = G__5452;
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
var G__5431 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5431__delegate.call(this,elem,k,ks);};
G__5431.cljs$lang$maxFixedArity = 2;
G__5431.cljs$lang$applyTo = (function (arglist__5453){
var elem = cljs.core.first(arglist__5453);
arglist__5453 = cljs.core.next(arglist__5453);
var k = cljs.core.first(arglist__5453);
var ks = cljs.core.rest(arglist__5453);
return G__5431__delegate(elem,k,ks);
});
G__5431.cljs$core$IFn$_invoke$arity$variadic = G__5431__delegate;
return G__5431;
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
{var temp__4124__auto___5478 = elem.classList;if(cljs.core.truth_(temp__4124__auto___5478))
{var class_list_5479 = temp__4124__auto___5478;var seq__5466_5480 = cljs.core.seq.call(null,classes__$1);var chunk__5467_5481 = null;var count__5468_5482 = (0);var i__5469_5483 = (0);while(true){
if((i__5469_5483 < count__5468_5482))
{var c_5484 = cljs.core._nth.call(null,chunk__5467_5481,i__5469_5483);class_list_5479.add(c_5484);
{
var G__5485 = seq__5466_5480;
var G__5486 = chunk__5467_5481;
var G__5487 = count__5468_5482;
var G__5488 = (i__5469_5483 + (1));
seq__5466_5480 = G__5485;
chunk__5467_5481 = G__5486;
count__5468_5482 = G__5487;
i__5469_5483 = G__5488;
continue;
}
} else
{var temp__4126__auto___5489 = cljs.core.seq.call(null,seq__5466_5480);if(temp__4126__auto___5489)
{var seq__5466_5490__$1 = temp__4126__auto___5489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5466_5490__$1))
{var c__4307__auto___5491 = cljs.core.chunk_first.call(null,seq__5466_5490__$1);{
var G__5492 = cljs.core.chunk_rest.call(null,seq__5466_5490__$1);
var G__5493 = c__4307__auto___5491;
var G__5494 = cljs.core.count.call(null,c__4307__auto___5491);
var G__5495 = (0);
seq__5466_5480 = G__5492;
chunk__5467_5481 = G__5493;
count__5468_5482 = G__5494;
i__5469_5483 = G__5495;
continue;
}
} else
{var c_5496 = cljs.core.first.call(null,seq__5466_5490__$1);class_list_5479.add(c_5496);
{
var G__5497 = cljs.core.next.call(null,seq__5466_5490__$1);
var G__5498 = null;
var G__5499 = (0);
var G__5500 = (0);
seq__5466_5480 = G__5497;
chunk__5467_5481 = G__5498;
count__5468_5482 = G__5499;
i__5469_5483 = G__5500;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__5470_5501 = cljs.core.seq.call(null,classes__$1);var chunk__5471_5502 = null;var count__5472_5503 = (0);var i__5473_5504 = (0);while(true){
if((i__5473_5504 < count__5472_5503))
{var c_5505 = cljs.core._nth.call(null,chunk__5471_5502,i__5473_5504);var class_name_5506 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_5506,c_5505)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_5506 === ""))?c_5505:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_5506)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_5505))));
}
{
var G__5507 = seq__5470_5501;
var G__5508 = chunk__5471_5502;
var G__5509 = count__5472_5503;
var G__5510 = (i__5473_5504 + (1));
seq__5470_5501 = G__5507;
chunk__5471_5502 = G__5508;
count__5472_5503 = G__5509;
i__5473_5504 = G__5510;
continue;
}
} else
{var temp__4126__auto___5511 = cljs.core.seq.call(null,seq__5470_5501);if(temp__4126__auto___5511)
{var seq__5470_5512__$1 = temp__4126__auto___5511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5470_5512__$1))
{var c__4307__auto___5513 = cljs.core.chunk_first.call(null,seq__5470_5512__$1);{
var G__5514 = cljs.core.chunk_rest.call(null,seq__5470_5512__$1);
var G__5515 = c__4307__auto___5513;
var G__5516 = cljs.core.count.call(null,c__4307__auto___5513);
var G__5517 = (0);
seq__5470_5501 = G__5514;
chunk__5471_5502 = G__5515;
count__5472_5503 = G__5516;
i__5473_5504 = G__5517;
continue;
}
} else
{var c_5518 = cljs.core.first.call(null,seq__5470_5512__$1);var class_name_5519 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_5519,c_5518)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_5519 === ""))?c_5518:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_5519)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_5518))));
}
{
var G__5520 = cljs.core.next.call(null,seq__5470_5512__$1);
var G__5521 = null;
var G__5522 = (0);
var G__5523 = (0);
seq__5470_5501 = G__5520;
chunk__5471_5502 = G__5521;
count__5472_5503 = G__5522;
i__5473_5504 = G__5523;
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
var G__5524__delegate = function (elem,classes,more_classes){var seq__5474_5525 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__5475_5526 = null;var count__5476_5527 = (0);var i__5477_5528 = (0);while(true){
if((i__5477_5528 < count__5476_5527))
{var c_5529 = cljs.core._nth.call(null,chunk__5475_5526,i__5477_5528);add_class_BANG_.call(null,elem,c_5529);
{
var G__5530 = seq__5474_5525;
var G__5531 = chunk__5475_5526;
var G__5532 = count__5476_5527;
var G__5533 = (i__5477_5528 + (1));
seq__5474_5525 = G__5530;
chunk__5475_5526 = G__5531;
count__5476_5527 = G__5532;
i__5477_5528 = G__5533;
continue;
}
} else
{var temp__4126__auto___5534 = cljs.core.seq.call(null,seq__5474_5525);if(temp__4126__auto___5534)
{var seq__5474_5535__$1 = temp__4126__auto___5534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5474_5535__$1))
{var c__4307__auto___5536 = cljs.core.chunk_first.call(null,seq__5474_5535__$1);{
var G__5537 = cljs.core.chunk_rest.call(null,seq__5474_5535__$1);
var G__5538 = c__4307__auto___5536;
var G__5539 = cljs.core.count.call(null,c__4307__auto___5536);
var G__5540 = (0);
seq__5474_5525 = G__5537;
chunk__5475_5526 = G__5538;
count__5476_5527 = G__5539;
i__5477_5528 = G__5540;
continue;
}
} else
{var c_5541 = cljs.core.first.call(null,seq__5474_5535__$1);add_class_BANG_.call(null,elem,c_5541);
{
var G__5542 = cljs.core.next.call(null,seq__5474_5535__$1);
var G__5543 = null;
var G__5544 = (0);
var G__5545 = (0);
seq__5474_5525 = G__5542;
chunk__5475_5526 = G__5543;
count__5476_5527 = G__5544;
i__5477_5528 = G__5545;
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
var G__5524 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5524__delegate.call(this,elem,classes,more_classes);};
G__5524.cljs$lang$maxFixedArity = 2;
G__5524.cljs$lang$applyTo = (function (arglist__5546){
var elem = cljs.core.first(arglist__5546);
arglist__5546 = cljs.core.next(arglist__5546);
var classes = cljs.core.first(arglist__5546);
var more_classes = cljs.core.rest(arglist__5546);
return G__5524__delegate(elem,classes,more_classes);
});
G__5524.cljs$core$IFn$_invoke$arity$variadic = G__5524__delegate;
return G__5524;
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
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___5555 = elem.classList;if(cljs.core.truth_(temp__4124__auto___5555))
{var class_list_5556 = temp__4124__auto___5555;class_list_5556.remove(c__$1);
} else
{var class_name_5557 = dommy.core.class$.call(null,elem);var new_class_name_5558 = dommy.utils.remove_class_str.call(null,class_name_5557,c__$1);if((class_name_5557 === new_class_name_5558))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_5558);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__5559__delegate = function (elem,class$,classes){var seq__5551 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__5552 = null;var count__5553 = (0);var i__5554 = (0);while(true){
if((i__5554 < count__5553))
{var c = cljs.core._nth.call(null,chunk__5552,i__5554);remove_class_BANG_.call(null,elem,c);
{
var G__5560 = seq__5551;
var G__5561 = chunk__5552;
var G__5562 = count__5553;
var G__5563 = (i__5554 + (1));
seq__5551 = G__5560;
chunk__5552 = G__5561;
count__5553 = G__5562;
i__5554 = G__5563;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5551);if(temp__4126__auto__)
{var seq__5551__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5551__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__5551__$1);{
var G__5564 = cljs.core.chunk_rest.call(null,seq__5551__$1);
var G__5565 = c__4307__auto__;
var G__5566 = cljs.core.count.call(null,c__4307__auto__);
var G__5567 = (0);
seq__5551 = G__5564;
chunk__5552 = G__5565;
count__5553 = G__5566;
i__5554 = G__5567;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5551__$1);remove_class_BANG_.call(null,elem,c);
{
var G__5568 = cljs.core.next.call(null,seq__5551__$1);
var G__5569 = null;
var G__5570 = (0);
var G__5571 = (0);
seq__5551 = G__5568;
chunk__5552 = G__5569;
count__5553 = G__5570;
i__5554 = G__5571;
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
var G__5559 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5559__delegate.call(this,elem,class$,classes);};
G__5559.cljs$lang$maxFixedArity = 2;
G__5559.cljs$lang$applyTo = (function (arglist__5572){
var elem = cljs.core.first(arglist__5572);
arglist__5572 = cljs.core.next(arglist__5572);
var class$ = cljs.core.first(arglist__5572);
var classes = cljs.core.rest(arglist__5572);
return G__5559__delegate(elem,class$,classes);
});
G__5559.cljs$core$IFn$_invoke$arity$variadic = G__5559__delegate;
return G__5559;
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
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___5573 = elem.classList;if(cljs.core.truth_(temp__4124__auto___5573))
{var class_list_5574 = temp__4124__auto___5573;class_list_5574.toggle(c__$1);
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
var append_BANG___2 = (function (parent,child){var G__5580 = parent;G__5580.appendChild(child);
return G__5580;
});
var append_BANG___3 = (function() { 
var G__5585__delegate = function (parent,child,more_children){var seq__5581_5586 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5582_5587 = null;var count__5583_5588 = (0);var i__5584_5589 = (0);while(true){
if((i__5584_5589 < count__5583_5588))
{var c_5590 = cljs.core._nth.call(null,chunk__5582_5587,i__5584_5589);append_BANG_.call(null,parent,c_5590);
{
var G__5591 = seq__5581_5586;
var G__5592 = chunk__5582_5587;
var G__5593 = count__5583_5588;
var G__5594 = (i__5584_5589 + (1));
seq__5581_5586 = G__5591;
chunk__5582_5587 = G__5592;
count__5583_5588 = G__5593;
i__5584_5589 = G__5594;
continue;
}
} else
{var temp__4126__auto___5595 = cljs.core.seq.call(null,seq__5581_5586);if(temp__4126__auto___5595)
{var seq__5581_5596__$1 = temp__4126__auto___5595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5581_5596__$1))
{var c__4307__auto___5597 = cljs.core.chunk_first.call(null,seq__5581_5596__$1);{
var G__5598 = cljs.core.chunk_rest.call(null,seq__5581_5596__$1);
var G__5599 = c__4307__auto___5597;
var G__5600 = cljs.core.count.call(null,c__4307__auto___5597);
var G__5601 = (0);
seq__5581_5586 = G__5598;
chunk__5582_5587 = G__5599;
count__5583_5588 = G__5600;
i__5584_5589 = G__5601;
continue;
}
} else
{var c_5602 = cljs.core.first.call(null,seq__5581_5596__$1);append_BANG_.call(null,parent,c_5602);
{
var G__5603 = cljs.core.next.call(null,seq__5581_5596__$1);
var G__5604 = null;
var G__5605 = (0);
var G__5606 = (0);
seq__5581_5586 = G__5603;
chunk__5582_5587 = G__5604;
count__5583_5588 = G__5605;
i__5584_5589 = G__5606;
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
var G__5585 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5585__delegate.call(this,parent,child,more_children);};
G__5585.cljs$lang$maxFixedArity = 2;
G__5585.cljs$lang$applyTo = (function (arglist__5607){
var parent = cljs.core.first(arglist__5607);
arglist__5607 = cljs.core.next(arglist__5607);
var child = cljs.core.first(arglist__5607);
var more_children = cljs.core.rest(arglist__5607);
return G__5585__delegate(parent,child,more_children);
});
G__5585.cljs$core$IFn$_invoke$arity$variadic = G__5585__delegate;
return G__5585;
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
var prepend_BANG___2 = (function (parent,child){var G__5613 = parent;G__5613.insertBefore(child,parent.firstChild);
return G__5613;
});
var prepend_BANG___3 = (function() { 
var G__5618__delegate = function (parent,child,more_children){var seq__5614_5619 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5615_5620 = null;var count__5616_5621 = (0);var i__5617_5622 = (0);while(true){
if((i__5617_5622 < count__5616_5621))
{var c_5623 = cljs.core._nth.call(null,chunk__5615_5620,i__5617_5622);prepend_BANG_.call(null,parent,c_5623);
{
var G__5624 = seq__5614_5619;
var G__5625 = chunk__5615_5620;
var G__5626 = count__5616_5621;
var G__5627 = (i__5617_5622 + (1));
seq__5614_5619 = G__5624;
chunk__5615_5620 = G__5625;
count__5616_5621 = G__5626;
i__5617_5622 = G__5627;
continue;
}
} else
{var temp__4126__auto___5628 = cljs.core.seq.call(null,seq__5614_5619);if(temp__4126__auto___5628)
{var seq__5614_5629__$1 = temp__4126__auto___5628;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5614_5629__$1))
{var c__4307__auto___5630 = cljs.core.chunk_first.call(null,seq__5614_5629__$1);{
var G__5631 = cljs.core.chunk_rest.call(null,seq__5614_5629__$1);
var G__5632 = c__4307__auto___5630;
var G__5633 = cljs.core.count.call(null,c__4307__auto___5630);
var G__5634 = (0);
seq__5614_5619 = G__5631;
chunk__5615_5620 = G__5632;
count__5616_5621 = G__5633;
i__5617_5622 = G__5634;
continue;
}
} else
{var c_5635 = cljs.core.first.call(null,seq__5614_5629__$1);prepend_BANG_.call(null,parent,c_5635);
{
var G__5636 = cljs.core.next.call(null,seq__5614_5629__$1);
var G__5637 = null;
var G__5638 = (0);
var G__5639 = (0);
seq__5614_5619 = G__5636;
chunk__5615_5620 = G__5637;
count__5616_5621 = G__5638;
i__5617_5622 = G__5639;
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
var G__5618 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5618__delegate.call(this,parent,child,more_children);};
G__5618.cljs$lang$maxFixedArity = 2;
G__5618.cljs$lang$applyTo = (function (arglist__5640){
var parent = cljs.core.first(arglist__5640);
arglist__5640 = cljs.core.next(arglist__5640);
var child = cljs.core.first(arglist__5640);
var more_children = cljs.core.rest(arglist__5640);
return G__5618__delegate(parent,child,more_children);
});
G__5618.cljs$core$IFn$_invoke$arity$variadic = G__5618__delegate;
return G__5618;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___5641 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___5641))
{var next_5642 = temp__4124__auto___5641;dommy.core.insert_before_BANG_.call(null,elem,next_5642);
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
var remove_BANG___2 = (function (p,elem){var G__5644 = p;G__5644.removeChild(elem);
return G__5644;
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5645){var vec__5646 = p__5645;var special_mouse_event = cljs.core.nth.call(null,vec__5646,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__5646,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__5646,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__5646,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3551__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3539__auto__ = related_target;if(cljs.core.truth_(and__3539__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3539__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__5646,special_mouse_event,real_mouse_event))
});})(vec__5646,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3539__auto__ = selected_target;if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3539__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__3551__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5647){
var elem = cljs.core.first(arglist__5647);
arglist__5647 = cljs.core.next(arglist__5647);
var f = cljs.core.first(arglist__5647);
var args = cljs.core.rest(arglist__5647);
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
var vec__5671_5694 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5695 = cljs.core.nth.call(null,vec__5671_5694,(0),null);var selector_5696 = cljs.core.nth.call(null,vec__5671_5694,(1),null);var seq__5672_5697 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5679_5698 = null;var count__5680_5699 = (0);var i__5681_5700 = (0);while(true){
if((i__5681_5700 < count__5680_5699))
{var vec__5688_5701 = cljs.core._nth.call(null,chunk__5679_5698,i__5681_5700);var orig_type_5702 = cljs.core.nth.call(null,vec__5688_5701,(0),null);var f_5703 = cljs.core.nth.call(null,vec__5688_5701,(1),null);var seq__5682_5704 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5702,new cljs.core.PersistentArrayMap.fromArray([orig_type_5702,cljs.core.identity], true, false)));var chunk__5684_5705 = null;var count__5685_5706 = (0);var i__5686_5707 = (0);while(true){
if((i__5686_5707 < count__5685_5706))
{var vec__5689_5708 = cljs.core._nth.call(null,chunk__5684_5705,i__5686_5707);var actual_type_5709 = cljs.core.nth.call(null,vec__5689_5708,(0),null);var factory_5710 = cljs.core.nth.call(null,vec__5689_5708,(1),null);var canonical_f_5711 = (cljs.core.truth_(selector_5696)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5695,selector_5696):cljs.core.identity).call(null,factory_5710.call(null,f_5703));dommy.core.update_event_listeners_BANG_.call(null,elem_5695,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5696,actual_type_5709,f_5703], null),canonical_f_5711);
if(cljs.core.truth_(elem_5695.addEventListener))
{elem_5695.addEventListener(cljs.core.name.call(null,actual_type_5709),canonical_f_5711);
} else
{elem_5695.attachEvent(cljs.core.name.call(null,actual_type_5709),canonical_f_5711);
}
{
var G__5712 = seq__5682_5704;
var G__5713 = chunk__5684_5705;
var G__5714 = count__5685_5706;
var G__5715 = (i__5686_5707 + (1));
seq__5682_5704 = G__5712;
chunk__5684_5705 = G__5713;
count__5685_5706 = G__5714;
i__5686_5707 = G__5715;
continue;
}
} else
{var temp__4126__auto___5716 = cljs.core.seq.call(null,seq__5682_5704);if(temp__4126__auto___5716)
{var seq__5682_5717__$1 = temp__4126__auto___5716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5682_5717__$1))
{var c__4307__auto___5718 = cljs.core.chunk_first.call(null,seq__5682_5717__$1);{
var G__5719 = cljs.core.chunk_rest.call(null,seq__5682_5717__$1);
var G__5720 = c__4307__auto___5718;
var G__5721 = cljs.core.count.call(null,c__4307__auto___5718);
var G__5722 = (0);
seq__5682_5704 = G__5719;
chunk__5684_5705 = G__5720;
count__5685_5706 = G__5721;
i__5686_5707 = G__5722;
continue;
}
} else
{var vec__5690_5723 = cljs.core.first.call(null,seq__5682_5717__$1);var actual_type_5724 = cljs.core.nth.call(null,vec__5690_5723,(0),null);var factory_5725 = cljs.core.nth.call(null,vec__5690_5723,(1),null);var canonical_f_5726 = (cljs.core.truth_(selector_5696)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5695,selector_5696):cljs.core.identity).call(null,factory_5725.call(null,f_5703));dommy.core.update_event_listeners_BANG_.call(null,elem_5695,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5696,actual_type_5724,f_5703], null),canonical_f_5726);
if(cljs.core.truth_(elem_5695.addEventListener))
{elem_5695.addEventListener(cljs.core.name.call(null,actual_type_5724),canonical_f_5726);
} else
{elem_5695.attachEvent(cljs.core.name.call(null,actual_type_5724),canonical_f_5726);
}
{
var G__5727 = cljs.core.next.call(null,seq__5682_5717__$1);
var G__5728 = null;
var G__5729 = (0);
var G__5730 = (0);
seq__5682_5704 = G__5727;
chunk__5684_5705 = G__5728;
count__5685_5706 = G__5729;
i__5686_5707 = G__5730;
continue;
}
}
} else
{}
}
break;
}
{
var G__5731 = seq__5672_5697;
var G__5732 = chunk__5679_5698;
var G__5733 = count__5680_5699;
var G__5734 = (i__5681_5700 + (1));
seq__5672_5697 = G__5731;
chunk__5679_5698 = G__5732;
count__5680_5699 = G__5733;
i__5681_5700 = G__5734;
continue;
}
} else
{var temp__4126__auto___5735 = cljs.core.seq.call(null,seq__5672_5697);if(temp__4126__auto___5735)
{var seq__5672_5736__$1 = temp__4126__auto___5735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5672_5736__$1))
{var c__4307__auto___5737 = cljs.core.chunk_first.call(null,seq__5672_5736__$1);{
var G__5738 = cljs.core.chunk_rest.call(null,seq__5672_5736__$1);
var G__5739 = c__4307__auto___5737;
var G__5740 = cljs.core.count.call(null,c__4307__auto___5737);
var G__5741 = (0);
seq__5672_5697 = G__5738;
chunk__5679_5698 = G__5739;
count__5680_5699 = G__5740;
i__5681_5700 = G__5741;
continue;
}
} else
{var vec__5691_5742 = cljs.core.first.call(null,seq__5672_5736__$1);var orig_type_5743 = cljs.core.nth.call(null,vec__5691_5742,(0),null);var f_5744 = cljs.core.nth.call(null,vec__5691_5742,(1),null);var seq__5673_5745 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5743,new cljs.core.PersistentArrayMap.fromArray([orig_type_5743,cljs.core.identity], true, false)));var chunk__5675_5746 = null;var count__5676_5747 = (0);var i__5677_5748 = (0);while(true){
if((i__5677_5748 < count__5676_5747))
{var vec__5692_5749 = cljs.core._nth.call(null,chunk__5675_5746,i__5677_5748);var actual_type_5750 = cljs.core.nth.call(null,vec__5692_5749,(0),null);var factory_5751 = cljs.core.nth.call(null,vec__5692_5749,(1),null);var canonical_f_5752 = (cljs.core.truth_(selector_5696)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5695,selector_5696):cljs.core.identity).call(null,factory_5751.call(null,f_5744));dommy.core.update_event_listeners_BANG_.call(null,elem_5695,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5696,actual_type_5750,f_5744], null),canonical_f_5752);
if(cljs.core.truth_(elem_5695.addEventListener))
{elem_5695.addEventListener(cljs.core.name.call(null,actual_type_5750),canonical_f_5752);
} else
{elem_5695.attachEvent(cljs.core.name.call(null,actual_type_5750),canonical_f_5752);
}
{
var G__5753 = seq__5673_5745;
var G__5754 = chunk__5675_5746;
var G__5755 = count__5676_5747;
var G__5756 = (i__5677_5748 + (1));
seq__5673_5745 = G__5753;
chunk__5675_5746 = G__5754;
count__5676_5747 = G__5755;
i__5677_5748 = G__5756;
continue;
}
} else
{var temp__4126__auto___5757__$1 = cljs.core.seq.call(null,seq__5673_5745);if(temp__4126__auto___5757__$1)
{var seq__5673_5758__$1 = temp__4126__auto___5757__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5673_5758__$1))
{var c__4307__auto___5759 = cljs.core.chunk_first.call(null,seq__5673_5758__$1);{
var G__5760 = cljs.core.chunk_rest.call(null,seq__5673_5758__$1);
var G__5761 = c__4307__auto___5759;
var G__5762 = cljs.core.count.call(null,c__4307__auto___5759);
var G__5763 = (0);
seq__5673_5745 = G__5760;
chunk__5675_5746 = G__5761;
count__5676_5747 = G__5762;
i__5677_5748 = G__5763;
continue;
}
} else
{var vec__5693_5764 = cljs.core.first.call(null,seq__5673_5758__$1);var actual_type_5765 = cljs.core.nth.call(null,vec__5693_5764,(0),null);var factory_5766 = cljs.core.nth.call(null,vec__5693_5764,(1),null);var canonical_f_5767 = (cljs.core.truth_(selector_5696)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5695,selector_5696):cljs.core.identity).call(null,factory_5766.call(null,f_5744));dommy.core.update_event_listeners_BANG_.call(null,elem_5695,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5696,actual_type_5765,f_5744], null),canonical_f_5767);
if(cljs.core.truth_(elem_5695.addEventListener))
{elem_5695.addEventListener(cljs.core.name.call(null,actual_type_5765),canonical_f_5767);
} else
{elem_5695.attachEvent(cljs.core.name.call(null,actual_type_5765),canonical_f_5767);
}
{
var G__5768 = cljs.core.next.call(null,seq__5673_5758__$1);
var G__5769 = null;
var G__5770 = (0);
var G__5771 = (0);
seq__5673_5745 = G__5768;
chunk__5675_5746 = G__5769;
count__5676_5747 = G__5770;
i__5677_5748 = G__5771;
continue;
}
}
} else
{}
}
break;
}
{
var G__5772 = cljs.core.next.call(null,seq__5672_5736__$1);
var G__5773 = null;
var G__5774 = (0);
var G__5775 = (0);
seq__5672_5697 = G__5772;
chunk__5679_5698 = G__5773;
count__5680_5699 = G__5774;
i__5681_5700 = G__5775;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__5776){
var elem_sel = cljs.core.first(arglist__5776);
var type_fs = cljs.core.rest(arglist__5776);
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
var vec__5800_5823 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5824 = cljs.core.nth.call(null,vec__5800_5823,(0),null);var selector_5825 = cljs.core.nth.call(null,vec__5800_5823,(1),null);var seq__5801_5826 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5808_5827 = null;var count__5809_5828 = (0);var i__5810_5829 = (0);while(true){
if((i__5810_5829 < count__5809_5828))
{var vec__5817_5830 = cljs.core._nth.call(null,chunk__5808_5827,i__5810_5829);var orig_type_5831 = cljs.core.nth.call(null,vec__5817_5830,(0),null);var f_5832 = cljs.core.nth.call(null,vec__5817_5830,(1),null);var seq__5811_5833 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5831,new cljs.core.PersistentArrayMap.fromArray([orig_type_5831,cljs.core.identity], true, false)));var chunk__5813_5834 = null;var count__5814_5835 = (0);var i__5815_5836 = (0);while(true){
if((i__5815_5836 < count__5814_5835))
{var vec__5818_5837 = cljs.core._nth.call(null,chunk__5813_5834,i__5815_5836);var actual_type_5838 = cljs.core.nth.call(null,vec__5818_5837,(0),null);var __5839 = cljs.core.nth.call(null,vec__5818_5837,(1),null);var keys_5840 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5825,actual_type_5838,f_5832], null);var canonical_f_5841 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5824),keys_5840);dommy.core.update_event_listeners_BANG_.call(null,elem_5824,dommy.utils.dissoc_in,keys_5840);
if(cljs.core.truth_(elem_5824.removeEventListener))
{elem_5824.removeEventListener(cljs.core.name.call(null,actual_type_5838),canonical_f_5841);
} else
{elem_5824.detachEvent(cljs.core.name.call(null,actual_type_5838),canonical_f_5841);
}
{
var G__5842 = seq__5811_5833;
var G__5843 = chunk__5813_5834;
var G__5844 = count__5814_5835;
var G__5845 = (i__5815_5836 + (1));
seq__5811_5833 = G__5842;
chunk__5813_5834 = G__5843;
count__5814_5835 = G__5844;
i__5815_5836 = G__5845;
continue;
}
} else
{var temp__4126__auto___5846 = cljs.core.seq.call(null,seq__5811_5833);if(temp__4126__auto___5846)
{var seq__5811_5847__$1 = temp__4126__auto___5846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5811_5847__$1))
{var c__4307__auto___5848 = cljs.core.chunk_first.call(null,seq__5811_5847__$1);{
var G__5849 = cljs.core.chunk_rest.call(null,seq__5811_5847__$1);
var G__5850 = c__4307__auto___5848;
var G__5851 = cljs.core.count.call(null,c__4307__auto___5848);
var G__5852 = (0);
seq__5811_5833 = G__5849;
chunk__5813_5834 = G__5850;
count__5814_5835 = G__5851;
i__5815_5836 = G__5852;
continue;
}
} else
{var vec__5819_5853 = cljs.core.first.call(null,seq__5811_5847__$1);var actual_type_5854 = cljs.core.nth.call(null,vec__5819_5853,(0),null);var __5855 = cljs.core.nth.call(null,vec__5819_5853,(1),null);var keys_5856 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5825,actual_type_5854,f_5832], null);var canonical_f_5857 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5824),keys_5856);dommy.core.update_event_listeners_BANG_.call(null,elem_5824,dommy.utils.dissoc_in,keys_5856);
if(cljs.core.truth_(elem_5824.removeEventListener))
{elem_5824.removeEventListener(cljs.core.name.call(null,actual_type_5854),canonical_f_5857);
} else
{elem_5824.detachEvent(cljs.core.name.call(null,actual_type_5854),canonical_f_5857);
}
{
var G__5858 = cljs.core.next.call(null,seq__5811_5847__$1);
var G__5859 = null;
var G__5860 = (0);
var G__5861 = (0);
seq__5811_5833 = G__5858;
chunk__5813_5834 = G__5859;
count__5814_5835 = G__5860;
i__5815_5836 = G__5861;
continue;
}
}
} else
{}
}
break;
}
{
var G__5862 = seq__5801_5826;
var G__5863 = chunk__5808_5827;
var G__5864 = count__5809_5828;
var G__5865 = (i__5810_5829 + (1));
seq__5801_5826 = G__5862;
chunk__5808_5827 = G__5863;
count__5809_5828 = G__5864;
i__5810_5829 = G__5865;
continue;
}
} else
{var temp__4126__auto___5866 = cljs.core.seq.call(null,seq__5801_5826);if(temp__4126__auto___5866)
{var seq__5801_5867__$1 = temp__4126__auto___5866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5801_5867__$1))
{var c__4307__auto___5868 = cljs.core.chunk_first.call(null,seq__5801_5867__$1);{
var G__5869 = cljs.core.chunk_rest.call(null,seq__5801_5867__$1);
var G__5870 = c__4307__auto___5868;
var G__5871 = cljs.core.count.call(null,c__4307__auto___5868);
var G__5872 = (0);
seq__5801_5826 = G__5869;
chunk__5808_5827 = G__5870;
count__5809_5828 = G__5871;
i__5810_5829 = G__5872;
continue;
}
} else
{var vec__5820_5873 = cljs.core.first.call(null,seq__5801_5867__$1);var orig_type_5874 = cljs.core.nth.call(null,vec__5820_5873,(0),null);var f_5875 = cljs.core.nth.call(null,vec__5820_5873,(1),null);var seq__5802_5876 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5874,new cljs.core.PersistentArrayMap.fromArray([orig_type_5874,cljs.core.identity], true, false)));var chunk__5804_5877 = null;var count__5805_5878 = (0);var i__5806_5879 = (0);while(true){
if((i__5806_5879 < count__5805_5878))
{var vec__5821_5880 = cljs.core._nth.call(null,chunk__5804_5877,i__5806_5879);var actual_type_5881 = cljs.core.nth.call(null,vec__5821_5880,(0),null);var __5882 = cljs.core.nth.call(null,vec__5821_5880,(1),null);var keys_5883 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5825,actual_type_5881,f_5875], null);var canonical_f_5884 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5824),keys_5883);dommy.core.update_event_listeners_BANG_.call(null,elem_5824,dommy.utils.dissoc_in,keys_5883);
if(cljs.core.truth_(elem_5824.removeEventListener))
{elem_5824.removeEventListener(cljs.core.name.call(null,actual_type_5881),canonical_f_5884);
} else
{elem_5824.detachEvent(cljs.core.name.call(null,actual_type_5881),canonical_f_5884);
}
{
var G__5885 = seq__5802_5876;
var G__5886 = chunk__5804_5877;
var G__5887 = count__5805_5878;
var G__5888 = (i__5806_5879 + (1));
seq__5802_5876 = G__5885;
chunk__5804_5877 = G__5886;
count__5805_5878 = G__5887;
i__5806_5879 = G__5888;
continue;
}
} else
{var temp__4126__auto___5889__$1 = cljs.core.seq.call(null,seq__5802_5876);if(temp__4126__auto___5889__$1)
{var seq__5802_5890__$1 = temp__4126__auto___5889__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5802_5890__$1))
{var c__4307__auto___5891 = cljs.core.chunk_first.call(null,seq__5802_5890__$1);{
var G__5892 = cljs.core.chunk_rest.call(null,seq__5802_5890__$1);
var G__5893 = c__4307__auto___5891;
var G__5894 = cljs.core.count.call(null,c__4307__auto___5891);
var G__5895 = (0);
seq__5802_5876 = G__5892;
chunk__5804_5877 = G__5893;
count__5805_5878 = G__5894;
i__5806_5879 = G__5895;
continue;
}
} else
{var vec__5822_5896 = cljs.core.first.call(null,seq__5802_5890__$1);var actual_type_5897 = cljs.core.nth.call(null,vec__5822_5896,(0),null);var __5898 = cljs.core.nth.call(null,vec__5822_5896,(1),null);var keys_5899 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5825,actual_type_5897,f_5875], null);var canonical_f_5900 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5824),keys_5899);dommy.core.update_event_listeners_BANG_.call(null,elem_5824,dommy.utils.dissoc_in,keys_5899);
if(cljs.core.truth_(elem_5824.removeEventListener))
{elem_5824.removeEventListener(cljs.core.name.call(null,actual_type_5897),canonical_f_5900);
} else
{elem_5824.detachEvent(cljs.core.name.call(null,actual_type_5897),canonical_f_5900);
}
{
var G__5901 = cljs.core.next.call(null,seq__5802_5890__$1);
var G__5902 = null;
var G__5903 = (0);
var G__5904 = (0);
seq__5802_5876 = G__5901;
chunk__5804_5877 = G__5902;
count__5805_5878 = G__5903;
i__5806_5879 = G__5904;
continue;
}
}
} else
{}
}
break;
}
{
var G__5905 = cljs.core.next.call(null,seq__5801_5867__$1);
var G__5906 = null;
var G__5907 = (0);
var G__5908 = (0);
seq__5801_5826 = G__5905;
chunk__5808_5827 = G__5906;
count__5809_5828 = G__5907;
i__5810_5829 = G__5908;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5909){
var elem_sel = cljs.core.first(arglist__5909);
var type_fs = cljs.core.rest(arglist__5909);
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
var vec__5917_5924 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5925 = cljs.core.nth.call(null,vec__5917_5924,(0),null);var selector_5926 = cljs.core.nth.call(null,vec__5917_5924,(1),null);var seq__5918_5927 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__5919_5928 = null;var count__5920_5929 = (0);var i__5921_5930 = (0);while(true){
if((i__5921_5930 < count__5920_5929))
{var vec__5922_5931 = cljs.core._nth.call(null,chunk__5919_5928,i__5921_5930);var type_5932 = cljs.core.nth.call(null,vec__5922_5931,(0),null);var f_5933 = cljs.core.nth.call(null,vec__5922_5931,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_5932,((function (seq__5918_5927,chunk__5919_5928,count__5920_5929,i__5921_5930,vec__5922_5931,type_5932,f_5933,vec__5917_5924,elem_5925,selector_5926){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5932,this_fn);
return f_5933.call(null,e);
});})(seq__5918_5927,chunk__5919_5928,count__5920_5929,i__5921_5930,vec__5922_5931,type_5932,f_5933,vec__5917_5924,elem_5925,selector_5926))
);
{
var G__5934 = seq__5918_5927;
var G__5935 = chunk__5919_5928;
var G__5936 = count__5920_5929;
var G__5937 = (i__5921_5930 + (1));
seq__5918_5927 = G__5934;
chunk__5919_5928 = G__5935;
count__5920_5929 = G__5936;
i__5921_5930 = G__5937;
continue;
}
} else
{var temp__4126__auto___5938 = cljs.core.seq.call(null,seq__5918_5927);if(temp__4126__auto___5938)
{var seq__5918_5939__$1 = temp__4126__auto___5938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5918_5939__$1))
{var c__4307__auto___5940 = cljs.core.chunk_first.call(null,seq__5918_5939__$1);{
var G__5941 = cljs.core.chunk_rest.call(null,seq__5918_5939__$1);
var G__5942 = c__4307__auto___5940;
var G__5943 = cljs.core.count.call(null,c__4307__auto___5940);
var G__5944 = (0);
seq__5918_5927 = G__5941;
chunk__5919_5928 = G__5942;
count__5920_5929 = G__5943;
i__5921_5930 = G__5944;
continue;
}
} else
{var vec__5923_5945 = cljs.core.first.call(null,seq__5918_5939__$1);var type_5946 = cljs.core.nth.call(null,vec__5923_5945,(0),null);var f_5947 = cljs.core.nth.call(null,vec__5923_5945,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_5946,((function (seq__5918_5927,chunk__5919_5928,count__5920_5929,i__5921_5930,vec__5923_5945,type_5946,f_5947,seq__5918_5939__$1,temp__4126__auto___5938,vec__5917_5924,elem_5925,selector_5926){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5946,this_fn);
return f_5947.call(null,e);
});})(seq__5918_5927,chunk__5919_5928,count__5920_5929,i__5921_5930,vec__5923_5945,type_5946,f_5947,seq__5918_5939__$1,temp__4126__auto___5938,vec__5917_5924,elem_5925,selector_5926))
);
{
var G__5948 = cljs.core.next.call(null,seq__5918_5939__$1);
var G__5949 = null;
var G__5950 = (0);
var G__5951 = (0);
seq__5918_5927 = G__5948;
chunk__5919_5928 = G__5949;
count__5920_5929 = G__5950;
i__5921_5930 = G__5951;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5952){
var elem_sel = cljs.core.first(arglist__5952);
var type_fs = cljs.core.rest(arglist__5952);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map