export const  sortByKey = <T>(arr: Array<T>, key: keyof T): Array<T> => {
  return arr.sort((a, b) => {
    return a[key] === b[key] ? 0 : a[key] > b[key] ? 1: -1
  })
}

