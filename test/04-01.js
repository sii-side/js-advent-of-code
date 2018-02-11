/* global describe, it */

const solve = require('../2017/04-01.js')

const chai = require('chai')
const should = chai.should()

const example = {
  'aa bb cc dd ee': 1,
  'aa bb cc dd aa': 0,
  'aa bb cc dd aaa': 1
}

describe('04-01 exapmles', () => {
  Object.keys(example).forEach(key => {
    it(`${key} -> ${example[key]}`, () => {
      solve(key).should.equal(example[key])
    })
  })
})
