module.exports = solve

function solve (input) {
  const loopIndex = getLoopIndex(input)
  const crossNumbers = getCrossNumbers(loopIndex)

  const longSide = loopIndex
  const shortSide = Math.min(...crossNumbers.map(crossNumber => Math.abs(crossNumber - input)))

  return longSide + shortSide
}

// 1つの周の一番大きな数が、奇数の2乗であることを利用して、
// 入力された数値が「何周目」にあるかを取得
function getLoopIndex (input) {
  let i = 0
  while (Math.pow(1 + i * 2, 2) < input) {
    i++
  }
  return i
}

// ある周の、1から上下左右の直線方向にある数字を取得
function getCrossNumbers (loopIndex) {
  const n = loopIndex + 1
  return [
    // 右方向：一般項 4n^2 - 11n + 8
    4 * n * n - 11 * n + 8,
    // 上方向：一般項 4n^2 - 9n + 6
    4 * n * n - 9 * n + 6,
    // 左方向：一般項 4n^2 - 7n + 4
    4 * n * n - 7 * n + 4,
    // 下方向：一般項 4n^2 - 5n + 2
    4 * n * n - 5 * n + 2
  ]
}

// ----------------------------------------

const input = '325489'

console.log(solve(input))
