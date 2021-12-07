/*!!! WARNING!!! 
this was a bad idea. Shoud have not used recursion
as this affects performace drastically
*/

export const foo = (arr: number[]): void => {
  if (arr.length === 0) return
  console.log(arr.pop())
  setTimeout(() => {
    foo(arr)
  }, 1000)
}
