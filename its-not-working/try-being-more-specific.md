---
title: Try being more specific
description: For all those times you've wondered why an element does not apply your CSS.
date: 19.03.06
tag: '#itsnotworking'
---

# {{$page.frontmatter.title}}

<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" type="tag"/>

The other day I ran into a situation where a co-worker was having problems getting their styles (you've probably heard this before 🙄) to appear on an element. Instead of to restorting evil **!important** statements, lets re-create a similar situation to resolve these types of problems.

## The setup

Here we have an innocent looking table set up...

```html
<table class="my-table">
  <tr>
    <td>Apple</td>
    <td>Banana</td>
  </tr>
</table>
```

...along with the following css rule...

```css
.my-table tr td {
  font-weight: bold;
  border-bottom: 4px solid black;
}
```

Which would result in something like this...

<table class="my-table">
  <tr>
    <td class="custom-td">Apple</td>
    <td>Banana</td>
  </tr>
</table>

<style>
.my-table tr td {
  font-weight: bold;
  border-bottom: 4px solid black;
}
.custom-td{
	border-bottom: none;
}
</style>

## ...the change attempt

Let's say our co-worker wanted to remove the bottom border on the `apple` cell by adding a class to the `td` element as so...

```html
<td class="custom-td">Apple</td>
```

...and the css...

```css
.custom-td {
  border: none;
}
```

What wold be the net result ? NOTHING WILL CHANGE. The border will still exist...

Ahhhhhh.....(╯°□°）╯︵ ┻━┻

A class was placed DIRECTLY on the table cell that needed to change and it didn't work ! So infuriating, right ? Well guess what ? We're doing it wrong...

## ...whats the problem ?

First, let's use this awesome [Specificity Calculator](https://specificity.keegan.st/) to help understand what's taking priority. In case you didn't know, all the rules you write in CSS have a secret value (cardinality) to them. When two different styles affect the same element, the one that is more 'specific' a.k.a has the higher value, wins. Plugging in the first style selector `.my-table tr td` to the calculator we get...

![An image](../.vuepress/public/images/posts/specificity-calculator-1.png)

You can infer from the calculator that this produces a value of 12. One class and two elements. Whats the value of the `.custom-td` class ?

![An image](../.vuepress/public/images/posts/specificity-calculator-2.png)

... 10 ! and because 12 > 10 conflicting properties between the two rules will have the `.my-table tr td` selector ones take effect , hence why `border: none` doesn't work.

## ...and the solution ?

We need to write a selector that has a higher specifcity value than 12. In the calculator we saw that classes are more 'valuable' then plain element rules meaning if we make a more descriptive rule with classes we might be in better shape. Let's try:

```css
.my-table .custom-td {
  border: none;
}
```

This will first select the `.my-table` element and look for `.custom-td` in it. It's value in the specifity calculator...

![An image](../.vuepress/public/images/posts/specificity-calculator-3.png)

...results in 20 which is greater than the 12 coming from `.my-table tr td`.  This means our `border: none;` statement will actually work!

<table class="my-table2">
  <tr>
    <td class="custom-td">Apple</td>
    <td>Banana</td>
  </tr>
</table>

<style>
.my-table2 tr td {
  font-weight: bold;
  border-bottom: 4px solid black;
}
.my-table2 .custom-td{
	border-bottom:none;
}
</style>

## Last thoughts...

There's always a reason why your rules don't take effect. You don't need to know your entire CSS code base to pinpoint the problem because making use of browser features such as 'inspect element'  can help narrow down and visualize the rules actually taking effect. 

![An image](../.vuepress/public/images/posts/inspect-element-1.png)

In this image you see the browser interpretation of the first problem where the `td` cell has the `.custom-td` class being overwritten by the more specific `.my-table tr td`. 

A better approach to reducing these situations is by employing methodologies such as [B.E.M](http://getbem.com/) to help componentize your css blocks to affect only specified elements.  You can also do this through CSS pre-processors to help write 'scoped' rules which looks to be a feature for native functionality in a [future version of CSS](https://cssdb.org/)

-Zano
