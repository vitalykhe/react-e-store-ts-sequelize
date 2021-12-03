export const arrayRemoveDuplicates = (arr: Array<string | number>) =>
  arr.filter((el, index) => {
    return arr.indexOf(el) === index
  }
  )
