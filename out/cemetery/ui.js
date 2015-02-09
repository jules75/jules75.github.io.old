// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.ui.geo_link = (function geo_link(lat,lng){return dommy.core.set_attr_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),"View on map (approx.)"),new cljs.core.Keyword(null,"href","href",-793805698),("http://maps.google.com?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)));
});
cemetery.ui.render_details = (function render_details(details,id,callback){var f = (function (p1__8072_SHARP_,p2__8073_SHARP_){return dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,p1__8072_SHARP_),p2__8073_SHARP_);
});var area_text = ("AREA: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area2","area2",208933376).cljs$core$IFn$_invoke$arity$1(details))+")");var section_text = ("SECTION: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section1","section1",1772462392).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section2","section2",630697586).cljs$core$IFn$_invoke$arity$1(details))+")");var location = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(details));var area = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),area_text);var section = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),section_text);var row = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("ROW: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(details))));var grave = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("GRAVE: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grave","grave",2143694981).cljs$core$IFn$_invoke$arity$1(details))));return dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,("#i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)))),location),area),section),row),grave),cemetery.ui.geo_link.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(details)));
});
cemetery.ui.create_list_items = (function create_list_items(records,callback){var seq__8078 = cljs.core.seq.call(null,records);var chunk__8079 = null;var count__8080 = (0);var i__8081 = (0);while(true){
if((i__8081 < count__8080))
{var rec = cljs.core._nth.call(null,chunk__8079,i__8081);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback));
{
var G__8082 = seq__8078;
var G__8083 = chunk__8079;
var G__8084 = count__8080;
var G__8085 = (i__8081 + (1));
seq__8078 = G__8082;
chunk__8079 = G__8083;
count__8080 = G__8084;
i__8081 = G__8085;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8078);if(temp__4126__auto__)
{var seq__8078__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8078__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__8078__$1);{
var G__8086 = cljs.core.chunk_rest.call(null,seq__8078__$1);
var G__8087 = c__4416__auto__;
var G__8088 = cljs.core.count.call(null,c__4416__auto__);
var G__8089 = (0);
seq__8078 = G__8086;
chunk__8079 = G__8087;
count__8080 = G__8088;
i__8081 = G__8089;
continue;
}
} else
{var rec = cljs.core.first.call(null,seq__8078__$1);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback));
{
var G__8090 = cljs.core.next.call(null,seq__8078__$1);
var G__8091 = null;
var G__8092 = (0);
var G__8093 = (0);
seq__8078 = G__8090;
chunk__8079 = G__8091;
count__8080 = G__8092;
i__8081 = G__8093;
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
cemetery.ui.populate_list = (function populate_list(records){var seq__8104 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByTagName("li")));var chunk__8106 = null;var count__8107 = (0);var i__8108 = (0);while(true){
if((i__8108 < count__8107))
{var li = cljs.core._nth.call(null,chunk__8106,i__8108);var id_8110 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_8111 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__8104,chunk__8106,count__8107,i__8108,id_8110,li){
return (function (p1__8094_SHARP_){return cljs.core._EQ_.call(null,id_8110,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8094_SHARP_));
});})(seq__8104,chunk__8106,count__8107,i__8108,id_8110,li))
,records));var about_8112 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_8111))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_8111)));var f_8113 = ((function (seq__8104,chunk__8106,count__8107,i__8108,id_8110,rec_8111,about_8112,li){
return (function (p1__8095_SHARP_,p2__8096_SHARP_,p3__8097_SHARP_){return dommy.core.append_BANG_.call(null,p1__8095_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__8096_SHARP_),p3__8097_SHARP_));
});})(seq__8104,chunk__8106,count__8107,i__8108,id_8110,rec_8111,about_8112,li))
;f_8113.call(null,f_8113.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_8111),new cljs.core.Keyword(null,"name","name",1843675177)),about_8112,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__8114 = seq__8104;
var G__8115 = chunk__8106;
var G__8116 = count__8107;
var G__8117 = (i__8108 + (1));
seq__8104 = G__8114;
chunk__8106 = G__8115;
count__8107 = G__8116;
i__8108 = G__8117;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8104);if(temp__4126__auto__)
{var seq__8104__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8104__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__8104__$1);{
var G__8118 = cljs.core.chunk_rest.call(null,seq__8104__$1);
var G__8119 = c__4416__auto__;
var G__8120 = cljs.core.count.call(null,c__4416__auto__);
var G__8121 = (0);
seq__8104 = G__8118;
chunk__8106 = G__8119;
count__8107 = G__8120;
i__8108 = G__8121;
continue;
}
} else
{var li = cljs.core.first.call(null,seq__8104__$1);var id_8122 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_8123 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__8104,chunk__8106,count__8107,i__8108,id_8122,li,seq__8104__$1,temp__4126__auto__){
return (function (p1__8094_SHARP_){return cljs.core._EQ_.call(null,id_8122,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__8094_SHARP_));
});})(seq__8104,chunk__8106,count__8107,i__8108,id_8122,li,seq__8104__$1,temp__4126__auto__))
,records));var about_8124 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_8123))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_8123)));var f_8125 = ((function (seq__8104,chunk__8106,count__8107,i__8108,id_8122,rec_8123,about_8124,li,seq__8104__$1,temp__4126__auto__){
return (function (p1__8095_SHARP_,p2__8096_SHARP_,p3__8097_SHARP_){return dommy.core.append_BANG_.call(null,p1__8095_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__8096_SHARP_),p3__8097_SHARP_));
});})(seq__8104,chunk__8106,count__8107,i__8108,id_8122,rec_8123,about_8124,li,seq__8104__$1,temp__4126__auto__))
;f_8125.call(null,f_8125.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_8123),new cljs.core.Keyword(null,"name","name",1843675177)),about_8124,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__8126 = cljs.core.next.call(null,seq__8104__$1);
var G__8127 = null;
var G__8128 = (0);
var G__8129 = (0);
seq__8104 = G__8126;
chunk__8106 = G__8127;
count__8107 = G__8128;
i__8108 = G__8129;
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
