(ns hello_world.ui
    (:require [dommy.core :as dom :refer-macros [sel sel1]]))


(defn- render-details
    [details callback]
    (let [f #(-> (dom/create-element %1) (dom/set-text! %2))
          area-text     (str "AREA: " (:area1 details) " (" (:area2 details) ")")
          section-text  (str "SECTION: " (:section1 details) " (" (:section2 details) ")")   
          title         (f :h3 (:fullname details))
          location      (f :p (:location details))
          area          (f :p area-text)
          section       (f :p section-text)
          row           (f :p (str "ROW: " (:row details)))
          grave         (f :p (str "GRAVE: " (:grave details)))
          close         (-> (f :button "Close") (dom/set-attr! :id "close") (dom/listen! :click callback))
          ]
        (-> (dom/sel1 :#details)
            dom/clear!
            (dom/append! title)
            (dom/append! location)
            (dom/append! area)
            (dom/append! section)
            (dom/append! row)
            (dom/append! grave)
            (dom/append! close)
            )))


(defn- create-list-items
    [records callback]
    (doseq [rec records]
        (dom/append! 
            (dom/sel1 :#results) 
                (-> (dom/create-element "li")
                    (dom/set-attr! :id (:id rec))
                    (dom/listen! :click callback)
                    ))))

(defn- populate-list
    [records]
    (doseq [li (dom/sel :li)
            :let [id (dom/attr li :id)
                  rec (first (filter #(= id (:id %)) records))
                  about (str "Funeral on " (:death rec) " aged " (:age rec))
                  f #(dom/append! 
                         %1 (-> (dom/create-element :p)
                                (dom/set-text! %2)
                                (dom/add-class! %3)))]]
          (-> li
              (f (:name rec) :name)
              (f about :about))))


(defn update
    "Update UI according to current state"
    [records record-details start-index max-index show-details? item-select-callback close-callback]
    (dom/toggle! (dom/sel1 :#limit) (= start-index max-index))
    (dom/toggle! (dom/sel1 :#details) show-details?)
    (when (pos? (count records))
        (dom/clear! (dom/sel1 :#results))
        (create-list-items records item-select-callback)
        (populate-list records)
        (render-details record-details close-callback)))

