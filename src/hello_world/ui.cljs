(ns hello_world.ui
    (:require [dommy.core :as d :refer-macros [sel sel1]]))


(defn- render-details
    [details callback]
    (let [f #(-> (d/create-element %1) (d/set-text! %2))
          area-text     (str "AREA: " (:area1 details) " (" (:area2 details) ")")
          section-text  (str "SECTION: " (:section1 details) " (" (:section2 details) ")")   
          title         (f :h3 (:fullname details))
          location      (f :p (:location details))
          area          (f :p area-text)
          section       (f :p section-text)
          row           (f :p (str "ROW: " (:row details)))
          grave         (f :p (str "GRAVE: " (:grave details)))
          close         (-> (f :button "Close") (d/set-attr! :id "close") (d/listen! :click callback))
          ]
        (-> (d/sel1 :#details)
            d/clear!
            (d/append! title)
            (d/append! location)
            (d/append! area)
            (d/append! section)
            (d/append! row)
            (d/append! grave)
            (d/append! close)
            )))


(defn- create-list-items
    [records callback]
    (doseq [rec records]
        (d/append! 
            (d/sel1 :#results) 
                (-> (d/create-element "li")
                    (d/set-attr! :id (:id rec))
                    (d/listen! :click callback)
                    ))))

(defn- populate-list
    [records]
    (doseq [li (d/sel :li)
            :let [id (d/attr li :id)
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
    [records record-details start-index max-index show-details? item-select-callback close-callback]
    (let [f (if show-details? d/add-class! d/remove-class!)]
        (d/toggle! (d/sel1 :#limit) (= start-index max-index))
        (d/toggle! (d/sel1 :#details) show-details?)
        (f (d/sel1 :#results) :disabled)
        (f (d/sel1 :nav) :disabled)
        (when (pos? (count records))
            (d/clear! (d/sel1 :#results))
            (create-list-items records item-select-callback)
            (populate-list records)
            (render-details record-details close-callback))))

