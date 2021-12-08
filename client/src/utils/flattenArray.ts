/*
снимаем последний элемент из arr
если элемент - массив, то конкатенируем его обратно в исходный массив, 
если элемент  - не массив, то кладем его в res 
res будет в обратном порядке, нужно делать reverse
*/

export const flattenArrayStack = <T>(arr: Array<T>) => {
  let res = []
  while(arr.length) {
    let temp = arr.pop()
    if(Array.isArray(temp)) {
      arr = arr.concat(temp)
    } else {
      res.push(temp)
    }
  }
  return res.reverse()
}

/* через рекурсию
перебираем массив. Если элемент массив, то применяем к нему рекурсию 
и конкатенируем результат с результирующим массивом
минус этой рекурсии  - потребление памяти и ресурсов:
чем больше вложенность, тем больше экземпляров функции и переменных будет создано
*/

// export const flattenArrayRecursion = (arr: Array<any>) => {
//   let res:Array<any> = []
//   arr.forEach(el => {
//     if (Array.isArray(el)) {
//       res = res.concat(flattenArrayRecursion(el))
//     } else {
//       res.push(el)
//     }
//   })
//   return res
// }
