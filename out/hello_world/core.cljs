(ns hello_world.core
	(:require [hello_world.data :refer [nine-letter-words]]
			[dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [upper-case replace]]))


(defn score
	"Gives string a score, useful for determining anagrams
	and partial anagrams. Expects uppercase string.
	If two words have they same score, they are anagrams.
	If A's score is a factor of B's score, each letter in A is contained in B."
	[s]
	(let [primes [2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101]
		letters "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		lookup (zipmap letters primes)]
		(apply * (map #(get lookup %) s))
		))
		
(defn partial-anagram?
	"True if each letter in s1 is contained in s2."
	[s1 s2]
	(zero? (rem (score s2) (score s1))))
	
; state
(def results (atom []))
(def hint-count (atom 0))


(defn substr
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
		(dom/append! (dom/sel1 :#result) (dom/set-text! (dom/create-element "li") (substr @hint-count res)))
		))


(defn on-find
	[e]
	(let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))
			dict (atom nine-letter-words)
			chunk 500]
		(reset! results [])
		(reset! hint-count 0)
		(while (seq @dict)
			(let [anagrams (filter #(partial-anagram? letters %) (take chunk @dict))]
				(swap! results #(into % anagrams)))
			(ui-update)
			(swap! dict #(drop chunk %))
			)
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

