import { Exercises2 as Exercises } from '../'

describe('Testing second list of exercises', () => {
    test('First exercise', () => {
        expect(Exercises.Exercise1(null, [1])).toBeNull()
        expect(Exercises.Exercise1(undefined, undefined)).toBeNull()
        expect(Exercises.Exercise1([], undefined)).toBeNull()
        expect(Exercises.Exercise1([1,2], [1,2])).toStrictEqual([0,0])
        expect(Exercises.Exercise1([16,61], [64,1])).toStrictEqual([-48,60])
    })

    test('Second exercise', () => {
        expect(Exercises.Exercise2(null)).toBeNull()
        expect(Exercises.Exercise2(undefined)).toBeNull()
        expect(Exercises.Exercise2([1,2,3,4])).toStrictEqual({direct:[1,2,3,4],inverse:[4,3,2,1]})
    })

    test('Third exercise', () => {
        expect(Exercises.Exercise3(null, 0)).toBeNull()
        expect(Exercises.Exercise3(undefined, null)).toBeNull()
        expect(Exercises.Exercise3([1,2,3], null)).toBe('Número inexistente')
        expect(Exercises.Exercise3([1,2,3], 1)).toBe('O número existe no array')
    })
    
    test('Fourth exercise', () => {
        expect(Exercises.Exercise4(undefined, undefined)).toBeNull()
        expect(Exercises.Exercise4(null, null)).toBeNull()
        expect(Exercises.Exercise4([1,2], [1,2])).toBe('São iguais')
        expect(Exercises.Exercise4([1,2], [2,1])).toBe('São diferentes')
    })

    test('Fifth exercise', () => {
      expect(Exercises.Exercise5(null)).toBeNull()
      expect(Exercises.Exercise5(undefined)).toBeNull()
      expect(Exercises.Exercise5([2,4,6])).toBe('abaixo da média:1 na média:1 acima da média:1')
      expect(Exercises.Exercise5([5.99,25.05,100])).toBe('abaixo da média:2 na média:0 acima da média:1')
    })

    test('sixth', () => {
        expect(Exercises.Exercise6(null, null)).toBeNull()
        expect(Exercises.Exercise6(undefined, undefined)).toBeNull()
        expect(Exercises.Exercise6([1,2,3], [5,10,15])).toStrictEqual([16,12,8])
        expect(Exercises.Exercise6([4,3,2], [1,2,3])).toStrictEqual([5,5,5])
        expect(Exercises.Exercise6([4,null,1], [1,null,3])).toStrictEqual([4,5])
    })
})