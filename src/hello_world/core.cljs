(ns hello_world.core
	(:require [hello_world.data :refer [nine-letter-words]]
			[dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [upper-case replace]]))


(defn anagrams
    "Find all anagrams of 'word' in wordlist."
    [word wordlist]
    (filter #(= (sort %) (sort word)) wordlist))


(def results (atom []))
	
	
(defn onsubmit
	[e]
	(let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))
			result (anagrams letters nine-letter-words)]
		(reset! results result)
		(-> :#results dom/sel1 dom/clear!)
		(-> (dom/sel1 :h2) (dom/set-text! (str (count result) " anagram(s) found")))
		(doseq [match result]
			(.log js/console match))
		(.preventDefault e)
		))


(dom/listen! (dom/sel1 :form) :submit onsubmit)
