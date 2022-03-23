const removeChar = require('../tasks/task3')

describe('remove first and last char',
  () => {
    const testCases = [
      {
        in: 'hello',
        out: 'ell'
      },
      {
        in: 'Body',
        out: 'od'
      },
      {
        in: '',
        out: ''
      },
      {
        in: 'something',
        out: 'omethin'

      },
    ]
    testCases.forEach(test => {
      it(
        `in: ${test.in} out: ${test.out}`,
        () => {
          expect(removeChar(test.in)).toBe(test.out)
        }
      )
    })

  })
