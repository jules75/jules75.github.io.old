// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.core');
goog.require('cljs.core');
goog.require('cemetery.ui');
goog.require('cemetery.parse');
goog.require('clojure.string');
goog.require('cemetery.data');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('cemetery.data');
goog.require('cemetery.ui');
goog.require('cemetery.parse');
cemetery.core.PROXY_SRV = "http://50.116.14.16:82/";
cemetery.core.MAX_RECORDS = (150);
cemetery.core.records = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cemetery.core.record_id = cljs.core.atom.call(null,null);
cemetery.core.record_details = cljs.core.atom.call(null,null);
cemetery.core.keep_fetching_QMARK_ = cljs.core.atom.call(null,true);
cemetery.core.start_index = cljs.core.atom.call(null,(0));
cemetery.core.query = cljs.core.atom.call(null,null);
/**
* Pass state to UI for update
*/
cemetery.core.ui_update = (function ui_update(){return cemetery.ui.update.call(null,cljs.core.deref.call(null,cemetery.core.records),cljs.core.deref.call(null,cemetery.core.record_details),cljs.core.deref.call(null,cemetery.core.record_id),cljs.core.deref.call(null,cemetery.core.start_index),cemetery.core.MAX_RECORDS,cemetery.core.on_select);
});
/**
* Handle response from server. Stores records found in memory,
* triggers request for more records if required.
*/
cemetery.core.search_callback = (function search_callback(reply){var text = reply.target.getResponseText();cljs.core.swap_BANG_.call(null,cemetery.core.records,cljs.core.concat,cemetery.parse.parse_file.call(null,text));
cljs.core.swap_BANG_.call(null,cemetery.core.start_index,cljs.core._PLUS_,(15));
cljs.core.reset_BANG_.call(null,cemetery.core.keep_fetching_QMARK_,cljs.core.boolean$.call(null,cljs.core.re_find.call(null,/start=/,text)));
if(cljs.core.truth_((function (){var and__3634__auto__ = cljs.core.deref.call(null,cemetery.core.keep_fetching_QMARK_);if(cljs.core.truth_(and__3634__auto__))
{return (cljs.core.deref.call(null,cemetery.core.start_index) < cemetery.core.MAX_RECORDS);
} else
{return and__3634__auto__;
}
})()))
{cemetery.core.fetch_records.call(null);
} else
{}
cljs.core.reset_BANG_.call(null,cemetery.core.keep_fetching_QMARK_,false);
return cemetery.core.ui_update.call(null);
});
cemetery.core.details_callback = (function details_callback(reply){var text = reply.target.getResponseText();var details = cemetery.parse.parse_details.call(null,text);var area = cljs.core.first.call(null,cljs.core.filter.call(null,((function (text,details){
return (function (p1__6243_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6243_SHARP_));
});})(text,details))
,cemetery.data.areas));cljs.core.reset_BANG_.call(null,cemetery.core.record_details,details);
cljs.core.swap_BANG_.call(null,cemetery.core.record_details,cljs.core.assoc,new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(area));
cljs.core.swap_BANG_.call(null,cemetery.core.record_details,cljs.core.assoc,new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(area));
return cemetery.core.ui_update.call(null);
});
/**
* Helper function, request MULTIPLE records based on current state.
*/
cemetery.core.fetch_records = (function fetch_records(){return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemetery.core.PROXY_SRV)+"/php/results.php?start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cemetery.core.start_index))+"&dataentered="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cemetery.core.query))),cemetery.core.search_callback);
});
/**
* Helper function, request SINGLE record based on current state.
*/
cemetery.core.fetch_details = (function fetch_details(){return goog.net.XhrIo.send((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cemetery.core.PROXY_SRV)+"/php/details.php?id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cemetery.core.record_id))),cemetery.core.details_callback);
});
cemetery.core.on_search = (function on_search(e){cljs.core.reset_BANG_.call(null,cemetery.core.records,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,cemetery.core.start_index,(0));
cljs.core.reset_BANG_.call(null,cemetery.core.query,dommy.core.value.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("input"))[(0)])));
cemetery.core.fetch_records.call(null);
return e.preventDefault();
});
cemetery.core.on_select = (function on_select(e){var id = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,((cljs.core._EQ_.call(null,"LI",e.target.tagName))?e.target.id:e.target.parentElement.id)));var prevent_QMARK_ = cljs.core._EQ_.call(null,"LI",e.target.tagName);cljs.core.reset_BANG_.call(null,cemetery.core.record_id,id);
cemetery.core.fetch_details.call(null);
if(prevent_QMARK_)
{return e.preventDefault();
} else
{return null;
}
});
dommy.core.listen_BANG_.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("form"))[(0)]),new cljs.core.Keyword(null,"submit","submit",-49315317),cemetery.core.on_search);
cemetery.core.ui_update.call(null);
