// node_modules/prismjs/components/prism-handlebars.js
(function(Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
  Prism2.languages.mustache = Prism2.languages.handlebars;
})(Prism);
//# sourceMappingURL=prismjs_components_prism-handlebars.js.map
