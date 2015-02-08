// Compiled by ClojureScript 0.0-2371
goog.provide('cemetery.map');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('dommy.core');
goog.require('dommy.core');
cemetery.map.gmap = cljs.core.atom.call(null,null);
cemetery.map.gmarkers = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cemetery.map.add_marker = (function add_marker(lat,lng,icon,title){var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),(new google.maps.LatLng(lat,lng)),new cljs.core.Keyword(null,"icon","icon",1679606541),icon], null);var marker = (new google.maps.Marker(cljs.core.clj__GT_js.call(null,opts)));cljs.core.swap_BANG_.call(null,cemetery.map.gmarkers,cljs.core.conj,marker);
(new google.maps.event.addListener(marker,"click",((function (opts,marker){
return (function (){return alert(title);
});})(opts,marker))
));
return marker.setMap(cljs.core.deref.call(null,cemetery.map.gmap));
});
cemetery.map.init_map = (function init_map(lat,lng){var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"center","center",-748944368),(new google.maps.LatLng(lat,lng)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(18),new cljs.core.Keyword(null,"mapTypeId","mapTypeId",-424658868),google.maps.MapTypeId.HYBRID], null);var gm = (new google.maps.Map(document.getElementById("map"),cljs.core.clj__GT_js.call(null,opts)));return cljs.core.reset_BANG_.call(null,cemetery.map.gmap,gm);
});
/**
* Returns [lat lng] values taken from current URI.
*/
cemetery.map.get_uri_pos = (function get_uri_pos(){var uri = (new goog.Uri(document.location.href));return cljs.core.map.call(null,((function (uri){
return (function (p1__5792_SHARP_){return uri.getParameterValue(p1__5792_SHARP_);
});})(uri))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lat","lng"], null));
});
/**
* Return LatLngBounds object that neatly contains markers.
*/
cemetery.map.bounds = (function bounds(markers){var bounds__$1 = (new google.maps.LatLngBounds());var m = markers;while(true){
if(cljs.core.seq.call(null,m))
{{
var G__5793 = bounds__$1.extend(cljs.core.first.call(null,m).getPosition());
var G__5794 = cljs.core.rest.call(null,m);
bounds__$1 = G__5793;
m = G__5794;
continue;
}
} else
{return bounds__$1;
}
break;
}
});
cemetery.map.on_get_pos = (function on_get_pos(pos){cemetery.map.add_marker.call(null,pos.coords.latitude,pos.coords.longitude,"img/userpos.svg","Your position");
return cljs.core.deref.call(null,cemetery.map.gmap).fitBounds(cemetery.map.bounds.call(null,cljs.core.deref.call(null,cemetery.map.gmarkers)));
});
var vec__5795_5796 = cemetery.map.get_uri_pos.call(null);var lat_5797 = cljs.core.nth.call(null,vec__5795_5796,(0),null);var lng_5798 = cljs.core.nth.call(null,vec__5795_5796,(1),null);navigator.geolocation.getCurrentPosition(cemetery.map.on_get_pos);
cemetery.map.init_map.call(null,lat_5797,lng_5798);
cemetery.map.add_marker.call(null,lat_5797,lng_5798,"img/marker.svg","Your destination");

//# sourceMappingURL=map.js.map