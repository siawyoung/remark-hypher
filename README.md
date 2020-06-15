# remark-hypher

A remark plugin that implements [hyphenation](http://clagnut.com/blog/2395) using Hypher.

## Getting Started

```sh
npm i --save remark-hypher
```

```javascript
import remark from 'remark'
import remarkHypher from 'remark-hypher'

const content = remark().use(remarkHypher).processSync('Very long sentence.')

console.log(String(content)) // "Very long sen­tence"
```

## Options

`remark-hypher` takes all of the [options](https://github.com/bramstein/hypher#nodejs) exposed by Hypher itself, as well as 2 more options, `language` and `minLength`.

```javascript
const content = remark().use(remarkHypher, {
  language: require('hyphenation.fr'),
  leftmin: 2,
  rightmin: 4,
  minLength: 5,
}).processSync('Very long sentence.')
```

The default language object used is `hyphenation.en-us`, which you can see the settings for [here](https://github.com/bramstein/hyphenation-patterns/blob/master/patterns/en-us.js).

`language` allows you to specify a custom language object. You may choose one from [hyphenation-patterns](https://github.com/bramstein/hyphenation-patterns), or supply your own.

`leftmin`, `rightmin`, `exceptions`, and `patterns`, if specified, will take precedence over the settings in the language object.

`minLength` has a default value of 4.

## Why?

Even though CSS has a `hyphens` rule, it lacks the ability to finetune the hyphenation behaviour, letting the browser decide how best to hyphenate. For most people, this default behaviour may be sufficient.

For those who desire more fine-grained hyphenation behaviour, specifically around being able to tweak settings on minimum hyphenation length, minimum hyphenation length before/after the line break, or adding exceptions, `hypher` allows one to do that.

There are [CSS proposals](https://www.w3.org/TR/css-text-4/#hyphenation) in the pipeline for specifying some of these, but until we get there, `hypher` will do the job nicely.

## Credits

Of course, most of the hard work is due to [Hypher](https://github.com/bramstein/hypher/).
