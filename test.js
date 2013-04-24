

var sort = require('./')

var ss = sort(function (a, b) {
  return a - b
})

ss.on('data', console.log)

var l = 100
while(l--)
  ss.write(Math.random())

ss.end()


