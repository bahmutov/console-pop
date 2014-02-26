/* globals describe, it, require, console */
'use strict';

var assert = require('assert');

describe('console-pop', function () {
  var stack = require('..');
  describe('exists', function () {
    it('should operate on console', function () {
      stack.push();
      console.log('working');
      var str = stack.pop();
      assert.equal('working', str, 'captured string');
    });

    it('can be used several times', function () {
      stack.push();
      console.log('one');
      var str = stack.pop();
      assert(/one/.test(str), 'has first string');

      stack.push();
      console.log('two');
      str = stack.pop();
      assert(!/one/.test(str), 'does not have first string');
      assert(/two/.test(str), 'has second string');
    });

    it('can hide output', function () {
      var _log = console.log;
      console.log = function () {
        console.log = _log;
        assert(false, 'called console.log!');
      };

      stack.push({
        silent: true
      });
      console.log('one');
      var str = stack.pop();
      console.log = _log;

      assert(/one/.test(str), 'console.log not called');
    });
  });
});
