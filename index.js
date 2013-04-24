
var through = require('through')


module.exports = function (comp) {
  var a = []
  return through(function (data) {
    a.push(data)
  }, function () {
    a.sort(comp).forEach(this.queue)
    this.queue(null)
  })
}
