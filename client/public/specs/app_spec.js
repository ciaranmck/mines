var assert = require('assert');
var Mines = require('../app.js');

describe('app', function () {
  var minesweeper;

  beforeEach(function () {
    minesweeper = new Mines();
  });

  it('should be empty at start', function () {
    assert.strictEqual(0, minesweeper.volume);
  });