/* global describe, it */

const solve = require('../2017/06-01.js')

const chai = require('chai')
const should = chai.should()

describe('06-01 exapmles', () => {
  it('0 2 7 0 -> 2 4 1 2 (5 cycles)', () => {
    solve('0 2 7 0').should.deep.equal({
      banks: [2, 4, 1, 2],
      count: 5
    })
  })
})
