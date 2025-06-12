const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('sum two numbers', function () {
  it('should return 10', function () {
    assert.strictEqual(calculateNumber(5.4, 5), 10);
  });
  it('should return 8', function () {
    assert.strictEqual(calculateNumber(4, 4.4), 8);
  });
  it('should return -6', function () {
    assert.strictEqual(calculateNumber(-4.2, -2.2), -6);
  });
  it('should return 0', function () {
    assert.strictEqual(calculateNumber(0.1, 0.4), 0);
  });
});
