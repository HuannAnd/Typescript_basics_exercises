import * as Exercises from '../Exercises1'

describe('testing first list of exercises', () => {
  test('exercise 1A', () => {
    expect(Exercises.Exercise1A()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  
  test('exercise 1B', () => {
    expect(Exercises.Exercise1B()).toStrictEqual([10,9,8,7,6,5,4,3,2,1])
  })

  test('exercise 1C', () => {
    expect(Exercises.Exercise1C()).toStrictEqual([0,2,4,6,8,10])
  })

  test('exercise 2', () => {
    expect(Exercises.Exercise2()).toStrictEqual(5050)
  })

  test('exercise 3', () => {
    expect(Exercises.Exercise3()).toStrictEqual([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199])
  })

  test('Exercise 4',() => {
    expect(Exercises.Exercise4([1,1,undefined,null,1,1,1,1,1,1])).toStrictEqual(undefined)
  })

  test('Exercise 4 undefined array',() => {
    expect(Exercises.Exercise4(undefined)).toStrictEqual(undefined)
  })

  test('Exercise 13',() => {
    expect(Exercises.Exercise13([1,1,1,1,1,1,1,1,1,16])).toStrictEqual(16)
  })
})
