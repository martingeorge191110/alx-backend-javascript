const assert = require('assert');
const calculateNumber = require('./1-calcul')

describe('sum two numbers', function () {
  it('should return 10', function () {
    assert.strictEqual(calculateNumber('SUM', 5.4, 5), 10);
  });
  it('should return 8', function () {
    assert.strictEqual(calculateNumber('SUM', 4, 4.4), 8);
  });
  it('should return -6', function () {
    assert.strictEqual(calculateNumber('SUM', -4.2, -2.2), -6);
  });
  it('should return 0', function () {
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.4), 0);
  });
});

describe('subtract two numbers', function () {
  it('should return 0', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 5), 0);
  });
  it('should return 1', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 4.2), 1);
  });
  it('should return -2', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', -4.2, -2.2), -2);
  });
});

describe('divide two numbers', function () {
  it('should return Error', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 5.4, 0), 'Error');
  });
  it('should return 5', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 10.2, 2.4), 5);
  });
  it('should return 2', function () {
    assert.strictEqual(calculateNumber('DIVIDE', -4.2, -2.2), 2);
  });
});
