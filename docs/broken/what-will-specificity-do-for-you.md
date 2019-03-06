---
image: /example-image.jpg
title: What will specificity do for you?
description: For all those times you've wondered why an element does not apply your CSS.
date: 19.03.05
tag: post
---

# What will specificity do for you <Badge text="post" />

The other day I ran into a situation where a co-worker was not understanding why their css
rule would not apply. Instead of restoring to the eveil !important, we took a deeper look at the code to undertand why.

## The setup

Here we have an innocent looking table set up...

```html
<table class="table">
  <tr class="row">
    <td>Apple</td>
    <td>Banana</td>
  </tr>
</table>
```

...along with the following css rule

```css
.table .row td {
  font-weight: bold;
  border-bottom: 1px solid black;
}
```

Which would result in something like this

<table class="table">
  <tr class="row">
    <td>Apple</td>
    <td>Banana</td>
  </tr>
</table>

<style>
.table .row td {
  font-weight: bold;
  border-bottom: 1px solid black;
}
</style>

## ...whats the problem?

First, let's use this awesome [Specificity Calculator](https://specificity.keegan.st/) that can
help us determine what rules would take precedent. In case you didn't know, all the rules you write in css have a secret value to them. When two different styles affect the same element, the one that is more 'specific' a.k.a has the higher value, wins.

![An image](../.vuepress/public/images/posts/specifiticy-calcuator-1.png)

What you ca infer from the selector use here is that it has a value of 12. When compared to just the class rule being applied a value of 10, the first rule 'wins' as it has a higher value and is more 'specific'

## ...and the solution?

Understanding that you already have a rule that is in place requires a deeper understanding of what the intention was, perhaps your table should not be applying such generic and deep specificity. What you can do in this case is write a rule that is more specific sch as

---

---

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis

**This is bold text**

**This is bold text**

_This is italic text_

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1) You can use sequential numbers...
1) ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function(bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |
