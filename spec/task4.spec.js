const repeatStr = require('../tasks/task4.js')

describe('checking amounts of repeat',
  () => {
    const testCases = [
      {
        n: 3,
        s: '*',
        out: '***'
      },
      {
        n: 5,
        s: '#',
        out: '#####'
      },
      {
        n: 2,
        s: 'ha ',
        out: 'ha ha '
      },
      {
        n: 3,
        s: '',
        out: ''
      },
      {
        n: 0,
        s: '*',
        out: ''
      },
      {
        n: -1,
        s: '*',
        out: 'Error'
      },
    ]
    testCases.forEach(test => {
      it(
        `in: ${test.n},${test.s} out: ${test.out}`,
        () => {
          expect(repeatStr(test.n, test.s)).toBe(test.out)
        }
      )
    })

  })
