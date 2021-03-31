import { Exam as Exercises } from '../'

describe('Testing Exam', () => {
    test('First exercise', () => {
        expect(Exercises.Exercise1(null, null, null)).toBe('0.00')
        expect(Exercises.Exercise1(undefined, undefined, undefined)).toBe('0.00')
        expect(Exercises.Exercise1(8, 10, 40)).toBe('326.67')
    })

    test('Second exercise', () => {
        expect(Exercises.Exercise2(null)).toBeNull()
        expect(Exercises.Exercise2(undefined)).toBeNull()
        expect(Exercises.Exercise2(['h','u','n','t','FINALIZAR'])).toBe('hunt')
        expect(Exercises.Exercise2(['FINALIZAR'])).toBe('')
    })

    test('Third exercise', () => {
        expect(Exercises.Exercise3(null)).toBeNull()
        expect(Exercises.Exercise3(undefined)).toBeNull()
        const test1: {name: string, maritalStatus: 'solteiro' | 'casado'}[] = [
            {name: 'JoãoV',maritalStatus: 'casado'}, 
            {name: 'Vinicius', maritalStatus: 'casado'},
            {name: 'Huann', maritalStatus: 'casado'}
        ]

        const test2: {name: string, maritalStatus: 'solteiro' | 'casado'}[] = [
            {name: 'Alone',maritalStatus: 'solteiro'}, 
            {name: 'Hunter', maritalStatus: 'solteiro'},
            {name: 'Dragon', maritalStatus: 'solteiro'}
        ]

        expect(Exercises.Exercise3(test1)).toEqual([])
        expect(Exercises.Exercise3(test2)).toEqual(['Alone','Hunter','Dragon'])
    })
    
    test('Fourth exercise', () => {
        expect(Exercises.Exercise4(undefined)).toBeNull()
        expect(Exercises.Exercise4(null)).toBeNull()
        expect(Exercises.Exercise4([2004,2005])).toStrictEqual(['Usuário menor de idade', 'Usuário menor de idade'])
        expect(Exercises.Exercise4([2003,2000])).toStrictEqual(['Usuário maior de idade', 'Usuário maior de idade'])
    })

    test('Fifth exercise', () => {
      expect(Exercises.Exercise5(null)).toBeNull()
      expect(Exercises.Exercise5(undefined)).toBeNull()
      expect(Exercises.Exercise5([2,4,6])).toStrictEqual([2,4,6])
      expect(Exercises.Exercise5([5.99,null,100])).toStrictEqual([5.99,100])
    })

    test('sixth', () => {
        expect(Exercises.Exercise6(null)).toBeNull()
        expect(Exercises.Exercise6(undefined)).toBeNull()
        expect(Exercises.Exercise6(['1','calcular','3'])).toBe(1)
        expect(Exercises.Exercise6(['CALCULAR','calcular','3'])).toBe(0)
        expect(Exercises.Exercise6(['1','-1','3'])).toBe(1.33)
    })

    test('Seventh Exercise', () => {
        expect(Exercises.Exercise7(['42 sc', 'valor aleatório'])).toBe(50)
        expect(Exercises.Exercise7(['42 sc'])).toBe(100)
        expect(Exercises.Exercise7(['42 s'])).toBe(0)
        expect(Exercises.Exercise7(undefined)).toBeNull()
        expect(Exercises.Exercise7(null)).toBeNull()
    })
    
    test('Eight Exercise', () => {
        const test1: {morningClass: string, afternoonClass: string}[] = [
            {morningClass: 'JoãoV',afternoonClass: 'casado'}, 
            {morningClass: 'Vinicius', afternoonClass: 'JoãoV'},
            {morningClass: 'Huann', afternoonClass: 'casado'}
        ]

        const test2: {morningClass: string, afternoonClass: string}[] = [
            {morningClass: 'Alone',afternoonClass: 'solteiro'}, 
            {morningClass: 'Hunter', afternoonClass: 'solteiro'},
            {morningClass: 'Dragon', afternoonClass: 'solteiro'}
        ]

        const test3: {morningClass: string, afternoonClass: string}[] = [
            {morningClass: 'Alone',afternoonClass: 'Dragon'}, 
            {morningClass: 'Hunter', afternoonClass: 'solteiro'},
            {morningClass: 'Dragon', afternoonClass: 'Hunter'}
        ]

        // expect(Exercises.Exercise8(test1)).toStrictEqual('JoãoV')
        expect(Exercises.Exercise8(test2)).toStrictEqual('todos os alunos estudam em meio período')
        expect(Exercises.Exercise8(test3)).toStrictEqual('Hunter, Dragon')
    })
})