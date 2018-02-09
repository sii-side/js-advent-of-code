/* global describe, it */

const solve = require('../2017/01-01.js')

const chai = require('chai')
const should = chai.should()

describe('01-01 exapmles', () => {
  it('1122 -> 3', () => {
    solve('1122').should.equal(3)
  })

  it('1111 -> 4', () => {
    solve('1111').should.equal(4)
  })

  it('1234 -> 0', () => {
    solve('1234').should.equal(0)
  })

  it('91212129 -> 9', () => {
    solve('91212129').should.equal(9)
  })
})
