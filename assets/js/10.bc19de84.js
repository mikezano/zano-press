(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{291:function(t,e,a){},292:function(t,e,a){},377:function(t,e,a){"use strict";var s=a(291);a.n(s).a},378:function(t,e,a){"use strict";var s=a(292);a.n(s).a},522:function(t,e,a){"use strict";a.r(e);a(377),a(378);var s=a(46),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title","aria-hidden":"true"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),a("Badge",{attrs:{text:t.$page.frontmatter.date}}),t._v(" "),a("Badge",{attrs:{text:t.$page.frontmatter.tag}}),t._v(" "),a("Tweet"),t._v(" "),a("p",[t._v("Here's a technique I like to use for creating more visually creative hover effects...")]),t._v(" "),a("div",{attrs:{id:"hover-me-1"}},[t._v("Hover Over Me")]),t._v(" "),a("p",[t._v("How is it done ? With borders and pseudo elements actually, lets walk through it. 😃")]),t._v(" "),a("h2",{attrs:{id:"the-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-steps","aria-hidden":"true"}},[t._v("#")]),t._v(" The Steps")]),t._v(" "),a("h3",{attrs:{id:"_1-the-html-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-the-html-css","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. The html/css")]),t._v(" "),a("p",[t._v("Let's start with:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hover-border"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hover Over Me"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("A breakdown of what we are doing with these properties/values ...")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("#hover-border")])]),t._v(" "),a("th",[t._v("What it means")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("position:relative;")])]),t._v(" "),a("td",[t._v("This will control where the upcoming "),a("code",[t._v("::before")]),t._v(" element will place itself  (We'll see this in a sec).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display: inline;")])]),t._v(" "),a("td",[t._v("Is used so that the size of the element will only be as large as the content itself.")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-the-before-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-the-before-element","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. The ::before element")]),t._v(" "),a("p",[t._v("Every html element has two not-so-secret elements ("),a("code",[t._v("::before")]),t._v(" and "),a("code",[t._v("::after")]),t._v(") to help add static content around your element.  In this case we will set up the "),a("code",[t._v("::before")]),t._v(" element with the following...")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-border::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("4px solid orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("What is each property here helping acheive?")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("#hover-border::before")])]),t._v(" "),a("th",[t._v("What it means")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("position:absolute;")])]),t._v(" "),a("td",[t._v("Allows the "),a("code",[t._v("::before")]),t._v(" element to 'float' within the confines of the "),a("code",[t._v("#hover-border")]),t._v(".  If "),a("code",[t._v("#hover-border")]),t._v(" didnt define a "),a("code",[t._v("position: relative;")]),t._v(" value this element could potentially move anywhere on the page.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("content: '';")])]),t._v(" "),a("td",[t._v("Required for any pseudo-element to indicate what the static content will be otherwise the element will not show.  We fake the content here with an empty string.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("width: 0;")])]),t._v(" "),a("td",[t._v("Start off by 'hiding' the element and later modifying the "),a("code",[t._v("width")]),t._v(" value to display the element.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("height:100%;")])]),t._v(" "),a("td",[t._v("This will size the element to be the same as "),a("code",[t._v("#hover-border")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("border-bottom:4px solid orange;")])]),t._v(" "),a("td",[t._v("This is our border lying in wait until a width value > 0 is added. Soon!")])])])]),t._v(" "),a("h3",{attrs:{id:"_3-the-hover-effect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-the-hover-effect","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.  The hover effect")]),t._v(" "),a("p",[t._v("Now we need to add the logic of what the "),a("code",[t._v("::before")]),t._v(" element will do when its parent "),a("code",[t._v("#hover-border")]),t._v(" is hovered over...")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-me:hover::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width .5s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[a("code",[t._v("#hover-me:hover::before")])]),t._v(" "),a("th",[t._v("What it means")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("transition: width .5s linear;")])]),t._v(" "),a("td",[t._v("When you hover over the "),a("code",[t._v("#hover-me")]),t._v(" element add a "),a("code",[t._v("transition")]),t._v(" property that will animate any change to the "),a("code",[t._v("width")]),t._v(" of the "),a("code",[t._v("::before")]),t._v(" element and make it last for "),a("code",[t._v(".5s")]),t._v(" with "),a("code",[t._v("linear")]),t._v(" movement. Phew!")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("width:100%;")])]),t._v(" "),a("td",[t._v("And since the width value is set to 100%, we will see it grow from 0 to 100%, and as a consequence reveal the border !")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-all-together"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-all-together","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. All together")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("relative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Titillium Web'")]),t._v(", sans-serif"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-me::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("4px solid orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#hover-me:hover::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width .5s linear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hover-me"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hover Over Me"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{attrs:{id:"hover-me-1"}},[t._v("Hover Over Me")]),t._v(" "),a("p",[t._v("~ Zano")])],1)},[],!1,null,null,null);e.default=n.exports}}]);