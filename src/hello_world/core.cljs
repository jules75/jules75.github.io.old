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


(defn subs
	[n s]
	"First n chars of string s"
	(apply str (take n s)))
	
(defn ui-update
	"Update UI according to current state"
	[]
	(-> (dom/sel1 :h2) (dom/set-text! (str (count @results) " anagram(s) found")))
	(dom/toggle! (dom/sel1 :#hint) (pos? (count @results)))
	(dom/clear! (dom/sel1 :#result))
	(doseq [res @results]
		(dom/append! (dom/sel1 :#result) (dom/set-text! (dom/create-element "li") (subs @hint-count res)))
		))


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
