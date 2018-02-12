/* global describe, it */

const solve = require('../2017/05-01.js')

const chai = require('chai')
const should = chai.should()

describe('05-01 exapmles', () => {
  it(`
0
3
0  -> 5
1
-3
  `, () => {
    solve(`
0
3
0
1
-3
    `).should.equal(5)
  })
})
