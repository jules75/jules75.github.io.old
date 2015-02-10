// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.ui');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.ui.geo_link = (function geo_link(lat,lng){return dommy.core.set_attr_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"a","a",-2123407586)),"View on map (approx.)"),new cljs.core.Keyword(null,"href","href",-793805698),("http://maps.google.com?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lat)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(lng)));
});
cemetery.ui.render_details = (function render_details(details,id){var f = (function (p1__6068_SHARP_,p2__6069_SHARP_){return dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,p1__6068_SHARP_),p2__6069_SHARP_);
});var area_text = ("Area: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area1","area1",-316994623).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"area2","area2",208933376).cljs$core$IFn$_invoke$arity$1(details))+")");var section_text = ("Section: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section1","section1",1772462392).cljs$core$IFn$_invoke$arity$1(details))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section2","section2",630697586).cljs$core$IFn$_invoke$arity$1(details))+")");var location = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(details));var area = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),area_text);var section = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),section_text);var rowgrave = f.call(null,new cljs.core.Keyword(null,"p","p",151049309),("Row "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(details))+", grave "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"grave","grave",2143694981).cljs$core$IFn$_invoke$arity$1(details))));return dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,dommy.core.append_BANG_.call(null,document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [("#i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"div","div",1057191632)], null))),location),area),section),rowgrave),cemetery.ui.geo_link.call(null,new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(details),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(details)));
});
cemetery.ui.create_list_items = (function create_list_items(records,callback){var seq__6074 = cljs.core.seq.call(null,records);var chunk__6075 = null;var count__6076 = (0);var i__6077 = (0);while(true){
if((i__6077 < count__6076))
{var rec = cljs.core._nth.call(null,chunk__6075,i__6077);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__6078 = seq__6074;
var G__6079 = chunk__6075;
var G__6080 = count__6076;
var G__6081 = (i__6077 + (1));
seq__6074 = G__6078;
chunk__6075 = G__6079;
count__6076 = G__6080;
i__6077 = G__6081;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6074);if(temp__4126__auto__)
{var seq__6074__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6074__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__6074__$1);{
var G__6082 = cljs.core.chunk_rest.call(null,seq__6074__$1);
var G__6083 = c__4416__auto__;
var G__6084 = cljs.core.count.call(null,c__4416__auto__);
var G__6085 = (0);
seq__6074 = G__6082;
chunk__6075 = G__6083;
count__6076 = G__6084;
i__6077 = G__6085;
continue;
}
} else
{var rec = cljs.core.first.call(null,seq__6074__$1);dommy.core.append_BANG_.call(null,document.getElementById("results"),dommy.core.append_BANG_.call(null,dommy.core.listen_BANG_.call(null,dommy.core.set_attr_BANG_.call(null,dommy.core.create_element.call(null,"li"),new cljs.core.Keyword(null,"id","id",-1388402092),("i"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(rec)))),new cljs.core.Keyword(null,"click","click",1912301393),callback),dommy.core.create_element.call(null,"div")));
{
var G__6086 = cljs.core.next.call(null,seq__6074__$1);
var G__6087 = null;
var G__6088 = (0);
var G__6089 = (0);
seq__6074 = G__6086;
chunk__6075 = G__6087;
count__6076 = G__6088;
i__6077 = G__6089;
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
cemetery.ui.populate_list = (function populate_list(records){var seq__6100 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.getElementsByTagName("li")));var chunk__6102 = null;var count__6103 = (0);var i__6104 = (0);while(true){
if((i__6104 < count__6103))
{var li = cljs.core._nth.call(null,chunk__6102,i__6104);var id_6106 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_6107 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__6100,chunk__6102,count__6103,i__6104,id_6106,li){
return (function (p1__6090_SHARP_){return cljs.core._EQ_.call(null,id_6106,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6090_SHARP_));
});})(seq__6100,chunk__6102,count__6103,i__6104,id_6106,li))
,records));var about_6108 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_6107))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_6107)));var f_6109 = ((function (seq__6100,chunk__6102,count__6103,i__6104,id_6106,rec_6107,about_6108,li){
return (function (p1__6091_SHARP_,p2__6092_SHARP_,p3__6093_SHARP_){return dommy.core.append_BANG_.call(null,p1__6091_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__6092_SHARP_),p3__6093_SHARP_));
});})(seq__6100,chunk__6102,count__6103,i__6104,id_6106,rec_6107,about_6108,li))
;f_6109.call(null,f_6109.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_6107),new cljs.core.Keyword(null,"name","name",1843675177)),about_6108,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__6110 = seq__6100;
var G__6111 = chunk__6102;
var G__6112 = count__6103;
var G__6113 = (i__6104 + (1));
seq__6100 = G__6110;
chunk__6102 = G__6111;
count__6103 = G__6112;
i__6104 = G__6113;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6100);if(temp__4126__auto__)
{var seq__6100__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6100__$1))
{var c__4416__auto__ = cljs.core.chunk_first.call(null,seq__6100__$1);{
var G__6114 = cljs.core.chunk_rest.call(null,seq__6100__$1);
var G__6115 = c__4416__auto__;
var G__6116 = cljs.core.count.call(null,c__4416__auto__);
var G__6117 = (0);
seq__6100 = G__6114;
chunk__6102 = G__6115;
count__6103 = G__6116;
i__6104 = G__6117;
continue;
}
} else
{var li = cljs.core.first.call(null,seq__6100__$1);var id_6118 = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,dommy.core.attr.call(null,li,new cljs.core.Keyword(null,"id","id",-1388402092))));var rec_6119 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (seq__6100,chunk__6102,count__6103,i__6104,id_6118,li,seq__6100__$1,temp__4126__auto__){
return (function (p1__6090_SHARP_){return cljs.core._EQ_.call(null,id_6118,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6090_SHARP_));
});})(seq__6100,chunk__6102,count__6103,i__6104,id_6118,li,seq__6100__$1,temp__4126__auto__))
,records));var about_6120 = ("Funeral on "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"death","death",2026112826).cljs$core$IFn$_invoke$arity$1(rec_6119))+" aged "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"age","age",-604307804).cljs$core$IFn$_invoke$arity$1(rec_6119)));var f_6121 = ((function (seq__6100,chunk__6102,count__6103,i__6104,id_6118,rec_6119,about_6120,li,seq__6100__$1,temp__4126__auto__){
return (function (p1__6091_SHARP_,p2__6092_SHARP_,p3__6093_SHARP_){return dommy.core.append_BANG_.call(null,p1__6091_SHARP_,dommy.core.add_class_BANG_.call(null,dommy.core.set_text_BANG_.call(null,dommy.core.create_element.call(null,new cljs.core.Keyword(null,"p","p",151049309)),p2__6092_SHARP_),p3__6093_SHARP_));
});})(seq__6100,chunk__6102,count__6103,i__6104,id_6118,rec_6119,about_6120,li,seq__6100__$1,temp__4126__auto__))
;f_6121.call(null,f_6121.call(null,li,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rec_6119),new cljs.core.Keyword(null,"name","name",1843675177)),about_6120,new cljs.core.Keyword(null,"about","about",1423892543));
{
var G__6122 = cljs.core.next.call(null,seq__6100__$1);
var G__6123 = null;
var G__6124 = (0);
var G__6125 = (0);
seq__6100 = G__6122;
chunk__6102 = G__6123;
count__6103 = G__6124;
i__6104 = G__6125;
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
