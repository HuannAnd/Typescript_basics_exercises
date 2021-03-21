export const firstExerciseA = (): number[] => {
    // a)Os números de 1 a 10 de forma crescente
    
    let counter: number[]
    for (let index = 1; index < 11; index++) {
        counter.push(index)
    }

    return counter
}

export const firstExerciseB = (): number[] => {
    // b)Os números de 1 a 10 de forma decrescente
    
    let counter: number[]
    for (let index = 10; index > 0; index--) {
        counter.push(index)
    }

    return counter
}

export function FirstExerciseC(): number[] {
    // c)Os números de 1 a 10 de forma crescente, mas apenas aqueles
    // que forem par.
    
    let counter: number[]
    for (let index = 0; index < 11; index+=2) {
        counter.push(index)
    }

    return counter
}

export function FirstExercise2(): number {
    // 2)Imprimir a soma dos números inteiros de 1 a 100.

    let counter = 0
    for (let index = 1; index < 101; index++) {
        counter += index
    }

    return counter
}

export function FirstExercise3(): number[] {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    let counter: number[]
    for (let index = 1; index < 200; index+=2) {
        counter.push(index)
    }

    return counter
}

export const FirstExercise4 = (ages: number[]): number => {
    // 4) Calcular a média de idade de uma turma qualquer. O algoritmo deve 
    // parar quando for digitada a idade igual a zero.

    return ages
        .filter(x => x > 0)
        .reduce((a, b) => a + b)
}

export function FirstExercise5(ages: Array<number>, name: Array<string>) {

    // 5)Criar um algoritmo que peça o nome e a idade de 5 mulheres. 
    // Após informar estes dados, o programa deve mostrar apenas percentagem 
    // de mulheres que estão com idade entre 18 e 35.
    
    return ages.filter(x => x > 17 && x < 36).length        
}

export const FirstExercise6 = () => {
    
}

export function FirstExercise7(walletPrice: number, cigaretsPerDay: number, yearsSmoking: number)  {
    // 7)Calcular a quantidade de dinheiro gasta por um fumante.
    //  Dados: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira.
     
    const walletsPerDay = Math.floor(12 / cigaretsPerDay)
    const cigaretsPricePerYear = Math.floor(365 / (walletsPerDay + 1))
    console.log(cigaretsPricePerYear * yearsSmoking * walletPrice)
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