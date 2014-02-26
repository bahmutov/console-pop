# console-pop

Easy way to capture `console.log` output, for example
for unit testing

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
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/console-pop/issues) on Github
