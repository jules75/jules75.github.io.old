(defproject cemetery "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
				 [prismatic/dommy "1.0.0"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "cemetery"
              :source-paths ["src"]
              :compiler {
                :output-to "cemetery.js"
                ;:output-dir "out"
                :optimizations :advanced
                ;:source-map true
                            }}]})
