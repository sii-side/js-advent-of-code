/* global describe, it */

const solve = require('../2017/02-02.js')

const chai = require('chai')
const should = chai.should()

describe('02-02 exapmles', () => {
  it(`
5 9 2 8
9 4 7 3 -> 9
3 8 6 5
  `, () => {
    solve(`
5 9 2 8
9 4 7 3
3 8 6 5
    `).should.equal(9)
  })
})
