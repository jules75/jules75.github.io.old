// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.ui.geo_link = (function geo_link(lat,lng){return dommy.core.set_attr_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),"View section location on map"),new cljs.core.Keyword(null,"href","href",-793805698),("http://maps.google.com?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)));
});
cemetery.ui.render_details = (function render_details(details,id){var f = (function (p1__6184_SHARP_,p2__6185_SHARP_){return dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,p1__6184_SHARP_),p2__6185_SHARP_);
});var area_text = ("Area: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area2","area2",208933376).cljs$core$IFn$_invoke$arity$1(details))+")");var section_text = ("Section: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section1","section1",1772462392).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section2","section2",630697586).cljs$core$IFn$_invoke$arity$1(details))+")");var location = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(details));var area = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),area_text);var section = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),section_text);var rowgrave = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("Row "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(details))+", grave "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grave","grave",2143694981).cljs$core$IFn$_invoke$arity$1(details))));return dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("#i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"div","div",1057191632)], null))),location),area),section),rowgrave),cemetery.ui.geo_link.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(details)));
});
cemetery.ui.create_list_items = (function create_list_items(records,callback){var seq__6190 = cljs.core.seq.call(null,records);var chunk__6191 = null;var count__6192 = (0);var i__6193 = (0);while(true){
if((i__6193 < count__6192))
{var rec = cljs.core._nth.call(null,chunk__6191,i__6193);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__6194 = seq__6190;
var G__6195 = chunk__6191;
var G__6196 = count__6192;
var G__6197 = (i__6193 + (1));
seq__6190 = G__6194;
chunk__6191 = G__6195;
count__6192 = G__6196;
i__6193 = G__6197;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6190);if(temp__4126__auto__)
{var seq__6190__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6190__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__6190__$1);{
var G__6198 = cljs.core.chunk_rest.call(null,seq__6190__$1);
var G__6199 = c__4416__auto__;
var G__6200 = cljs.core.count.call(null,c__4416__auto__);
var G__6201 = (0);
seq__6190 = G__6198;
chunk__6191 = G__6199;
count__6192 = G__6200;
i__6193 = G__6201;
continue;
}
} else
{var rec = cljs.core.first.call(null,seq__6190__$1);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__6202 = cljs.core.next.call(null,seq__6190__$1);
var G__6203 = null;
var G__6204 = (0);
var G__6205 = (0);
seq__6190 = G__6202;
chunk__6191 = G__6203;
count__6192 = G__6204;
i__6193 = G__6205;
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
cemetery.ui.populate_list = (function populate_list(records){var seq__6216 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByTagName("li")));var chunk__6218 = null;var count__6219 = (0);var i__6220 = (0);while(true){
if((i__6220 < count__6219))
{var li = cljs.core._nth.call(null,chunk__6218,i__6220);var id_6222 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_6223 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__6216,chunk__6218,count__6219,i__6220,id_6222,li){
return (function (p1__6206_SHARP_){return cljs.core._EQ_.call(null,id_6222,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6206_SHARP_));
});})(seq__6216,chunk__6218,count__6219,i__6220,id_6222,li))
,records));var about_6224 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_6223))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_6223)));var f_6225 = ((function (seq__6216,chunk__6218,count__6219,i__6220,id_6222,rec_6223,about_6224,li){
return (function (p1__6207_SHARP_,p2__6208_SHARP_,p3__6209_SHARP_){return dommy.core.append_BANG_.call(null,p1__6207_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__6208_SHARP_),p3__6209_SHARP_));
});})(seq__6216,chunk__6218,count__6219,i__6220,id_6222,rec_6223,about_6224,li))
;f_6225.call(null,f_6225.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_6223),new cljs.core.Keyword(null,"name","name",1843675177)),about_6224,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__6226 = seq__6216;
var G__6227 = chunk__6218;
var G__6228 = count__6219;
var G__6229 = (i__6220 + (1));
seq__6216 = G__6226;
chunk__6218 = G__6227;
count__6219 = G__6228;
i__6220 = G__6229;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6216);if(temp__4126__auto__)
{var seq__6216__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6216__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__6216__$1);{
var G__6230 = cljs.core.chunk_rest.call(null,seq__6216__$1);
var G__6231 = c__4416__auto__;
var G__6232 = cljs.core.count.call(null,c__4416__auto__);
var G__6233 = (0);
seq__6216 = G__6230;
chunk__6218 = G__6231;
count__6219 = G__6232;
i__6220 = G__6233;
continue;
}
} else
{var li = cljs.core.first.call(null,seq__6216__$1);var id_6234 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_6235 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__6216,chunk__6218,count__6219,i__6220,id_6234,li,seq__6216__$1,temp__4126__auto__){
return (function (p1__6206_SHARP_){return cljs.core._EQ_.call(null,id_6234,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6206_SHARP_));
});})(seq__6216,chunk__6218,count__6219,i__6220,id_6234,li,seq__6216__$1,temp__4126__auto__))
,records));var about_6236 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_6235))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_6235)));var f_6237 = ((function (seq__6216,chunk__6218,count__6219,i__6220,id_6234,rec_6235,about_6236,li,seq__6216__$1,temp__4126__auto__){
return (function (p1__6207_SHARP_,p2__6208_SHARP_,p3__6209_SHARP_){return dommy.core.append_BANG_.call(null,p1__6207_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__6208_SHARP_),p3__6209_SHARP_));
});})(seq__6216,chunk__6218,count__6219,i__6220,id_6234,rec_6235,about_6236,li,seq__6216__$1,temp__4126__auto__))
;f_6237.call(null,f_6237.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_6235),new cljs.core.Keyword(null,"name","name",1843675177)),about_6236,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__6238 = cljs.core.next.call(null,seq__6216__$1);
var G__6239 = null;
var G__6240 = (0);
var G__6241 = (0);
seq__6216 = G__6238;
chunk__6218 = G__6239;
count__6219 = G__6240;
i__6220 = G__6241;
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
cemetery.ui.update = (function update(records,record_details,record_id,start_index,max_index,item_select_callback){dommy.core.toggle_BANG_.call(null,document.getElementById("limit"),cljs.core._EQ_.call(null,start_index,max_index));
if((cljs.core.count.call(null,records) > (0)))
{dommy.core.clear_BANG_.call(null,document.getElementById("results"));
cemetery.ui.create_list_items.call(null,records,item_select_callback);
cemetery.ui.populate_list.call(null,records);
return cemetery.ui.render_details.call(null,record_details,record_id);
} else
{return null;
}
});
