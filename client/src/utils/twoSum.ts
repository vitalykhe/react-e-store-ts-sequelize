export const twoSum = (arr: number[], sum: number) => {
  const parts: Record<number, boolean> = {}
  let res: Array<Array<number>> = []
  arr.forEach(firstPart => {
    let secondPart = sum - firstPart
    if(parts[secondPart]) {
      res.push([secondPart, firstPart])
    }
    parts[firstPart] = true
  })
  return res
}
