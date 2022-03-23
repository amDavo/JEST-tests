const opposite = require('../tasks/task2')

describe('opposite number',
  () => {
    const testCases = [
      {
        in: 10,
        out: -10
      },
      {
        in: 0,
        out: 0
      },
      {
        in: -100,
        out: 100
      },
      {
        in: 5,
        out: -5

      },
    ]
    testCases.forEach(test => {
      it(
        `in: ${test.in} out: ${test.out}`,
        () => {
          expect(opposite(test.in)).toBe(test.out)
        }
      )
    })

  })
