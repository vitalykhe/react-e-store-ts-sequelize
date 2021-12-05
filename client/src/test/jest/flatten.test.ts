import { flattenArrayStack } from "../../utils/flattenArray"
// import { flattenArrayRecursion } from '../../utils/flattenArray'

const input = [1, [2, [3, [4]]]]
const output = [1, 2, 3, 4]

test("flattenArrStack", () => {
  expect(flattenArrayStack(input)).toStrictEqual(output)
})

// test('flattenArrRecursion', () => {
//   expect(flattenArrayRecursion(input)).toStrictEqual(output)
// })
