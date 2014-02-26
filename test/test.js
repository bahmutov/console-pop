/* globals describe, it, require, console */
'use strict';

var assert = require('assert');

describe('console-pop', function() {
  var stack = require('..');
  describe('exists', function (){
    it('should operate on console', function() {
      stack.push();
      console.log('working');
      var str = stack.pop();
      assert.equal('working', str, 'captured string');
    });
  });
});
