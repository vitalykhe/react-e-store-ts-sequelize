export const  sortByKey = <T extends object>(arr: Array<T>, key: keyof T): Array<T> => {
  return arr.sort((a, b) => {
    return a[key] === b[key] ? 0 : a[key] > b[key] ? 1: -1
  })
}

