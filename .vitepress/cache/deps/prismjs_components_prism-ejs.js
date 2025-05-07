// node_modules/prismjs/components/prism-ejs.js
(function(Prism2) {
  Prism2.languages.ejs = {
    "delimiter": {
      pattern: /^<%[-_=]?|[-_]?%>$/,
      alias: "punctuation"
    },
    "comment": /^#[\s\S]*/,
    "language-javascript": {
      pattern: /[\s\S]+/,
      inside: Prism2.languages.javascript
    }
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var ejsPattern = /<%(?!%)[\s\S]+?%>/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "ejs", ejsPattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "ejs");
  });
  Prism2.languages.eta = Prism2.languages.ejs;
})(Prism);
//# sourceMappingURL=prismjs_components_prism-ejs.js.map
