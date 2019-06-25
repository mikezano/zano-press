(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{527:function(t,e,a){"use strict";a.r(e);var s=a(46),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"page-frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title","aria-hidden":"true"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),a("Badge",{attrs:{text:t.$page.frontmatter.date}}),t._v(" "),a("Badge",{attrs:{text:t.$page.frontmatter.tag}}),t._v(" "),a("Tweet"),t._v(" "),a("p",[t._v("Its used to be the case that you would do something like this to create a sticky footer on your webpage...")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".footer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This takes a "),a("code",[t._v(".content")]),t._v(" element that stretches across the viewport height and adds a negative "),a("code",[t._v("margin-bottom")]),t._v(" value to make room for the footer. We place the "),a("code",[t._v(".footer")]),t._v(" at the bottom by absolutely positioning it and giving it a "),a("code",[t._v("50px")]),t._v(" height. See an example "),a("a",{attrs:{href:"https://codepen.io/_zan0/pen/JVBjqK",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(". It's not a bad technique but using something like the "),a("code",[t._v("margin-bottom: -50px")]),t._v(" seems hacky, and absolutely positioned elements can be a slippery slope.")]),t._v(" "),a("h1",{attrs:{id:"the-vh-unit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-vh-unit","aria-hidden":"true"}},[t._v("#")]),t._v(" The vh unit")]),t._v(" "),a("p",[t._v("Have you heard of "),a("code",[t._v("vh")]),t._v(" (vertical height) unit? It's a representation of the height of your viewport. A value of "),a("code",[t._v("100vh")]),t._v(" would represent the full height of your display, "),a("code",[t._v("200vh")]),t._v(" would represent twice the full height of your display and something like "),a("code",[t._v("0vh")]),t._v(" would be no height.")]),t._v(" "),a("p",[t._v("If we give a "),a("code",[t._v(".content")]),t._v(" div a height of "),a("code",[t._v("100vh")]),t._v(" with a "),a("code",[t._v("footer")]),t._v(" element placed right after it, the "),a("code",[t._v("footer")]),t._v(" element would appear but juuuuust off the screen... almost there.")]),t._v(" "),a("h1",{attrs:{id:"math-in-your-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#math-in-your-css","aria-hidden":"true"}},[t._v("#")]),t._v(" Math in your CSS")]),t._v(" "),a("p",[t._v("Have you heard of "),a("code",[t._v("calc()")]),t._v(" ? These days you can do math natively in your CSS and cook up some neat vodoo. In this case if we use "),a("code",[t._v("100vh")]),t._v(" on the "),a("code",[t._v(".container")]),t._v(" wouldn't it be nice if we could just shave off the necessary height mathematically to place the "),a("code",[t._v("footer")]),t._v(" within visible range? We can 😃 . Look...")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("100vh - 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("footer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("See the clever math there? This says that the height of our "),a("code",[t._v(".content")]),t._v(" should stretch across the viewport, but shave off "),a("code",[t._v("50px")]),t._v(" to make enough room for the "),a("code",[t._v("footer")]),t._v(". (Note: I replaced the "),a("code",[t._v(".footer")]),t._v(" element with the actual HTML element "),a("code",[t._v("footer")]),t._v(". See the vodoo "),a("a",{attrs:{href:"https://codepen.io/_zan0/pen/EJpxzV",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"benefits"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits","aria-hidden":"true"}},[t._v("#")]),t._v(" Benefits")]),t._v(" "),a("p",[t._v("With this technique document flow is nicely preserved and you have a solution that avoids absolute positioning. You could even take it further and make that "),a("code",[t._v("50px")]),t._v(" a variable that you modify as needed, just sayin' 😉 .")]),t._v(" "),a("p",[t._v("~ zan0")])],1)},[],!1,null,null,null);e.default=n.exports}}]);