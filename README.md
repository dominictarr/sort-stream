# sort-stream

like `Array.sort` but a stream.

``` js
var sort = require('sort-stream')

input.pipe(sort(function (a, b) {
  //comparator function, return 1, 0, or -1
  //just like Array.sort
})).pipe(output)
```

## License

MIT
