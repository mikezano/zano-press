// node_modules/prismjs/components/prism-false.js
(function(Prism2) {
  Prism2.languages["false"] = {
    "comment": {
      pattern: /\{[^}]*\}/
    },
    "string": {
      pattern: /"[^"]*"/,
      greedy: true
    },
    "character-code": {
      pattern: /'(?:[^\r]|\r\n?)/,
      alias: "number"
    },
    "assembler-code": {
      pattern: /\d+`/,
      alias: "important"
    },
    "number": /\d+/,
    "operator": /[-!#$%&'*+,./:;=>?@\\^_`|~ßø]/,
    "punctuation": /\[|\]/,
    "variable": /[a-z]/,
    "non-standard": {
      pattern: /[()<BDO®]/,
      alias: "bold"
    }
  };
})(Prism);
//# sourceMappingURL=prismjs_components_prism-false.js.map
