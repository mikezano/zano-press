// node_modules/prismjs/components/prism-flow.js
(function(Prism2) {
  Prism2.languages.flow = Prism2.languages.extend("javascript", {});
  Prism2.languages.insertBefore("flow", "keyword", {
    "type": [
      {
        pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
        alias: "class-name"
      }
    ]
  });
  Prism2.languages.flow["function-variable"].pattern = /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i;
  delete Prism2.languages.flow["parameter"];
  Prism2.languages.insertBefore("flow", "operator", {
    "flow-punctuation": {
      pattern: /\{\||\|\}/,
      alias: "punctuation"
    }
  });
  if (!Array.isArray(Prism2.languages.flow.keyword)) {
    Prism2.languages.flow.keyword = [Prism2.languages.flow.keyword];
  }
  Prism2.languages.flow.keyword.unshift(
    {
      pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,
      lookbehind: true
    },
    {
      pattern: /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
      lookbehind: true
    }
  );
})(Prism);
//# sourceMappingURL=prismjs_components_prism-flow.js.map
