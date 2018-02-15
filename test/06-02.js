/* global describe, it */

const solve = require('../2017/06-02.js')

const chai = require('chai')
const should = chai.should()

describe('06-02 exapmles', () => {
  it('0 2 7 0 -> 2 4 1 2 (4 cycles between same patterns)', () => {
    solve('0 2 7 0').should.deep.equal({
      banks: [2, 4, 1, 2],
      step: 4
    })
  })
})
