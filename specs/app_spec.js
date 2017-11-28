var assert = require('assert');
var app = require('../app.js');

describe('app', function () {
  var minesweeper;

  beforeEach(function () {
    minesweeper = new app();
  });

  it('should be empty at start', function () {
    assert.strictEqual(0, minesweeper.volume);
  });