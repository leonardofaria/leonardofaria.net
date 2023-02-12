---
id: 9999
title: Sample
publishedAt: 2022-02-07 01:00:00
type: Post
ogImage: /images/og-images/9999.png
permalink: /sample
description: Sample page for styling purposes
---

<p className="!mb-16">Short thing 1.<br/>Short thing 2.</p>

<div className="full-width"><img alt="Portfolio" src="/images/portfolio.jpg" /></div>

<div className="my-10 p-4 border border-charade-6 rounded-md bg-white">
Custom div
</div>

## Headings

The following <a href="/" className="text-red-500">HTML</a> `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the [lowest](/).

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use *Markdown syntax* within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec, but Hugo supports supports them out-of-the-box.

| Branch  | Commit           |
| ------- | ---------------- |
| main    | 0123456789abcdef |
| staging | fedcba9876543210 |

#### Inline Markdown within tables

| Inline&nbsp;&nbsp;&nbsp;     | Markdown&nbsp;&nbsp;&nbsp;  | In&nbsp;&nbsp;&nbsp;                | Table      |
| ---------- | --------- | ----------------- | ---------- |
| *italics*  | **bold**  | ~~strikethrough~~&nbsp;&nbsp;&nbsp; | `code`     |

## Code Blocks

#### Code block with backticks

##### Example 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```
##### Example 2

```html title="example.html" showLineNumbers {3-6}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## List Types

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* List item
* Another item
* And another item

#### Nested list

* Item
  1. First Sub-item
  2. Second Sub-item

#### HTML list without marker

<ol className="list-none">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

## Other Elements — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Sandpack

<Playground files={
{
    '/App.tsx': `export default function App() { 
  return (
    <>
      <h1>VANCOUVER</h1>
      <h2>CANADA</h2>
    </>
  );
};`,

    '/styles.css': `
h1 {
  background: #000;
  color: #fff;
  mix-blend-mode: multiply;
  
  padding: 2%;
}

h2 {
  background: #fff;
  color: #000;
  mix-blend-mode: color-dodge;
  
  padding: 2%;
}

body {
  background: url('https://images.unsplash.com/photo-1541369866856-c4f5aa6f5807?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dmFuY291dmVyfGVufDB8fDB8&auto=format&fit=crop&w=900&q=60') center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  font-family: sans-serif;
  height: 100vh;
}
`,
  }
} />

## Video

### YouTube 

<Embed type="YouTube" id="r0ji8FDNTj0" />

### Twitter

<Embed type="Twitter" id='1598707678788059142' />

## Image

![Chart](/wp-content/uploads/2022/04/emergenetics-explorer-chart.png)

## Video

<video className="h-auto" controls autoPlay="autoPlay">
  <source src="/wp-content/uploads/2020/05/nvm.mp4" type="video/mp4" />
</video>
