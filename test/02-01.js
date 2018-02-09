/* global describe, it */

const solve = require('../2017/02-01.js')

const chai = require('chai')
const should = chai.should()

describe('02-01 exapmles', () => {
  it(`
5 1 9 5
7 5 3   -> 18
2 4 6 8
  `, () => {
    solve(`
5 1 9 5
7 5 3
2 4 6 8
    `).should.equal(18)
  })
})
