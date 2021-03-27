import * as Exercises from '../Exercises1'

describe('testing first list of exercises', () => {
  test('exercise 1A', () => {
    expect(Exercises.Exercise1A()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  
  test('exercise 1B', () => {
    expect(Exercises.Exercise1B()).toEqual([10,9,8,7,6,5,4,3,2,1])
  })

  test('exercise 1C', () => {
    expect(Exercises.Exercise1C()).toEqual([0,2,4,6,8,10])
  })

  test('exercise 2', () => {
    expect(Exercises.Exercise2()).toBe(5050)
  })

  test('exercise 3', () => {
    expect(Exercises.Exercise3()).toEqual([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,127,129,131,133,135,137,139,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,173,175,177,179,181,183,185,187,189,191,193,195,197,199])
  })

  test('Exercise 4',() => {
    expect(Exercises.Exercise4(null)).toBeUndefined()
    expect(Exercises.Exercise4(undefined)).toBeUndefined()
    expect(Exercises.Exercise4([1,1,1,1,1,1,1,1,1,1])).toBe(10)
    expect(Exercises.Exercise4([1,1,0,null,1,1,1,1,1,1])).toBe(8)
    expect(Exercises.Exercise4([1,1,undefined,null,1,1,1,1,1,1])).toBe(8)
  })

  test('Exercise 5',() => {
    expect(Exercises.Exercise5(null)).toBeUndefined()
    expect(Exercises.Exercise5(undefined)).toBeUndefined()
    expect(Exercises.Exercise5([1,1,1,1,1,1,1,1,1,1])).toBe(0)
    expect(Exercises.Exercise5([1,1,0,null,1,1,1,1,1,1])).toBe(0)
    expect(Exercises.Exercise5([1,1,undefined,null,1,1,1,1,1,1])).toBe(0)
  })

  //ToDo: test exercise 6
  test('Exercise 6', () => {
    expect(Exercises.Exercise6('senha errada',['Vinicius'],[0])).toBe('senha inválida')
    expect(Exercises.Exercise6('Pa$$w0rd',['Huann','Vinicius'],[1,10]))
      .toBe('O vencedor é Vinicius com 10 voto(s)')
    expect(Exercises.Exercise6('Pa$$w0rd',['Huann','Lucas','Vinicius'],[16,4,0]))
      .toBe('O vencedor é Huann com 16 voto(s)')
    expect(Exercises.Exercise6('Pa$$w0rd',['Vinicius','Miguel'],[2,2]))
      .toBe('Segundo turno entre: Vinicius, Miguel')
  })

  test('Exercise 7',() => {
    expect(Exercises.Exercise7(1,1,undefined)).toBe(0)
    expect(Exercises.Exercise7(1,1,1)).toBe(28)
    expect(Exercises.Exercise7(1,1,null)).toBe(0)
    expect(Exercises.Exercise7(undefined,1.20,50.50)).toBe(0)
  })

  test('Exercise 8', () => {
    expect(Exercises.Exercise8(undefined, undefined)).toBe('não é múltiplo')
    expect(Exercises.Exercise8(6, 3)).toBe('é múltiplo')
    expect(Exercises.Exercise8(null, null)).toBe('não é múltiplo')
    expect(Exercises.Exercise8(2, 4)).toBe('não é múltiplo')
    expect(Exercises.Exercise8(1, 1)).toBe('é múltiplo')
  })

  test('Exercise 9', () => {
    expect(Exercises.Exercise9(6, 2, 2)).toBe('é maior que a soma')
    expect(Exercises.Exercise9(6, 2, 4)).toBe('é menor que a soma')
    expect(Exercises.Exercise9(6, 2, undefined)).toBe('é maior que a soma')
    expect(Exercises.Exercise9(null, 2, 4)).toBe('é menor que a soma')
  })

  test('Exercise 10', () => {
    expect(Exercises.Exercise10(6, 2)).toBe('A é maior que B')
    expect(Exercises.Exercise10(2, 4)).toBe('B é maior que A')
    expect(Exercises.Exercise10(2, undefined)).toBe('A é maior que B')
    expect(Exercises.Exercise10(null, 2)).toBe('B é maior que A')
    expect(Exercises.Exercise10(null, undefined)).toBe('A = B')
  })

  test('Exercise 11', () => {
    expect(Exercises.Exercise11(null, null)).toBe('DIVISÃO POR ZERO')
    expect(Exercises.Exercise11(null, undefined)).toBe('DIVISÃO POR ZERO')
    expect(Exercises.Exercise11(0, null)).toBe('DIVISÃO POR ZERO')
    expect(Exercises.Exercise11(6, 3)).toBe('2')
  })

  test('Exercise 12', () => {
    expect(Exercises.Exercise12(undefined,undefined,undefined,undefined)).toBe(0)
    expect(Exercises.Exercise12(2,undefined,null,undefined)).toBe(2)
    expect(Exercises.Exercise12(3,undefined,1,undefined)).toBe(0)
    expect(Exercises.Exercise12(3,4,1,0)).toBe(4)
  })
  
  test('Exercise 13', () => {
    expect(Exercises.Exercise13(undefined)).toBeNull()
    expect(Exercises.Exercise13(null)).toBeNull()
    expect(Exercises.Exercise13([1,2,2,2,12,3])).toBe(12)
    expect(Exercises.Exercise13([null, null])).toBe(0)
    expect(Exercises.Exercise13([undefined, undefined])).toBe(0)
    expect(Exercises.Exercise13([1,56,3,46])).toBe(56)
  })

  test('Exercise 14', () => {
    expect(Exercises.Exercise14(undefined,null,2)).toBe('0 0 2')
    expect(Exercises.Exercise14(undefined,null,undefined)).toBe('0 0 0')
    expect(Exercises.Exercise14(1,2,3)).toBe('1 2 3')
    expect(Exercises.Exercise14(1,3,2)).toBe('1 2 3')
    expect(Exercises.Exercise14(2,3,1)).toBe('1 2 3')
    expect(Exercises.Exercise14(2,1,3)).toBe('1 2 3')
    expect(Exercises.Exercise14(3,2,1)).toBe('1 2 3')
    expect(Exercises.Exercise14(3,1,2)).toBe('1 2 3')
  })

  test('Exercise 15', () => {
    expect(Exercises.Exercise15([undefined,null,undefined,null,undefined])).toBe('Array inválido')
    expect(Exercises.Exercise15(undefined)).toBe('Array inválido')
    expect(Exercises.Exercise15(null)).toBe('Array inválido')
    expect(Exercises.Exercise15([undefined, 3, 5])).toBe('Múltiplos de 3:1, Múltiplos de 5:1')
    expect(Exercises.Exercise15([undefined,null,5,25,55,500])).toBe('Múltiplos de 3:0, Múltiplos de 5:4')
  })

  test('Exercise 16', () => {
    expect(Exercises.Exercise16(125.50)).toBe('ISENTO de desconto')
    expect(Exercises.Exercise16(700)).toBe('20% desconto')
    expect(Exercises.Exercise16(1500)).toBe('25% desconto')
    expect(Exercises.Exercise16(2500)).toBe('30% desconto')
    expect(Exercises.Exercise16(undefined)).toBe('Valor inválido')
    expect(Exercises.Exercise16(null)).toBe('Valor inválido')
  })

  test('Exercise17', () => {
    expect(Exercises.Exercise17(2)).toEqual([2,4,6,8,10,12,14,16,18,20])
    expect(Exercises.Exercise17(3)).toEqual([3,6,9,12,15,18,21,24,27,30])
    expect(Exercises.Exercise17(4)).toEqual([4,8,12,16,20,24,28,32,36,40])
    expect(Exercises.Exercise17(5)).toEqual([5,10,15,20,25,30,35,40,45,50])
    expect(Exercises.Exercise17(6)).toEqual([6,12,18,24,30,36,42,48,54,60])
    expect(Exercises.Exercise17(7)).toEqual([7,14,21,28,35,42,49,56,63,70])
    expect(Exercises.Exercise17(8)).toEqual([8,16,24,32,40,48,56,64,72,80])
    expect(Exercises.Exercise17(9)).toEqual([9,18,27,36,45,54,63,72,81,90])
    expect(Exercises.Exercise17(10)).toEqual([10,20,30,40,50,60,70,80,90,100])
    expect(Exercises.Exercise17(null)).toBeNull()
    expect(Exercises.Exercise17(undefined)).toBeNull()
  })

  test('Exercise 18', () => {
    expect(Exercises.Exercise18(undefined)).toBeNull()
    expect(Exercises.Exercise18(null)).toBeNull()
    expect(Exercises.Exercise18(12)).toEqual(12)
    expect(Exercises.Exercise18(11)).toEqual(14.3)
    expect(Exercises.Exercise18(7)).toEqual(9.1)
  })
})
