(ns hello_world.map
    (:require [dommy.core :as d :refer-macros [sel sel1]])
    (:import [goog Uri]))


(def gmap (atom nil))


(defn add-marker
    [lat lng]
    (let [pos (google.maps.LatLng. lat lng)
          opts {:position pos :title "test"}
          marker (google.maps.Marker. (clj->js opts))]
        (.setMap marker @gmap)
        ))


(defn init-map
    []
    (let [pos {:lat -37.55 :lng 143.8}
          opts {:center pos :zoom 12 :mapTypeId google.maps.MapTypeId.SATELLITE}
          canvas (d/sel1 :#map)
          gm (google.maps.Map. (d/sel1 :#map) (clj->js opts))]
        (reset! gmap gm)
        ))


(defn init-marker
    []
    (let [url (-> js/document .-location .-href)
          guri (goog.Uri. url)
          [lat lng] (map #(.getParameterValue guri %) ["lat" "lng"])]
        (add-marker lat lng)))


(init-map)
(init-marker)

