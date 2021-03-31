export * as Exercises1 from './Exercises1'
export * as Exercises2 from './Exercises2'
export * as Exercises3 from './Exercises3'
export * as Exam from './Exam'

export function removeUndefinedOrAnyValuesFromArray (arr: any, value?: any): any {
  arr = arr ?? null
  if (arr === null) return null
  arr = arr.map(x => x ?? undefined)

  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] === value || arr[index] === undefined) {
      arr.splice(index, 1)
    }
  }

  const validation = arr[0] === undefined ? null : arr
  return validation
}
