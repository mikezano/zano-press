---
title: What will specificity do for you?
description: For all those times you've wondered why an element does not apply your CSS.
date: 19.03.06
tag: "#it's not working"
---

# {{$page.frontmatter.title}}
<Badge :text="$page.frontmatter.date" />
<Badge :text="$page.frontmatter.tag" />

The other day I ran into a situation where a co-worker was not understanding how to override existing styles of an element. Instead of restoring to the evil **!important** statement, we took a deeper look at the code to undertand what could be done.

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
  border-bottom: 1px solid black;
}
```

Which would result in something like this...

<table class="my-table">
  <tr>
    <td>Apple</td>
    <td>Banana</td>
  </tr>
</table>

<style>
.my-table tr td {
  font-weight: bold;
  border-bottom: 1px solid black;
}
</style>

## ...the change attempt

Co-worker wanted to remove the the first bottom border on the `apple` cell and added a class to the `td` element in question as so...

```html
<td class="custom-cell">Apple</td>
```

...and the css...

```css
.custom-cell { border: none; }
```

But what was the result? NOTHING CHANGED. The border was still there...

Ahhhhhh.....(╯°□°）╯︵ ┻━┻

You put a class DIRECTLY on the table cell you want to change and it didnt work! So infuriating, right?  Well guess what?  You did it wrong....

## ...whats the problem?

First, let's use this awesome [Specificity Calculator](https://specificity.keegan.st/) to help understand whats taking priority.  In case you didn't know, all the rules you write in css have a secret value (cardinality) to them. When two different styles affect the same element, the one that is more 'specific' a.k.a has the higher value, wins. Plugging in the first style selector of `.table tr td` to the calculator we get...

![An image](../.vuepress/public/images/posts/specificity-calculator-1.png)

What you can infer from the selector is that it produces a value of 12. One class and two elements.  Whats the value of the `.custom-cell` class ?

![An image](../.vuepress/public/images/posts/specificity-calculator-2.png)

... 10 ! and because 12 > 10 your conflicting properties between the two rules will have the `.table tr td` selector ones take effect , hence why `border: none` doesn't work.

## ...and the solution?

You don't need to know your entire CSS code base to understand whats the conflicting situations.  These days ites easy enough to use the 'inspect element' functionality of any browser and see what ruels are being appled.  For example..

Here you can see the rule is crossed out because the other rule specifies the same property and with its higher specificy it wins.  To get the rule you wrote to take effect you would have to do something like...

```css
.my-table tr td.custom-cell{ border: none;}
```
...and now its value in the specifity calculator...

![An image](../.vuepress/public/images/posts/specificity-calculator-3.png)

As you can see 22 > 12 and and properties you write here will work

## Moral of the story

There's always a reason why your rules don't take effect.  It's almost always a specificity issue that needs some element inspection to determine.  A better way of getting around these situations is to use an establish methodoly such as B.E.M  to help componentize your css blocks and affect only certain items.  When you need to customize the element you can then just add to the existing scoped block.

-Zano
