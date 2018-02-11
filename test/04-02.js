/* global describe, it */

const solve = require('../2017/04-02.js')

const chai = require('chai')
const should = chai.should()

const example = {
  'abcde fghij': 1,
  'abcde xyz ecdab': 0,
  'a ab abc abd abf abj': 1,
  'iiii oiii ooii oooi oooo': 1,
  'oiii ioii iioi iiio': 0
}

describe('04-02 exapmles', () => {
  Object.keys(example).forEach(key => {
    it(`${key} -> ${example[key]}`, () => {
      solve(key).should.equal(example[key])
    })
  })
})
