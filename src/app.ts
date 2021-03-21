//! 1)Crie um programa que imprima:

import { couldStartTrivia, setSyntheticLeadingComments } from "typescript"

//* Este é mais recomendado
export const FirstExerciseA = () => {
    // a)Os números de 1 a 10 de forma crescente
    
    for (let v1 = 1; v1 <= 10; v1++) {
        console.log(v1)
    
    }
    // let counter = 1
    // while (counter <= 10) {
    //     // console.log(arr[counter])
    //     console.log(counter)
    //     counter++
    // }
}

//* Mesmo código porém escrito de maneiras diferentes
//? function firstExerciseA() {
//?     return 1
//? }

// Aqui estou exportando explicitamente logo na criação desta função
// ou seja, estou criando e já exportando-a
export const firstExerciseB = () => {
    // b)Os números de 1 a 10 de forma decrescente
    
    for (let v2 = 10; v2 >= 1 ; v2--){
        console.log(v2)
        }
  
  // let subscript = 10
    // while (subscript >= 1) {
    //     console.log(subscript)
    //     subscript-- 
}

export function FirstExerciseC() {
    // c)Os números de 1 a 10 de forma crescente, mas apenas aqueles
    // que forem par.
  
    for (let v3 = 2; v3 <= 10 ; v3 += 2) {
        console.log(v3)
    
    }
}

export function FirstExercise2() {
    // 2)Imprimir a soma dos números inteiros de 1 a 100.

    let counter = 0
    for (let index = 1; index <= 100; index++) {
        counter += index
    }
    console.log(counter)
    
}

// let index = 1
// while (index <= 100) {
//     counter += index
//     index++
// }

// 1º cria o let index
// 2º faz a comparação
// 3º roda o código dentro das chaves
// por ultimo faz o index++
export function FirstExercise3() {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    for (let v4 = 1; v4 <= 200; v4 += 2) {
        console.log(v4)
    }
}

    // let index = 1
    // while (index <= 200) {
    //     if (index % 2 === 1) {
    //         console.log(index)
    //     }
            
    //     index++
    // }

    // while (index < 200) {
    //     console.log(index)
    //     index += 2

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

export function FirstExercise5(ages: Array<number>, name: Array<string>) {

    // 5)Criar um algoritmo que peça o nome e a idade de 5 mulheres. 
    // Após informar estes dados, o programa deve mostrar apenas percentagem 
    // de mulheres que estão com idade entre 18 e 35.
    
    let index = 0
    let womenBetween18And35 = 0
    while (index < name.length) {
        if (ages[index] >= 18 && ages[index] <= 35) {
            womenBetween18And35++
        }

        index++
    }
    
    const percentageWomenBetween18And35 = (womenBetween18And35 / ages.length) * 100
    console.log(`Cerca de ${parseFloat(percentageWomenBetween18And35.toFixed(2))}`)            
}

export const FirstExercise6 = () => {
    
}

type PropsFirstExercise7  = {
    walletPrice: number
    cigaretsPerDay: number
    yearsSmoking: number
}

// export function FirstExercise7(walletPrice: number, cigaretsPerDay: number, yearsSmoking: number)  {
// export function FirstExercise7({walletPrice, cigaretsPerDay, yearsSmoking}: PropsFirstExercise7)  {
export const FirstExercise7 = (props: PropsFirstExercise7) => {
    // 7)Calcular a quantidade de dinheiro gasta por um fumante.
    //  Dados: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira.
     
    // const walletsPerDay = Math.floor(12 / cigaretsPerDay)
    const walletsPerDay = Math.floor(12 / props.cigaretsPerDay)
    const cigaretsPricePerYear = Math.floor(365 / (walletsPerDay + 1))
    // console.log(cigaretsPricePerYear * yearsSmoking * walletPrice)
    console.log(cigaretsPricePerYear * props.yearsSmoking * props.walletPrice)
}

export const FirstExercise8 = () => {
    
}

export const FirstExercise9 = () => {

}

export const FirstExercise10 = () => {
    
}

export const FirstExercise11 = () => {
    
}

export const FirstExercise12 = () => {
    
}

export const FirstExercise13 = () => {
    
}

export const FirstExercise14 = () => {
    
}

export const FirstExercise15 = () => {
    
}

export const FirstExercise16 = () => {
    
}

export const FirstExercise17 = () => {
    
}

export const FirstExercise18 = () => {
    
}

// Aqui estamos exportando especificamente as funções
// firstExerciseA e firstExerciseB para outros arquivos
// export { firstExerciseA, firstExerciseB }