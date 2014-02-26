'use strict';

var buffered = {
  log: []
};

var _log;

var stack = {
  push: function (options) {
    options = options || {};
    options.silent = options.silent || options.quiet;

    _log = console.log;
    buffered.log = [];

    console.log = function () {
      var args = [].slice.call(arguments);
      var msg = args.join('');
      buffered.log.push(msg);
      if (!options.silent) {
        _log.apply(null, args);
      }
    };
  },
  pop: function () {
    var str = buffered.log.join('\n');
    console.log = _log;
    return str;
  }
};

module.exports = stack;
