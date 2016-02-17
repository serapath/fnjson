# fnjson
stringify objects containing functions

## example
```js
var fnjson = require('fnjson')
console.log(JSON.parse(stringify({
  a: function () { return 5 }
})))
```
