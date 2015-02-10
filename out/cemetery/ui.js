// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.ui.geo_link = (function geo_link(lat,lng){return dommy.core.set_attr_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),"View on map (approx.)"),new cljs.core.Keyword(null,"href","href",-793805698),("http://maps.google.com?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)));
});
cemetery.ui.render_details = (function render_details(details,id,callback){var f = (function (p1__5542_SHARP_,p2__5543_SHARP_){return dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,p1__5542_SHARP_),p2__5543_SHARP_);
});var area_text = ("AREA: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area2","area2",208933376).cljs$core$IFn$_invoke$arity$1(details))+")");var section_text = ("SECTION: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section1","section1",1772462392).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section2","section2",630697586).cljs$core$IFn$_invoke$arity$1(details))+")");var location = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(details));var area = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),area_text);var section = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),section_text);var row = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("ROW: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(details))));var grave = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("GRAVE: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grave","grave",2143694981).cljs$core$IFn$_invoke$arity$1(details))));return dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("#i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"div","div",1057191632)], null))),location),area),section),row),grave),cemetery.ui.geo_link.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(details)));
});
cemetery.ui.create_list_items = (function create_list_items(records,callback){var seq__5548 = cljs.core.seq.call(null,records);var chunk__5549 = null;var count__5550 = (0);var i__5551 = (0);while(true){
if((i__5551 < count__5550))
{var rec = cljs.core._nth.call(null,chunk__5549,i__5551);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__5552 = seq__5548;
var G__5553 = chunk__5549;
var G__5554 = count__5550;
var G__5555 = (i__5551 + (1));
seq__5548 = G__5552;
chunk__5549 = G__5553;
count__5550 = G__5554;
i__5551 = G__5555;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5548);if(temp__4126__auto__)
{var seq__5548__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5548__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__5548__$1);{
var G__5556 = cljs.core.chunk_rest.call(null,seq__5548__$1);
var G__5557 = c__4416__auto__;
var G__5558 = cljs.core.count.call(null,c__4416__auto__);
var G__5559 = (0);
seq__5548 = G__5556;
chunk__5549 = G__5557;
count__5550 = G__5558;
i__5551 = G__5559;
continue;
}
} else
{var rec = cljs.core.first.call(null,seq__5548__$1);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__5560 = cljs.core.next.call(null,seq__5548__$1);
var G__5561 = null;
var G__5562 = (0);
var G__5563 = (0);
seq__5548 = G__5560;
chunk__5549 = G__5561;
count__5550 = G__5562;
i__5551 = G__5563;
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
cemetery.ui.populate_list = (function populate_list(records){var seq__5574 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByTagName("li")));var chunk__5576 = null;var count__5577 = (0);var i__5578 = (0);while(true){
if((i__5578 < count__5577))
{var li = cljs.core._nth.call(null,chunk__5576,i__5578);var id_5580 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_5581 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__5574,chunk__5576,count__5577,i__5578,id_5580,li){
return (function (p1__5564_SHARP_){return cljs.core._EQ_.call(null,id_5580,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5564_SHARP_));
});})(seq__5574,chunk__5576,count__5577,i__5578,id_5580,li))
,records));var about_5582 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_5581))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_5581)));var f_5583 = ((function (seq__5574,chunk__5576,count__5577,i__5578,id_5580,rec_5581,about_5582,li){
return (function (p1__5565_SHARP_,p2__5566_SHARP_,p3__5567_SHARP_){return dommy.core.append_BANG_.call(null,p1__5565_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__5566_SHARP_),p3__5567_SHARP_));
});})(seq__5574,chunk__5576,count__5577,i__5578,id_5580,rec_5581,about_5582,li))
;f_5583.call(null,f_5583.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_5581),new cljs.core.Keyword(null,"name","name",1843675177)),about_5582,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__5584 = seq__5574;
var G__5585 = chunk__5576;
var G__5586 = count__5577;
var G__5587 = (i__5578 + (1));
seq__5574 = G__5584;
chunk__5576 = G__5585;
count__5577 = G__5586;
i__5578 = G__5587;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5574);if(temp__4126__auto__)
{var seq__5574__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5574__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__5574__$1);{
var G__5588 = cljs.core.chunk_rest.call(null,seq__5574__$1);
var G__5589 = c__4416__auto__;
var G__5590 = cljs.core.count.call(null,c__4416__auto__);
var G__5591 = (0);
seq__5574 = G__5588;
chunk__5576 = G__5589;
count__5577 = G__5590;
i__5578 = G__5591;
continue;
}
} else
{var li = cljs.core.first.call(null,seq__5574__$1);var id_5592 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_5593 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__5574,chunk__5576,count__5577,i__5578,id_5592,li,seq__5574__$1,temp__4126__auto__){
return (function (p1__5564_SHARP_){return cljs.core._EQ_.call(null,id_5592,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5564_SHARP_));
});})(seq__5574,chunk__5576,count__5577,i__5578,id_5592,li,seq__5574__$1,temp__4126__auto__))
,records));var about_5594 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_5593))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_5593)));var f_5595 = ((function (seq__5574,chunk__5576,count__5577,i__5578,id_5592,rec_5593,about_5594,li,seq__5574__$1,temp__4126__auto__){
return (function (p1__5565_SHARP_,p2__5566_SHARP_,p3__5567_SHARP_){return dommy.core.append_BANG_.call(null,p1__5565_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__5566_SHARP_),p3__5567_SHARP_));
});})(seq__5574,chunk__5576,count__5577,i__5578,id_5592,rec_5593,about_5594,li,seq__5574__$1,temp__4126__auto__))
;f_5595.call(null,f_5595.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_5593),new cljs.core.Keyword(null,"name","name",1843675177)),about_5594,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__5596 = cljs.core.next.call(null,seq__5574__$1);
var G__5597 = null;
var G__5598 = (0);
var G__5599 = (0);
seq__5574 = G__5596;
chunk__5576 = G__5597;
count__5577 = G__5598;
i__5578 = G__5599;
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
* Update UI according to current state
*/
cemetery.ui.update = (function update(records,record_details,record_id,start_index,max_index,show_details_QMARK_,item_select_callback,close_callback){dommy.core.toggle_BANG_.call(null,document.getElementById("limit"),cljs.core._EQ_.call(null,start_index,max_index));
if((cljs.core.count.call(null,records) > (0)))
{dommy.core.clear_BANG_.call(null,document.getElementById("results"));
cemetery.ui.create_list_items.call(null,records,item_select_callback);
cemetery.ui.populate_list.call(null,records);
return cemetery.ui.render_details.call(null,record_details,record_id,close_callback);
} else
{return null;
}
});
