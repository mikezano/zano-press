(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{286:function(t,e,a){},369:function(t,e,a){t.exports=a.p+"assets/img/specificity-calculator-1.24af9cae.png"},370:function(t,e,a){t.exports=a.p+"assets/img/specificity-calculator-2.214869c7.png"},371:function(t,e,a){t.exports=a.p+"assets/img/specificity-calculator-3.34946818.png"},372:function(t,e,a){"use strict";var s=a(286);a.n(s).a},538:function(t,e,a){"use strict";a.r(e);a(372);var s=a(46),n=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"page-frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#page-frontmatter-title","aria-hidden":"true"}},[t._v("#")]),t._v(" "+t._s(t.$page.frontmatter.title))]),t._v(" "),s("Badge",{attrs:{text:t.$page.frontmatter.date}}),t._v(" "),s("Badge",{attrs:{text:t.$page.frontmatter.tag,type:"tag"}}),t._v(" "),s("Tweet"),t._v(" "),s("p",[t._v("The other day I ran into a situation where a co-worker was having problems getting their styles (you've probably heard this before 🙄) to appear on an element. Instead of to restorting evil "),s("strong",[t._v("!important")]),t._v(" statements, lets re-create a similar situation to resolve these types of problems.")]),t._v(" "),s("h2",{attrs:{id:"the-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-setup","aria-hidden":"true"}},[t._v("#")]),t._v(" The setup")]),t._v(" "),s("p",[t._v("Here we have an innocent looking table set up...")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Apple"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Banana"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("...along with the following css rule...")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-table tr td")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid black"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Which would result in something like this...")]),t._v(" "),s("table",{staticClass:"my-table"},[s("tr",[s("td",[t._v("Apple")]),t._v(" "),s("td",[t._v("Banana")])])]),t._v(" "),s("h2",{attrs:{id:"the-change-attempt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-change-attempt","aria-hidden":"true"}},[t._v("#")]),t._v(" ...the change attempt")]),t._v(" "),s("p",[t._v("Let's say our co-worker wanted to remove the the bottom border on the "),s("code",[t._v("apple")]),t._v(" cell by adding a class to the "),s("code",[t._v("td")]),t._v(" element as so...")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("custom-td"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Apple"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("...and the css...")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".custom-td")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("What wold be the net result ? NOTHING WILL CHANGED. The border will still exist...")]),t._v(" "),s("p",[t._v("Ahhhhhh.....(╯°□°）╯︵ ┻━┻")]),t._v(" "),s("p",[t._v("A class was placed DIRECTLY on the table cell that needed to change and it didn't work ! So infuriating, right ? Well guess what ? We're doing it wrong...")]),t._v(" "),s("h2",{attrs:{id:"whats-the-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whats-the-problem","aria-hidden":"true"}},[t._v("#")]),t._v(" ...whats the problem ?")]),t._v(" "),s("p",[t._v("First, let's use this awesome "),s("a",{attrs:{href:"https://specificity.keegan.st/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Specificity Calculator"),s("OutboundLink")],1),t._v(" to help understand what's taking priority. In case you didn't know, all the rules you write in CSS have a secret value (cardinality) to them. When two different styles affect the same element, the one that is more 'specific' a.k.a has the higher value, wins. Plugging in the first style selector "),s("code",[t._v(".my-table tr td")]),t._v(" to the calculator we get...")]),t._v(" "),s("p",[s("img",{attrs:{src:a(369),alt:"An image"}})]),t._v(" "),s("p",[t._v("You can infer from the calculator that this produces a value of 12. One class and two elements. Whats the value of the "),s("code",[t._v(".custom-td")]),t._v(" class ?")]),t._v(" "),s("p",[s("img",{attrs:{src:a(370),alt:"An image"}})]),t._v(" "),s("p",[t._v("... 10 ! and because 12 > 10 conflicting properties between the two rules will have the "),s("code",[t._v(".my-table tr td")]),t._v(" selector ones take effect , hence why "),s("code",[t._v("border: none")]),t._v(" doesn't work.")]),t._v(" "),s("h2",{attrs:{id:"and-the-solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#and-the-solution","aria-hidden":"true"}},[t._v("#")]),t._v(" ...and the solution ?")]),t._v(" "),s("p",[t._v("We need to write a selector that has a higher specifcity value than 12. In the calculator we saw that classes are more 'valuable' then plain element rules meaning if we make a strong rule with classes we might be in better shape. Let's try:")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-table .custom-td")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This will first select the "),s("code",[t._v(".my-table")]),t._v(" element and look for "),s("code",[t._v(".custom-td")]),t._v(" in it. It's value in the specifity calculator...")]),t._v(" "),s("p",[s("img",{attrs:{src:a(371),alt:"An image"}})]),t._v(" "),s("p",[t._v("...results in 20 which is greater than 12 from "),s("code",[t._v(".my-table tr td")]),t._v(" meaning that our "),s("code",[t._v("border: none;")]),t._v(" statement will actually work!")]),t._v(" "),s("h2",{attrs:{id:"what-did-you-learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-did-you-learn","aria-hidden":"true"}},[t._v("#")]),t._v(" What did you learn ?")]),t._v(" "),s("p",[t._v("You don't need to know your entire CSS code base to understand whats the conflicting situations. These days ites easy enough to use the 'inspect element' functionality of any browser and see what ruels are being appled. For example..")]),t._v(" "),s("p",[t._v("Here you can see the rule is crossed out because the other rule specifies the same property and with its higher specificy it wins. To get the rule you wrote to take effect you would have to do something like...")]),t._v(" "),s("p",[t._v("There's always a reason why your rules don't take effect. It's almost always a specificity issue that needs some element inspection to determine. A better way of getting around these situations is to use an establish methodoly such as B.E.M to help componentize your css blocks and affect only certain items. When you need to customize the element you can then just add to the existing scoped block.")]),t._v(" "),s("p",[t._v("-Zano")])],1)},[],!1,null,null,null);e.default=n.exports}}]);