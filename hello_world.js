goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../hello_world/parse.js", ['hello_world.parse'], ['cljs.core', 'clojure.string']);
goog.addDependency("../dommy/utils.js", ['dommy.utils'], ['cljs.core']);
goog.addDependency("../dommy/core.js", ['dommy.core'], ['cljs.core', 'dommy.utils', 'clojure.string']);
goog.addDependency("../hello_world/core.js", ['hello_world.core'], ['hello_world.parse', 'goog.net.XhrIo', 'cljs.core', 'dommy.core', 'clojure.string']);