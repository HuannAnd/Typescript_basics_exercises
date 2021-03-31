import { removeUndefinedOrAnyValuesFromArray } from './'

export const Exercise1 = (arrayA: number[], arrayB: number[]): { arrayA: number[], arrayB: number[] } => {
    // 1)Popule dois vetores com 10 valores cada. 
    // Após esta operação, troque o conteúdo dos vetores.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA, undefined)
    arrayB = removeUndefinedOrAnyValuesFromArray(arrayB, undefined)
    if (arrayB === null || arrayA === null) return null

    const temporary = arrayB
    arrayB = arrayA
    arrayA = temporary

    let bothArrays: {
        arrayA: number[]
        arrayB: number[]
    } = {
        arrayA: temporary,
        arrayB
    }
    
    return bothArrays
}

export const Exercise2 = (arr: number[]): string => {
    // 2)Dado um vetor qualquer com 10 números, faça um programa 
    // que informa se há ou não números repetidos nesse vetor.

    arr = removeUndefinedOrAnyValuesFromArray(arr, undefined)
    if (arr === null) return null

    let sameNumbers: boolean = false
    arr.forEach(x => {
        arr.filter(y => y === x).length > 1 
            ? sameNumbers = true
            : false
    })
    
    return sameNumbers ? 'há números repetidos' : 'não há números repetidos'
}

export const Exercise3 = (users: {sex:'male' | 'female', answer:'yes' | 'no'}[]) => {
    // 3)Um certa empresa fez uma pesquisa para saber se as pessoas 
    // gostaram ou não de um novo produto lançado no mercado. Para isso, 
    // forneceu-se o sexo do entrevistado e a sua resposta (sim ou não). 
    // Sabendo-se que foram entrevistadas 10 pessoas, fazer um algoritmo 
    // que calcule e escreva:
    // • O número de pessoas que responderam sim;
    // • O número de pessoas que responderam não;
    // • A percentagem de pessoas do sexo feminino que responderam sim;
    // • A percentagem de pessoas do sexo masculino que responderam não;
    
    users = removeUndefinedOrAnyValuesFromArray(users)
    if (users === null) return null

    const womenCount = users.filter(x => x.sex === 'female').length
    const menCount = users.filter(x => x.sex === 'male').length

    const womenSaidYes = users.filter(x => x.sex === 'female' && x.answer === 'yes').length
    const menSaidNo = users.filter(x => x.sex === 'male' && x.answer === 'no').length
    
    const usersSaidNo = users.filter(x => x.answer === 'no').length
    const usersSaidYes = users.filter(x => x.answer === 'yes').length

    const womenSaidYesPercentage = (womenSaidYes * 100) / womenCount || 0
    const menSaidNoPercentage = (menSaidNo * 100) / menCount || 0

    return `Women that said yes: ${womenSaidYesPercentage.toFixed(2)}%, men that said no: ${menSaidNoPercentage.toFixed(2)}%, users who said yes: ${usersSaidYes}, users who said no: ${usersSaidNo}`
}

export const Exercise4 = (arrayA: number[]): number => {
    // 4)Desenvolver um programa que efetue a leitura de cinco elementos 
    // de uma matriz A do tipo vetor. No final, apresente o total da 
    // soma de todos os elementos que sejam ímpares.

    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null

    return arrayA
        .filter(x => x % 2 !== 0)
        .reduce((x, y) => x + y)
}

export const Exercise5 = (arrayA: number[]): number => {
    // 5)Contar quantos valores de um vetor de 10 posições são positivos.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null

    return arrayA.filter(x => x > 0).length
}

export const Exercise6 = (arrayA: number[]): string => {
    // 6) Ler um vetor de 10 posições (aceitar somente números positivos). 
    // Escrever a seguir o valor do maior elemento de Q e a respetiva posição 
    // que ele ocupa no vetor.

    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null
    
    const arrayAPositiveNumbers = arrayA.filter(x => x > -1)
    const maxValueOfTheArray = Math.max(...arrayAPositiveNumbers)
    const indexValueOfTheArray = arrayAPositiveNumbers.indexOf(maxValueOfTheArray)

    return `Maior valor: ${maxValueOfTheArray}, index: ${indexValueOfTheArray}`
}

export const Exercise7 = (arrayA: number[]): number => {
    // 7)Crie e popule um vetor A e imprima na tela o número de 
    // vezes que existe um número residindo na mesma posição do 
    // vetor que seu valor numérico.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null
    
    let sameIndexNumbers = 0
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] === index) sameIndexNumbers++
    }

    return sameIndexNumbers
}

export const Exercise8 = (arrayA: string[]): number => {
    // 8)Crie um vetor de strings de 10 posições onde cada posição recebe
    // uma letra do alfabeto. No final, imprima quantas destas são vogais.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null

    return arrayA
        .map(x => x.toUpperCase())
        .filter(x => x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U')
        .length
}

export const Exercise9 = (arrayA: string[]): string => {
    // 9)Crie um vetor de strings de 10 posições onde cada posição 
    // recebe uma letra do alfabeto. No final, imprima a string 
    // resultante da soma das strings que residem em índices pares.

    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA)
    if (arrayA === null) return null
    
    let resultantString: string = ''
    for (let index = 0; index < arrayA.length; index += 2) {
        resultantString += arrayA[index]
    }

    return resultantString
}