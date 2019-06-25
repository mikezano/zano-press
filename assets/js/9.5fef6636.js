(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{289:function(t,a,e){},290:function(t,a,e){},375:function(t,a,e){"use strict";var s=e(289);e.n(s).a},376:function(t,a,e){"use strict";var s=e(290);e.n(s).a},528:function(t,a,e){"use strict";e.r(a);e(375),e(376);var s=e(46),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"page-frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title","aria-hidden":"true"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),e("Badge",{attrs:{text:t.$page.frontmatter.date}}),t._v(" "),e("Badge",{attrs:{text:t.$page.frontmatter.tag}}),t._v(" "),e("Tweet"),t._v(" "),e("p",[t._v("CSS variables have widespread browser support these days and need occasional reminders to developers about how they work  😉.   First, they can look like this...")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(":root")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("code",[t._v(":root")]),t._v(" is a pseudo element representing the root element of your document (in this case "),e("code",[t._v("<html>")]),t._v("). By declaring variables here you are essentially placing them in the global scope available to any CSS. In this case the variable "),e("code",[t._v("--button-width")]),t._v(" is declared with a value of "),e("code",[t._v("100px")]),t._v(".  You can declare as many variables as you like and they can contain values that are numeric , percentages, string, colors and more.  Your first thought in looking at this might be , "),e("em",[t._v("two starting dashes")]),t._v(" ? Yuck 🤢. The internet has "),e("a",{attrs:{href:"https://softwareengineering.stackexchange.com/questions/311794/what-is-the-reason-that-css-variables-are-defined-using-two-hyphen-characters",target:"_blank",rel:"noopener noreferrer"}},[t._v("pointed this out"),e("OutboundLink")],1),t._v(" but don't expect any changes.")]),t._v(" "),e("h2",{attrs:{id:"so-how-do-you-use-it"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#so-how-do-you-use-it","aria-hidden":"true"}},[t._v("#")]),t._v(" So how do you use it?")]),t._v(" "),e("p",[t._v("Like this:")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#my-button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--button-width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("We 'call' a variable with the "),e("code",[t._v("var()")]),t._v(" function and pass in the variable we want to use. And if we had this html...")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-button"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("CSS Variables!"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("You'd get this...")]),t._v(" "),e("p",[e("button",{attrs:{id:"my-button1"}},[t._v("CSS Variables!")])]),t._v(" "),e("h2",{attrs:{id:"scope-declaration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scope-declaration","aria-hidden":"true"}},[t._v("#")]),t._v(" Scope declaration")]),t._v(" "),e("p",[t._v("What if another declaration of the "),e("code",[t._v("--button-width")]),t._v(" variable happened inside "),e("code",[t._v("#my-button")]),t._v(" style declaration ?")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#my-button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid black"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("var")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("--button-width"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Would this result in a button of "),e("code",[t._v("200px")]),t._v(" width as defined in this scope or "),e("code",[t._v("100px")]),t._v(" width as defined in the "),e("code",[t._v(":root")]),t._v(" ?  Answer:  "),e("code",[t._v("200px")]),t._v(". Locally scoped variables have precedent 😃")]),t._v(" "),e("div",{attrs:{id:"my-button2"}},[t._v("CSS Variables!")]),t._v(" "),e("h1",{attrs:{id:"why-use-variables-in-my-css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-use-variables-in-my-css","aria-hidden":"true"}},[t._v("#")]),t._v(" Why use variables in my CSS ?")]),t._v(" "),e("p",[t._v("For the same reason you would in any other programming language: reduce repetition, modularize styling, make things neat for the next developer. For example, how many times have you re-declared that same blue color for your buttons all over your html/css (maybe even inline-ing) and decided you wanted to change it, but dreaded all the places you would have to update it?  Variables would help you out there 😉")]),t._v(" "),e("p",[t._v("~ zan0")])],1)},[],!1,null,null,null);a.default=n.exports}}]);