var stringify = require('./stringify')
var parse = require('./parse')
module.exports = clone
function clone (obj, date2obj) {
  return parse(stringify(obj), date2obj)
}
