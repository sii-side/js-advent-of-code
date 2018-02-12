/* global describe, it */

const solve = require('../2017/05-02.js')

const chai = require('chai')
const should = chai.should()

describe('05-02 exapmles', () => {
  it(`
0
3
0  -> 10
1
-3
  `, () => {
    solve(`
0
3
0
1
-3
    `).should.deep.equal({
      offsets: '2 3 2 3 -1'.split('\u0020').map(str => parseInt(str)),
      step: 10
    })
  })
})
