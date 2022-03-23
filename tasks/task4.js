// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
  if (n < 0) {
    return 'Error'
  }
  return s.repeat(n)
}

module.exports = repeatStr




