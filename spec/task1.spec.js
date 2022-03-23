const positiveSum = require('../tasks/task1')

describe('sum of positive integers',
  () => {
    const testCases = [
      {
        in: [1, -2, 3, 4, 5],
        out: 13
      },
      {
        in: [],
        out: 0
      },
      {
        in: [-1, -2, -3, -4, -5],
        out: 0
      },
      {
        in: [-1, 2, 3, 4, -5],
        out: 9

      },
    ]
    testCases.forEach(test => {
      it(
        `in: ${test.in} out: ${test.out}`,
        () => {
          expect(positiveSum(test.in)).toBe(test.out)
        }
      )
    })

  })
