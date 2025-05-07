// node_modules/prismjs/components/prism-tt2.js
(function(Prism2) {
  Prism2.languages.tt2 = Prism2.languages.extend("clike", {
    "comment": /#.*|\[%#[\s\S]*?%\]/,
    "keyword": /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|SWITCH|TAGS|THROW|TRY|UNLESS|USE|WHILE|WRAPPER)\b/,
    "punctuation": /[[\]{},()]/
  });
  Prism2.languages.insertBefore("tt2", "number", {
    "operator": /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|not|or)\b/,
    "variable": {
      pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
    }
  });
  Prism2.languages.insertBefore("tt2", "keyword", {
    "delimiter": {
      pattern: /^(?:\[%|%%)-?|-?%\]$/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("tt2", "string", {
    "single-quoted-string": {
      pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
      greedy: true,
      alias: "string"
    },
    "double-quoted-string": {
      pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
      greedy: true,
      alias: "string",
      inside: {
        "variable": {
          pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
        }
      }
    }
  });
  delete Prism2.languages.tt2.string;
  Prism2.hooks.add("before-tokenize", function(env) {
    var tt2Pattern = /\[%[\s\S]+?%\]/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "tt2", tt2Pattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "tt2");
  });
})(Prism);
//# sourceMappingURL=prismjs_components_prism-tt2.js.map
