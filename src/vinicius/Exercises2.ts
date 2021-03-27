import { removeUndefinedOrAnyValuesFromArray } from './'

export const Exercise1 = (a: number[], b: number[]): number[] => {
    // 1-Leia dois arrays A e B com 15 elementos. Construir um array C, onde cada elemento de C 
    // é a subtração do elemento correspondente de A com B. No final imprimir o array C.
    
    a = removeUndefinedOrAnyValuesFromArray(a, undefined)
    b = removeUndefinedOrAnyValuesFromArray(b, undefined)
    if (a === null || b === null) return null

    let c: number[] = []
    let index = 0
    a.forEach(x => {
        c.push(a[index] - b[index]) 
        index++
    })

    return c
}

export const Exercise2 = (arr: number[]): { inverse: number[], direct: number[] } => {
    // 2-Ler um array com 10 inteiros e mostrar os números 
    // na ordem direta e inversa a que foram lidos.
    
    arr = removeUndefinedOrAnyValuesFromArray(arr, undefined)
    if (arr === null) return null

    let arrReversed: number[] = []
    for (let index = arr.length - 1; index > -1; index--) {
        arrReversed.push(arr[index])
    }

    let arrayDirectAndReverse: {
        direct: number[]
        inverse: number[]
    } = {
        direct: arr,
        inverse: arrReversed
    }

    return arrayDirectAndReverse
}

export const Exercise3 = (arrayA: number[], searchValueInTheArray: number): string => {
    // 3-Leia 10 elementos e armazene em um array A. Em seguida, solicite pelo
    // teclado um número qualquer e pesquise no array se o número existe. 
    // Caso, seja verdade imprima a mensagem: “O número existe no array”, 
    // caso contrário “Número inexistente”.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA, undefined)
    if (arrayA === null) return null
    searchValueInTheArray = searchValueInTheArray ?? 0

    const findValueInTheArray: number = arrayA.find(x => x === searchValueInTheArray)
    return findValueInTheArray !== undefined ? 'O número existe no array' : 'Número inexistente'
}

export const Exercise4 = (arrayA: number[], arrayB: number[]): string => {
    // 4-Leia dois arrays A e B com 10 elementos.  
    // Em seguida, compare os arrays e verifique se os mesmos são iguais ou diferentes.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA, undefined)
    arrayB = removeUndefinedOrAnyValuesFromArray(arrayB, undefined)
    if (arrayA === null || arrayB === null) return null
    
    let arraysAreEqual: boolean = true
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] !== arrayB[index]) {
            arraysAreEqual = false
            break
        }
    }

    return arraysAreEqual ? 'São iguais' : 'São diferentes'
}

export const Exercise5 = (arrayA: number[]): string => {
    // 5-Leia um array A com 15 elementos, e calcule a média aritmética dos mesmos, 
    // em seguida, diga quantos dos elementos lidos estão abaixo, acima e na média.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA, undefined)
    if (arrayA === null) return null
    
    const arithmeticAverage: number = arrayA.reduce((a, b) => a + b) / arrayA.length

    const bellowAverage: number = arrayA.filter(x => x < arithmeticAverage).length
    const Average: number = arrayA.filter(x => x === arithmeticAverage).length
    const aboveAverage: number = arrayA.filter(x => x > arithmeticAverage).length

    return `abaixo da média:${bellowAverage} na média:${Average} acima da média:${aboveAverage}`
}

export const Exercise6 = (arrayA: number[], arrayB: number[]): number[] => {
    // 6-Leia um array A com 12 elementos. Após sua leitura, colocar os seus elementos 
    // em ordem crescente. Depois ler um array B também com doze elementos, colocar os 
    // elementos de B em ordem decrescente. Construir um array C, onde cada elemento de 
    // C é a soma do elemento correspondente de A com b. Colocar em ordem crescente a matriz 
    // C e apresentar os seus valores.
    
    arrayA = removeUndefinedOrAnyValuesFromArray(arrayA, undefined)
    arrayB = removeUndefinedOrAnyValuesFromArray(arrayB, undefined)
    if (arrayA === null || arrayB === null) return null
    
    arrayA.sort()
    arrayB.sort(function(a, b) { return b - a })
    
    let c: number[] = []
    for (let index = 0; index < arrayA.length; index++) {
        c.push(arrayA[index] + arrayB[index])
    }

    return c
}