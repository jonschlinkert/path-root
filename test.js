'use strict';

require('mocha');
var assert = require('assert');
var pathRoot = require('./');

describe('path-root', function() {
  it('should export a function', function() {
    assert.equal(typeof pathRoot, 'function');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      pathRoot();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected a string');
      cb();
    }
  });

  it('should return the root of a file path', function() {
    assert.equal(pathRoot('\\\\server\\share\\abc'), '\\\\server\\share\\');
    assert.equal(pathRoot('\\\\server foo\\some folder\\base-file.js'), '\\\\server foo\\some folder\\');
    assert.equal(pathRoot('\\\\?\\UNC\\server\\share'), '\\\\?\\UNC\\');
    assert.equal(pathRoot('foo/bar/baz.js'), '');
    assert.equal(pathRoot('c:\\foo\\bar\\baz.js'), 'c:\\');
    assert.equal(pathRoot('\\\\slslslsl\\admin$\\system32'), '\\\\slslslsl\\admin$\\');
    assert.equal(pathRoot('/foo/bar/baz.js'), '/');
  });
});
