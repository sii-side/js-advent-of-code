/* global describe, it */

const solve = require('../2017/01-02.js')

const chai = require('chai')
const should = chai.should()

const example = {
  1212: 6,
  1221: 0,
  123425: 4,
  123123: 12,
  12131415: 4
}

describe('01-02 exapmles', () => {
  Object.keys(example).forEach(key => {
    it(`${key} -> ${example[key]}`, () => {
      solve(key).should.equal(example[key])
    })
  })
})
