(ns cemetery.map
    (:require [dommy.core :as d :refer-macros [sel sel1]])
    (:import [goog Uri]))


(def gmap (atom nil))
(def gmarkers (atom []))


(defn- add-marker
    [lat lng icon title]
    (let [opts {:position (google.maps.LatLng. lat lng) :icon icon}
          marker (google.maps.Marker. (clj->js opts))]
        (swap! gmarkers conj marker)
        (google.maps.event.addListener. marker "click" #(js/alert title))
        (.setMap marker @gmap)))


(defn- init-map
    [lat lng]
    (let [opts {:center (google.maps.LatLng. lat lng)
                :zoom 18 
                :mapTypeId google.maps.MapTypeId.HYBRID}
          gm (google.maps.Map. (d/sel1 :#map) (clj->js opts))]
        (reset! gmap gm)))


(defn- get-uri-pos
    "Returns [lat lng] values taken from current URI."
    []
    (let [uri (goog.Uri. (-> js/document .-location .-href))]
        (map #(double (.getParameterValue uri %)) ["lat" "lng"])))


(defn- bounds
    "Return LatLngBounds object that neatly contains markers."
    [markers]
    (loop [bounds (google.maps.LatLngBounds.)
           m markers]
        (if (seq m)
            (recur 
                (.extend bounds (.getPosition (first m)))
                (rest m))
            bounds)))


(defn- on-get-pos
    [pos]
    (add-marker
        (-> pos .-coords .-latitude)
        (-> pos .-coords .-longitude)
        "img/userpos.svg"
        "Your position")
    (.fitBounds @gmap (bounds @gmarkers)))


; initialise
(let [[lat lng] (get-uri-pos)]
    (.getCurrentPosition navigator.geolocation on-get-pos)
    (init-map lat lng)
    (add-marker lat lng "img/marker.svg" "Your destination"))

