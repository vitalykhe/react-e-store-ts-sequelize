import { Stack, LinkedList } from "../../utils/stackRealization";

const items = [1,2,3,4]

test('test if stack has only pop and push', () => {
  const stack = new Stack(new LinkedList(items))
  expect(stack.pop()).toBe("pop")
  expect(stack.push()).toBe("push")
})
