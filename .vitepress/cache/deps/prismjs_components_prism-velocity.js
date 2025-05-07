// node_modules/prismjs/components/prism-velocity.js
(function(Prism2) {
  Prism2.languages.velocity = Prism2.languages.extend("markup", {});
  var velocity = {
    "variable": {
      pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,
      lookbehind: true,
      inside: {}
      // See below
    },
    "string": {
      pattern: /"[^"]*"|'[^']*'/,
      greedy: true
    },
    "number": /\b\d+\b/,
    "boolean": /\b(?:false|true)\b/,
    "operator": /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
    "punctuation": /[(){}[\]:,.]/
  };
  velocity.variable.inside = {
    "string": velocity["string"],
    "function": {
      pattern: /([^\w-])[a-z][\w-]*(?=\()/,
      lookbehind: true
    },
    "number": velocity["number"],
    "boolean": velocity["boolean"],
    "punctuation": velocity["punctuation"]
  };
  Prism2.languages.insertBefore("velocity", "comment", {
    "unparsed": {
      pattern: /(^|[^\\])#\[\[[\s\S]*?\]\]#/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^#\[\[|\]\]#$/
      }
    },
    "velocity-comment": [
      {
        pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
        lookbehind: true,
        greedy: true,
        alias: "comment"
      },
      {
        pattern: /(^|[^\\])##.*/,
        lookbehind: true,
        greedy: true,
        alias: "comment"
      }
    ],
    "directive": {
      pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
      lookbehind: true,
      inside: {
        "keyword": {
          pattern: /^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,
          inside: {
            "punctuation": /[{}]/
          }
        },
        rest: velocity
      }
    },
    "variable": velocity["variable"]
  });
  Prism2.languages.velocity["tag"].inside["attr-value"].inside.rest = Prism2.languages.velocity;
})(Prism);
//# sourceMappingURL=prismjs_components_prism-velocity.js.map
