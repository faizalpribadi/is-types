type-is [![Build Status](https://travis-ci.org/faizalpribadi/type-is.svg?branch=master)](https://travis-ci.org/faizalpribadi/type-is)
=======

install
=======

`$ npm install is-types --save`

usage
=====

```js
var type = require('type-is');
    
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
