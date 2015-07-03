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

    console.log(type.is(100));

    console.log(type.is(true));

    var fn;

    console.log(type.is(fn));
```
