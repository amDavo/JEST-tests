function positiveSum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; ++i)
    if (arr[i] > 0) {
      sum += arr[i]
    } else sum
  return sum
}

module.exports = positiveSum

