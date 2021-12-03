
const memo = (fn: (args: any) => any) => {
  const cache: any = {}
  return (n: keyof object) => n in cache ? cache[n] : cache[n] = fn(n)
}

export const factorial = (n: number): number => {
  console.log('Calulating factorial. step ' + n)
  return (n === 0 || n === 1) ? 1 : n * factorial(n - 1)
}

export const memoizedFactorial = memo((n: number): number => {
  console.log('Calulating factorial. step ' + n)
  return (n === 0 || n === 1) ? 1 : n * factorial(n - 1)
})

