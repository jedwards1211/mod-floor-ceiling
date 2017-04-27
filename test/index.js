// @flow

var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect

var modFloor = require('../lib').modFloor,
  modCeiling = require('../lib').modCeiling,
  modLower = require('../lib').modLower,
  modHigher = require('../lib').modHigher

describe('modFloor', function () {
  it('works for simple case', function () {
    expect(modFloor(5, 5)).to.equal(5)
    expect(modFloor(6, 5)).to.equal(5)
    expect(modFloor(11, 5)).to.equal(10)
    expect(modFloor(11, 2.5)).to.equal(10)
    expect(modFloor(11, 3.5)).to.equal(10.5)
  })
  it('works with anchor', function () {
    expect(modFloor(5, 5, -1)).to.equal(4)
    expect(modFloor(5, 5, 1)).to.equal(1)
    expect(modFloor(6, 5, 1)).to.equal(6)
    expect(modFloor(6, 5, -1)).to.equal(4)
    expect(modFloor(11, 5)).to.equal(10)
    expect(modFloor(11, 5, 2)).to.equal(7)
    expect(modFloor(11, 5, -2)).to.equal(8)
  })
  it('works with negative numbers', function () {
    expect(modFloor(-5, 5, -1)).to.equal(-6)
    expect(modFloor(-5, 5, 1)).to.equal(-9)
    expect(modFloor(-6, 5, 1)).to.equal(-9)
    expect(modFloor(-6, 5, -1)).to.equal(-6)
    expect(modFloor(-11, 5)).to.equal(-15)
    expect(modFloor(-11, 5, 2)).to.equal(-13)
    expect(modFloor(-11, 5, -2)).to.equal(-12)
  })
})
describe('modLower', function () {
  it('works for simple case', function () {
    expect(modLower(5, 5)).to.equal(0)
    expect(modLower(6, 5)).to.equal(5)
    expect(modLower(11, 5)).to.equal(10)
    expect(modLower(11, 2.5)).to.equal(10)
    expect(modLower(11, 3.5)).to.equal(10.5)
  })
  it('works with anchor', function () {
    expect(modLower(5, 5, -1)).to.equal(4)
    expect(modLower(5, 5, 1)).to.equal(1)
    expect(modLower(6, 5, 1)).to.equal(1)
    expect(modLower(6, 5, -1)).to.equal(4)
    expect(modLower(11, 5)).to.equal(10)
    expect(modLower(11, 5, 2)).to.equal(7)
    expect(modLower(11, 5, -2)).to.equal(8)
  })
  it('works with negative numbers', function () {
    expect(modLower(-5, 5, -1)).to.equal(-6)
    expect(modLower(-5, 5, 1)).to.equal(-9)
    expect(modLower(-6, 5, 1)).to.equal(-9)
    expect(modLower(-6, 5, -1)).to.equal(-11)
    expect(modLower(-11, 5)).to.equal(-15)
    expect(modLower(-11, 5, 2)).to.equal(-13)
    expect(modLower(-11, 5, -2)).to.equal(-12)
  })
})
describe('modCeiling', function () {
  it('works for simple case', function () {
    expect(modCeiling(5, 5)).to.equal(5)
    expect(modCeiling(6, 5)).to.equal(10)
    expect(modCeiling(11, 5)).to.equal(15)
    expect(modCeiling(11, 2.5)).to.equal(12.5)
    expect(modCeiling(11, 3.5)).to.equal(14)
  })
  it('works with anchor', function () {
    expect(modCeiling(5, 5, -1)).to.equal(9)
    expect(modCeiling(5, 5, 1)).to.equal(6)
    expect(modCeiling(6, 5, 1)).to.equal(6)
    expect(modCeiling(6, 5, -1)).to.equal(9)
    expect(modCeiling(11, 5, 2)).to.equal(12)
    expect(modCeiling(11, 5, -2)).to.equal(13)
  })
  it('works with negative numbers', function () {
    expect(modCeiling(-5, 5, -1)).to.equal(-1)
    expect(modCeiling(-5, 5, 1)).to.equal(-4)
    expect(modCeiling(-6, 5, 1)).to.equal(-4)
    expect(modCeiling(-6, 5, -1)).to.equal(-6)
    expect(modCeiling(-11, 5)).to.equal(-10)
    expect(modCeiling(-11, 5, 2)).to.equal(-8)
    expect(modCeiling(-11, 5, -2)).to.equal(-7)
  })
})
describe('modHigher', function () {
  it('works for simple case', function () {
    expect(modHigher(5, 5)).to.equal(10)
    expect(modHigher(6, 5)).to.equal(10)
    expect(modHigher(11, 5)).to.equal(15)
    expect(modHigher(11, 2.5)).to.equal(12.5)
    expect(modHigher(11, 3.5)).to.equal(14)
  })
  it('works with anchor', function () {
    expect(modHigher(5, 5, -1)).to.equal(9)
    expect(modHigher(5, 5, 1)).to.equal(6)
    expect(modHigher(6, 5, 1)).to.equal(11)
    expect(modHigher(6, 5, -1)).to.equal(9)
    expect(modHigher(11, 5, 2)).to.equal(12)
    expect(modHigher(11, 5, -2)).to.equal(13)
  })
  it('works with negative numbers', function () {
    expect(modHigher(-5, 5, -1)).to.equal(-1)
    expect(modHigher(-5, 5, 1)).to.equal(-4)
    expect(modHigher(-6, 5, 1)).to.equal(-4)
    expect(modHigher(-6, 5, -1)).to.equal(-1)
    expect(modHigher(-11, 5)).to.equal(-10)
    expect(modHigher(-11, 5, 2)).to.equal(-8)
    expect(modHigher(-11, 5, -2)).to.equal(-7)
  })
})

