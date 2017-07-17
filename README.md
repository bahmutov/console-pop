# console-pop

Easy way to capture `console.log` output, for example
for unit testing

[![NPM][console-pop-icon] ][console-pop-url]

[![Build status][console-pop-ci-image] ][console-pop-ci-url]

## Example

```js
var con = require('console-pop');
con.push();
// call other code that uses console.log
// a copy of the output is stored in con object
var str = con.pop()
// original console.log is restored
assert(/success/i.test(str), 'program reports success')
```

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/console-pop/issues) on Github

[console-pop-icon]: https://nodei.co/npm/console-pop.svg?downloads=true
[console-pop-url]: https://npmjs.org/package/console-pop
[console-pop-ci-image]: https://travis-ci.org/bahmutov/console-pop.svg?branch=master
[console-pop-ci-url]: https://travis-ci.org/bahmutov/console-pop
