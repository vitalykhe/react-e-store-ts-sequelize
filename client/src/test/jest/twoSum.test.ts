import { twoSum } from "../../utils/twoSum";

const arr = [1,2,3,4,5,6]
const res = [[3,4],[2,5],[1,6]]
const sum = 7

test('twoSUm', () => {
  expect(twoSum(arr, sum)).toStrictEqual(res)
})
