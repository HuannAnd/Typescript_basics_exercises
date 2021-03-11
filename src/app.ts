//! 1)Crie um programa que imprima:

//* Este é mais recomendado
export const firstExerciseA = () => {
    // a)Os números de 1 a 10 de forma crescente
    
    let counter = 1
    while (counter <= 10) {
        // console.log(arr[counter])
        console.log(counter)
        counter++
    }
}

//* Mesmo código porém escrito de maneiras diferentes
//? function firstExerciseA() {
//?     return 1
//? }

// Aqui estou exportando explicitamente logo na criação desta função
// ou seja, estou criando e já exportando-a
export const firstExerciseB = () => {
    // b)Os números de 1 a 10 de forma decrescente
    
    let subscript = 10
    while (subscript >= 1) {
        console.log(subscript)
        subscript-- 
    }
}

export function FirstExerciseC() {
    // c)Os números de 1 a 10 de forma crescente, mas apenas aqueles
    // que forem par.
    
    let counter = 1
    while (counter <= 10)  {
        if (counter % 2 === 0) {
            console.log(counter)
        }

        counter++
    }
}

export function FirstExercise2() {
    // 2)Imprimir a soma dos números inteiros de 1 a 100.

    let counter = 0
    let index = 1
    while (index <= 100) {
        counter += index
        index++
    }

    console.log(counter)
}

export function FirstExercise3() {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    let index = 1
    // while (index <= 200) {
    //     if (index % 2 === 1) {
    //         console.log(index)
    //     }
            
    //     index++
    // }

    while (index < 200) {
        console.log(index)
        index += 2
    }
}

export const FirstExercise4 = (ages: Array<number>) => {
    // 4) Calcular a média de idade de uma turma qualquer. O algoritmo deve 
    // parar quando for digitada a idade igual a zero.

    let index = 0
    let agesSum = 0
    while (index < ages.length) {
        if (ages[index] === 0) {
            console.log('idade igual a 0')
            break
        }

        agesSum += ages[index]
        index++
    }

    const average = agesSum / ages.length
    console.log(parseFloat(average.toFixed(2)))
}

// Aqui estamos exportando especificamente as funções
// firstExerciseA e firstExerciseB para outros arquivos
// export { firstExerciseA, firstExerciseB }