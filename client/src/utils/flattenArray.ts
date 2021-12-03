export const flattenArrayStack = <T>(arr: Array<T>) => {
  let res = []
  while(arr.length) {
    let el  = arr.pop()
    if(Array.isArray(el)) {
      arr.concat(el)
    } else {
      res.push(el)
    }
  }
  return res.reverse()
}

/*
снимаем последний элемент из arr
если элемент - массив, то конкатенируем его обратно в исходный массив, если нет
то кладем в res 
res будет в обратном порядке
*/
