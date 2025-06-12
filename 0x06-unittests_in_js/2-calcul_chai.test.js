const { expect } = require('chai');
const calculateNumber = require('./1-calcul')

describe('sum two numbers', function () {
  it('should return 10', function () {
    expect(calculateNumber('SUM', 5.4, 5)).equals(10);
  });
  it('should return 8', function () {
    expect(calculateNumber('SUM', 4, 4.4)).equals(8);
  });
  it('should return -6', function () {
    expect(calculateNumber('SUM', -4.2, -2.2)).equals(-6);
  });
  it('should return 0', function () {
    expect(calculateNumber('SUM', 0.1, 0.4)).equals(0);
  });
});

describe('subtract two numbers', function () {
  it('should return 0', function () {
    expect(calculateNumber('SUBTRACT', 5.4, 5)).equals(0);
  });
  it('should return 1', function () {
    expect(calculateNumber('SUBTRACT', 5.4, 4.2)).equals(1);
  });
  it('should return -2', function () {
    expect(calculateNumber('SUBTRACT', -4.2, -2.2)).equals(-2);
  });
});

describe('divide two numbers', function () {
  it('should return Error', function () {
    expect(calculateNumber('DIVIDE', 5.4, 0)).equals('Error');
  });
  it('should return 5', function () {
    expect(calculateNumber('DIVIDE', 10.2, 2.4)).equals(5);
  });
  it('should return 2', function () {
    expect(calculateNumber('DIVIDE', -4.2, -2.2)).equals(2);
  });
});
