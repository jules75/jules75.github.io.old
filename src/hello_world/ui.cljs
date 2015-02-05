(ns hello_world.ui
    (:require [dommy.core :as dom :refer-macros [sel sel1]]))


(defn- ui-render-details
    [details]
    (-> (dom/sel1 :#details)
        (dom/set-text! (str details))
        ;(dom/show!)
        ))


(defn- ui-create-list-items
    [records callback]
    (doseq [rec records]
        (dom/append! 
            (dom/sel1 :#results) 
                (-> (dom/create-element "li")
                    (dom/set-attr! :id (:id rec))
                    (dom/listen! :click callback)
                    ))))

(defn- ui-populate-list
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


(defn ui-update
    "Update UI according to current state"
    [records record-details start-index max-index callback]
    (dom/toggle! (dom/sel1 :#limit) (= start-index max-index))
    (when (pos? (count records))
        (dom/clear! (dom/sel1 :#results))
        (ui-create-list-items records callback)
        (ui-populate-list records)
        (ui-render-details record-details)))

