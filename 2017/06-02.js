module.exports = solve

function solve (input) {
  const memory = new Memory(input)
  return memory.reallocate()
}

class Memory {
  constructor (input) {
    this.banks = new Banks(input.split(/[\t\s]/))
    this.history = new History()
  }

  reallocate () {
    this.redistribute()

    const historyIndex = this.history.indexOf(this.banks)
    this.history.add(this.banks)

    if (historyIndex !== -1) {
      return {
        banks: this.banks.numbers(),
        step: this.history.count() - historyIndex - 1
      }
    } else {
      return this.reallocate()
    }
  }

  redistribute () {
    const largestBank = this.banks.largest()
    const fromBank = this.banks.next(largestBank)
    const blockNum = largestBank.blocks()

    largestBank.empty()
    this.banks.distribute(fromBank, blockNum)
  }
}

class History {
  constructor () {
    this.all = []
  }

  count () {
    return this.all.length
  }

  add (banks) {
    this.all.push(banks.numbers())
  }

  indexOf (banks) {
    const numbers = banks.numbers()
    return this.all.findIndex(history => JSON.stringify(history) === JSON.stringify(numbers))
  }
}

class Banks {
  constructor (blockNums) {
    this.all = blockNums.map((blockNum, index) => new Bank(blockNum - 0, index))
  }

  bank (index) {
    return this.all[index]
  }

  numbers () {
    return this.all.map(bank => bank.blocks())
  }

  largest () {
    const numbers = this.numbers()
    const index = numbers.indexOf(Math.max(...numbers))
    return this.bank(index)
  }

  next (fromBank) {
    const index = fromBank.index()
    return index === this.all.length - 1 ? this.bank(0) : this.bank(index + 1)
  }

  distribute (targetBank, blockNum) {
    while (blockNum > 0) {
      targetBank.increment()
      blockNum--
      targetBank = this.next(targetBank)
    }
  }
}

class Bank {
  constructor (blockNum, index) {
    this.blockNum = blockNum
    this.bankIndex = index
  }

  blocks () {
    return this.blockNum
  }

  index () {
    return this.bankIndex
  }

  empty () {
    this.blockNum = 0
  }

  increment () {
    this.blockNum++
  }
}

// ----------------------------------------

const input = '0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11'

console.log(solve(input).step)
