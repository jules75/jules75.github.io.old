// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.ui.geo_link = (function geo_link(lat,lng){return dommy.core.set_attr_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),"View on map (approx.)"),new cljs.core.Keyword(null,"href","href",-793805698),("map.html?lat="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+"&lng="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)));
});
cemetery.ui.render_details = (function render_details(details,callback){var f = (function (p1__5727_SHARP_,p2__5728_SHARP_){return dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,p1__5727_SHARP_),p2__5728_SHARP_);
});var area_text = ("AREA: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area2","area2",208933376).cljs$core$IFn$_invoke$arity$1(details))+")");var section_text = ("SECTION: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section1","section1",1772462392).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section2","section2",630697586).cljs$core$IFn$_invoke$arity$1(details))+")");var title = f.call(null,new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(details));var location = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(details));var area = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),area_text);var section = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),section_text);var row = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("ROW: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(details))));var grave = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("GRAVE: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grave","grave",2143694981).cljs$core$IFn$_invoke$arity$1(details))));var close = dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,f.call(null,new cljs.core.Keyword(null,"button","button",1456579943),"Close"),new cljs.core.Keyword(null,"id","id",-1388402092),"close"),new cljs.core.Keyword(null,"click","click",1912301393),callback);return dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,document.getElementById("details")),title),location),area),section),row),grave),cemetery.ui.geo_link.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(details))),close);
});
cemetery.ui.create_list_items = (function create_list_items(records,callback){var seq__5733 = cljs.core.seq.call(null,records);var chunk__5734 = null;var count__5735 = (0);var i__5736 = (0);while(true){
if((i__5736 < count__5735))
{var rec = cljs.core._nth.call(null,chunk__5734,i__5736);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)),new cljs.core.Keyword(null,"click","click",1912301393),callback));
{
var G__5737 = seq__5733;
var G__5738 = chunk__5734;
var G__5739 = count__5735;
var G__5740 = (i__5736 + (1));
seq__5733 = G__5737;
chunk__5734 = G__5738;
count__5735 = G__5739;
i__5736 = G__5740;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5733);if(temp__4126__auto__)
{var seq__5733__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5733__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__5733__$1);{
var G__5741 = cljs.core.chunk_rest.call(null,seq__5733__$1);
var G__5742 = c__4416__auto__;
var G__5743 = cljs.core.count.call(null,c__4416__auto__);
var G__5744 = (0);
seq__5733 = G__5741;
chunk__5734 = G__5742;
count__5735 = G__5743;
i__5736 = G__5744;
continue;
}
} else
{var rec = cljs.core.first.call(null,seq__5733__$1);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)),new cljs.core.Keyword(null,"click","click",1912301393),callback));
{
var G__5745 = cljs.core.next.call(null,seq__5733__$1);
var G__5746 = null;
var G__5747 = (0);
var G__5748 = (0);
seq__5733 = G__5745;
chunk__5734 = G__5746;
count__5735 = G__5747;
i__5736 = G__5748;
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
cemetery.ui.populate_list = (function populate_list(records){var seq__5759 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByTagName("li")));var chunk__5761 = null;var count__5762 = (0);var i__5763 = (0);while(true){
if((i__5763 < count__5762))
{var li = cljs.core._nth.call(null,chunk__5761,i__5763);var id_5765 = dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092));var rec_5766 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__5759,chunk__5761,count__5762,i__5763,id_5765,li){
return (function (p1__5749_SHARP_){return cljs.core._EQ_.call(null,id_5765,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5749_SHARP_));
});})(seq__5759,chunk__5761,count__5762,i__5763,id_5765,li))
,records));var about_5767 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_5766))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_5766)));var f_5768 = ((function (seq__5759,chunk__5761,count__5762,i__5763,id_5765,rec_5766,about_5767,li){
return (function (p1__5750_SHARP_,p2__5751_SHARP_,p3__5752_SHARP_){return dommy.core.append_BANG_.call(null,p1__5750_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__5751_SHARP_),p3__5752_SHARP_));
});})(seq__5759,chunk__5761,count__5762,i__5763,id_5765,rec_5766,about_5767,li))
;f_5768.call(null,f_5768.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_5766),new cljs.core.Keyword(null,"name","name",1843675177)),about_5767,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__5769 = seq__5759;
var G__5770 = chunk__5761;
var G__5771 = count__5762;
var G__5772 = (i__5763 + (1));
seq__5759 = G__5769;
chunk__5761 = G__5770;
count__5762 = G__5771;
i__5763 = G__5772;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5759);if(temp__4126__auto__)
{var seq__5759__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5759__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__5759__$1);{
var G__5773 = cljs.core.chunk_rest.call(null,seq__5759__$1);
var G__5774 = c__4416__auto__;
var G__5775 = cljs.core.count.call(null,c__4416__auto__);
var G__5776 = (0);
seq__5759 = G__5773;
chunk__5761 = G__5774;
count__5762 = G__5775;
i__5763 = G__5776;
continue;
}
} else
{var li = cljs.core.first.call(null,seq__5759__$1);var id_5777 = dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092));var rec_5778 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__5759,chunk__5761,count__5762,i__5763,id_5777,li,seq__5759__$1,temp__4126__auto__){
return (function (p1__5749_SHARP_){return cljs.core._EQ_.call(null,id_5777,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__5749_SHARP_));
});})(seq__5759,chunk__5761,count__5762,i__5763,id_5777,li,seq__5759__$1,temp__4126__auto__))
,records));var about_5779 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_5778))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_5778)));var f_5780 = ((function (seq__5759,chunk__5761,count__5762,i__5763,id_5777,rec_5778,about_5779,li,seq__5759__$1,temp__4126__auto__){
return (function (p1__5750_SHARP_,p2__5751_SHARP_,p3__5752_SHARP_){return dommy.core.append_BANG_.call(null,p1__5750_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__5751_SHARP_),p3__5752_SHARP_));
});})(seq__5759,chunk__5761,count__5762,i__5763,id_5777,rec_5778,about_5779,li,seq__5759__$1,temp__4126__auto__))
;f_5780.call(null,f_5780.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_5778),new cljs.core.Keyword(null,"name","name",1843675177)),about_5779,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__5781 = cljs.core.next.call(null,seq__5759__$1);
var G__5782 = null;
var G__5783 = (0);
var G__5784 = (0);
seq__5759 = G__5781;
chunk__5761 = G__5782;
count__5762 = G__5783;
i__5763 = G__5784;
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
cemetery.ui.update = (function update(records,record_details,start_index,max_index,show_details_QMARK_,item_select_callback,close_callback){var f = (cljs.core.truth_(show_details_QMARK_)?dommy.core.add_class_BANG_:dommy.core.remove_class_BANG_);dommy.core.toggle_BANG_.call(null,document.getElementById("limit"),cljs.core._EQ_.call(null,start_index,max_index));
dommy.core.toggle_BANG_.call(null,document.getElementById("details"),show_details_QMARK_);
f.call(null,document.getElementById("results"),new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
f.call(null,(dommy.utils.__GT_Array.call(null,document.getElementsByTagName("nav"))[(0)]),new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
if((cljs.core.count.call(null,records) > (0)))
{dommy.core.clear_BANG_.call(null,document.getElementById("results"));
cemetery.ui.create_list_items.call(null,records,item_select_callback);
cemetery.ui.populate_list.call(null,records);
return cemetery.ui.render_details.call(null,record_details,close_callback);
} else
{return null;
}
});

//# sourceMappingURL=ui.js.map