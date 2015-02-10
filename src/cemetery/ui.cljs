(ns cemetery.ui
    (:require [dommy.core :as d :refer-macros [sel sel1]]))

(defn geo-link
    [lat lng]
    (-> (d/create-element :a) 
        (d/set-text! "View on map (approx.)")
        ;(d/set-attr! :href (str "map.html?lat=" lat "&lng=" lng))
        (d/set-attr! :href (str "http://maps.google.com?q=" lat "," lng))
        ))


(defn- render-details
    [details id]
    (let [f #(-> (d/create-element %1) (d/set-text! %2))
          area-text     (str "Area: " (:area1 details) " (" (:area2 details) ")")
          section-text  (str "Section: " (:section1 details) " (" (:section2 details) ")")   
          location      (f :p (:location details))
          area          (f :p area-text)
          section       (f :p section-text)
          rowgrave      (f :p (str "Row " (:row details) ", grave " (:grave details)))
          ]
        (-> (d/sel1 [(str "#i" id) :div])
            (d/append! location)
            (d/append! area)
            (d/append! section)
            (d/append! rowgrave)
            (d/append! (geo-link (:lat details) (:lng details)))
            )))


(defn- create-list-items
    [records callback]
    (doseq [rec records]
        (d/append! 
            (d/sel1 :#results) 
                (-> (d/create-element "li")
                    (d/set-attr! :id (str "i" (:id rec)))
                    (d/listen! :click callback)
                    (d/append! (d/create-element "div"))
                    ))))


(defn- populate-list
    [records]
    (doseq [li (d/sel :li)
            :let [id (apply str (rest (d/attr li :id)))
                  rec (first (filter #(= id (:id %)) records))
                  about (str "Funeral on " (:death rec) " aged " (:age rec))
                  f #(d/append! 
                         %1 (-> (d/create-element :p)
                                (d/set-text! %2)
                                (d/add-class! %3)))]]
          (-> li
              (f (:name rec) :name)
              (f about :about))))


(defn update
    "Update UI according to current state"
    [records 
     record-details 
     record-id
     start-index 
     max-index
     item-select-callback]
    (d/toggle! (d/sel1 :#limit) (= start-index max-index))
    (when (pos? (count records))
        (d/clear! (d/sel1 :#results))
        (create-list-items records item-select-callback)
        (populate-list records)
        (render-details record-details record-id)))

