(ns hello_world.core
	(:require [hello_world.data :refer [nine-letter-words]]
			[dommy.core :as dom :refer-macros [sel1]]
			[clojure.string :refer [upper-case replace]]))


; mutable state
(def search (atom nil))
(def found (atom []))
(def dict (atom []))


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


(defn init-state!
	"Reset mutable state."
	[]
	(reset! search nil)
	(reset! found [])
	(reset! dict nine-letter-words)
	)


(defn substr
	[n s]
	"First n chars of string s"
	(apply str (take n s)))


(defn ui-update
	"Update UI according to current state"
	[]
	(-> (dom/sel1 :h2) (dom/set-text! (str (count @found) " anagram(s) found")))
	(dom/clear! (dom/sel1 :#result))
	(doseq [res @found]
		(dom/append! (dom/sel1 :#result) (dom/set-text! (dom/create-element "li") res))
		))

		
(defn find-some-anagrams
	"Find some (not all) anagrams based on current app state.
	Called in chunks to avoid blocking."
	[]
	(when (pos? (count @search))
		(let [chunk 1000
				anagrams (filter #(partial-anagram? @search %) (take chunk @dict))]
				(swap! found #(into % anagrams))
				(swap! dict #(drop chunk %))
				)))
			

(defn on-find
	[e]
	(let [letters (-> :input dom/sel1 dom/value upper-case (replace #"\s" ""))]
		(init-state!)
		(reset! search letters)
		(.preventDefault e)
		))


; listeners
(dom/listen! (dom/sel1 :form) :submit on-find)


; timers
(js/setInterval find-some-anagrams 1000)
(js/setInterval ui-update 1000)


(init-state!)


