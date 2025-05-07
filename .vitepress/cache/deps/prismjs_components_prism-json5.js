// node_modules/prismjs/components/prism-json5.js
(function(Prism2) {
  var string = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
  Prism2.languages.json5 = Prism2.languages.extend("json", {
    "property": [
      {
        pattern: RegExp(string.source + "(?=\\s*:)"),
        greedy: true
      },
      {
        pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
        alias: "unquoted"
      }
    ],
    "string": {
      pattern: string,
      greedy: true
    },
    "number": /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/
  });
})(Prism);
//# sourceMappingURL=prismjs_components_prism-json5.js.map
