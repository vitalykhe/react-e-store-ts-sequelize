import { flattenArrayStack } from '../../utils/flattenArray'

const input = [1,[2,[3,[4]]]]
const output = [1,2,3,4]

test('flattenArrStack', () => {
  expect(flattenArrayStack(input)).toStrictEqual(output)
})
