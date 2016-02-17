# fnjson
stringify objects containing functions

## example
```js
var fnjson = require('fnjson')
var stringify = fnjson.stringify
var parse = fnjson.parse
var clone = fnjson.clone

console.log(JSON.parse(stringify({
  a: function () { return 5 }
})))

//// or to e.g. minimize browserify bundle size

var parse = require('fnjson/lib/parse')
var clone = require('fnjson/lib/clone')
var stringify = require('fnjson/lib/stringify')

```
