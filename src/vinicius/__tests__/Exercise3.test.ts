import { Exercises3 as Exercises } from '../'

describe('Test third list of exercises', () => {
    test('First Exercise', () => {
        expect(Exercises.Exercise1(null,undefined)).toBeNull()
        expect(Exercises.Exercise1(undefined,null)).toBeNull()
        expect(Exercises.Exercise1([3,2,1],[1,2,3])).toStrictEqual({arrayA:[1,2,3],arrayB:[3,2,1]})
        expect(Exercises.Exercise1([10,20,30],[40,50,60])).toEqual({arrayA:[40,50,60],arrayB:[10,20,30]})
    })

    test('Second Exercise', () => {
        expect(Exercises.Exercise2(null)).toBeNull()
        expect(Exercises.Exercise2(undefined)).toBeNull()
        expect(Exercises.Exercise2([1,2,1])).toBe('há números repetidos')
        expect(Exercises.Exercise2([1,2,3,4])).toBe('não há números repetidos')
        expect(Exercises.Exercise2([16,null,undefined,16])).toBe('há números repetidos')
    })
    
    test('Third Exercise', () => {
        const test1: {sex:'male' | 'female', answer:'yes' | 'no'}[] = [
            {sex:'female', answer:'yes'}, 
            {sex:'female', answer:'no'}, 
            {sex:'male', answer:'yes'}, 
            {sex:'male', answer:'no'}
        ]
        
        const test2: {sex:'male' | 'female', answer:'yes' | 'no'}[] = [
            {sex:'female', answer:'yes'}, 
            {sex:'female', answer:'yes'}, 
            {sex:'female', answer:'yes'}, 
            {sex:'female', answer:'yes'}
        ]

        const test3: {sex:'male' | 'female', answer:'yes' | 'no'}[] = [
            {sex:'male', answer:'no'}, 
            {sex:'male', answer:'no'}, 
            {sex:'male', answer:'no'}, 
            {sex:'male', answer:'no'}
        ]
        
        expect(Exercises.Exercise3(test1)).toBe('Women that said yes: 50.00%, men that said no: 50.00%, users who said yes: 2, users who said no: 2')
        expect(Exercises.Exercise3(test2)).toBe('Women that said yes: 100.00%, men that said no: 0.00%, users who said yes: 4, users who said no: 0')
        expect(Exercises.Exercise3(test3)).toBe('Women that said yes: 0.00%, men that said no: 100.00%, users who said yes: 0, users who said no: 4')
        expect(Exercises.Exercise3(null)).toBeNull()
        expect(Exercises.Exercise3(undefined)).toBeNull()
    })
})