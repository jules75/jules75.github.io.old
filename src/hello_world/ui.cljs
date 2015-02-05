(ns hello_world.ui
    (:require [dommy.core :as dom :refer-macros [sel sel1]]))


(defn- render-details
    [details]
    (let [title (-> (dom/create-element "h3") (dom/set-text! (:fullname details)))
          location (-> (dom/create-element "p") (dom/set-text! (:location details)))
          area-text (str "AREA: " (:area1 details) " (" (:area2 details) ")")
          section-text (str "SECTION: " (:section1 details) " (" (:section2 details) ")")
          row-text (str "ROW: " (:row details))
          grave-text (str "GRAVE: " (:grave details))
          area (-> (dom/create-element "p") (dom/set-text! area-text))
          section (-> (dom/create-element "p") (dom/set-text! section-text))
          row (-> (dom/create-element "p") (dom/set-text! row-text))
          grave (-> (dom/create-element "p") (dom/set-text! grave-text))
          ]
        (-> (dom/sel1 :#details)
            dom/clear!
            (dom/append! title)
            (dom/append! location)
            (dom/append! area)
            (dom/append! section)
            (dom/append! row)
            (dom/append! grave)
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
    [records record-details start-index max-index callback]
    (dom/toggle! (dom/sel1 :#limit) (= start-index max-index))
    (when (pos? (count records))
        (dom/clear! (dom/sel1 :#results))
        (create-list-items records callback)
        (populate-list records)
        (render-details record-details)))

