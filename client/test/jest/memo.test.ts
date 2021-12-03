import { memoizedFactorial, factorial } from '../../src/utils/memoized'

const arr = [0, 1, 3, 4]
const expected = [1,1,6,24]

arr.forEach((el, index) => {
  test('factorial', () => {
    expect(memoizedFactorial(el)).toBe(expected[index])
  })
})

