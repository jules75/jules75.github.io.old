(ns hello_world.core
	(:require [hello_world.data :refer [nine-letter-words]]
			[dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [upper-case replace]]))


(defn anagrams
    "Find all anagrams of 'word' in wordlist."
    [word wordlist]
    (filter #(= (sort %) (sort word)) wordlist))


; state
(def results (atom []))
(def hint-count (atom 0))
	
	
(defn ui-update
	"Update UI according to current state"
	[]
	(-> :h2 dom/sel1 (dom/set-text! (str (count @results) " anagram(s) found")))
	(dom/set-text! (dom/sel1 :#result) (apply str (take @hint-count (first @results))))
	(dom/toggle! (dom/sel1 :#hint) (pos? (count @results)))
	)


(defn on-find
	[e]
	(let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))
			result (anagrams letters nine-letter-words)]
		(reset! results result)
		(reset! hint-count 0)
		(ui-update)
		(.preventDefault e)
		))
		
(defn on-hint
	[e]	
	(swap! hint-count inc)
	(ui-update)
	)


; listeners
(dom/listen! (dom/sel1 :form) :submit on-find)
(dom/listen! (dom/sel1 :#hint) :click on-hint)

(ui-update)
