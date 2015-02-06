(ns hello_world.map
    (:require [dommy.core :as d :refer-macros [sel sel1]]))


(defn init
    []
    (let [opts {:center {:lat -37.5 :lng 143.5}, :zoom 8}
          canvas (d/sel1 :#map)
          gmap (google.maps.Map. (d/sel1 :#map) (clj->js opts))
          ]
        (.log js/console  (clj->js gmap))
        ))


(init)      


