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
    let bolado = 1
    while (bolado <= 100) {
        counter += bolado
        bolado++
    }

    console.log(counter)
}


// Aqui estamos exportando especificamente as funções
// firstExerciseA e firstExerciseB para outros arquivos
// export { firstExerciseA, firstExerciseB }