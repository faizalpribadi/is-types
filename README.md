type-is
=======

install
=======

`$ npm install type-is --save`

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
