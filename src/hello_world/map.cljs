(ns hello_world.map
    (:require [dommy.core :as d :refer-macros [sel sel1]])
    (:import [goog Uri]))


(def gmap (atom nil))
(def gmarkers (atom []))


(defn- add-marker
    [lat lng]
    (let [opts {:position (google.maps.LatLng. lat lng)}
          marker (google.maps.Marker. (clj->js opts))]
        (swap! gmarkers conj marker)
        (.setMap marker @gmap)))


(defn- init-map
    [lat lng]
    (let [opts {:center (google.maps.LatLng. lat lng)
                :zoom 18 
                :mapTypeId google.maps.MapTypeId.SATELLITE}
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
        (-> pos .-coords .-longitude))
    (.fitBounds @gmap (bounds @gmarkers)))


; initialise
(let [[lat lng] (get-uri-pos)]
    (.getCurrentPosition navigator.geolocation on-get-pos)
    (init-map lat lng)
    (add-marker lat lng))

