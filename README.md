is-types [![Build Status](https://travis-ci.org/faizalpribadi/is-types.svg?branch=master)](https://travis-ci.org/faizalpribadi/is-types)
=======

install
=======

`$ npm install is-types --save`

usage
=====

```js
var type = require('is-types');
    
console.log(type.is('string'));
`[object String]`

console.log(type.is(100));
`[object Number]`

console.log(type.is(true));
`[object Boolean]`

var fn;
console.log(type.is(fn));
`[object Undefined]`
```
