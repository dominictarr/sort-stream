# sort-stream

like `Array.sort` but a stream.

``` js
var sort = require('sort-stream')

input.pipe(sort(function (a, b) {
  //comparator function, return 1, 0, or -1
  //just like Array.sort
})).pipe(output)
```

see also: [sort-stream2](https://github.com/jed/sort-stream2)
(samething, but with streams2)

## License

MIT
