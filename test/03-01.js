/* global describe, it */

const solve = require('../2017/03-01.js')

const chai = require('chai')
const should = chai.should()

const example = {
  1: 0,
  12: 3,
  23: 2,
  1024: 31
}

describe('01-02 exapmles', () => {
  Object.keys(example).forEach(key => {
    it(`${key} -> ${example[key]}`, () => {
      solve(key).should.equal(example[key])
    })
  })
})
