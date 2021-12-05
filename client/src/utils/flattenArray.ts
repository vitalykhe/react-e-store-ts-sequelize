/*
снимаем последний элемент из arr
если элемент - массив, то конкатенируем его обратно в исходный массив, 
если элемент  - не массив, то кладем его в res 
res будет в обратном порядке, нужно делать reverse
*/

export const flattenArrayStack = <T>(arr: Array<T>) => {
  let res = []
  while(arr.length) {
    let el  = arr.pop()
    if(Array.isArray(el)) {
      arr = arr.concat(el)
    } else {
      res.push(el)
    }
  }
  return res.reverse()
}

/* через рекурсию

*/
