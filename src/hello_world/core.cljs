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
	
	
(defn on-find
	[e]
	(let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))
			result (anagrams letters nine-letter-words)]
		(reset! results result)
		(reset! hint-count 0)
		(-> :#result dom/sel1 dom/clear!)
		(-> (dom/sel1 :h2) (dom/set-text! (str (count result) " anagram(s) found")))
		(.preventDefault e)
		))
		
(defn on-hint
	[e]	
	(swap! hint-count inc)
	(-> :#result dom/sel1 (dom/set-text! (apply str (take @hint-count (first @results)))))
	)


; listeners
(dom/listen! (dom/sel1 :form) :submit on-find)
(dom/listen! (dom/sel1 :#hint) :click on-hint)
