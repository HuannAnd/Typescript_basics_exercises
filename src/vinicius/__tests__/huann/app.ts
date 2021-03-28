//! 1)Crie um programa que imprima:

import { convertCompilerOptionsFromJson, couldStartTrivia, createTempVariable, findAncestor, setSyntheticLeadingComments } from "typescript"

//* Este é mais recomendado

export const TesteDeCoisas = (numberRandom: number) => {
    // booleanValue = booleanValue? falso verdadeiro
  
    const mamaCitA = [1,2,3,4,5].filter(x => ![numberRandom].includes(x))
    console.log(mamaCitA)  
}

export const FirstExerciseA = () => {
    // a)Os números de 1 a 10 de forma crescente
    
    for (let v1 = 1; v1 <= 10; v1++) {
        console.log(v1)
    
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

export function FirstExercise3() {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    for (let v4 = 1; v4 <= 200; v4 += 2) {
        console.log(v4)
    }
}

export const FirstExercise4 = (ages: number[]) => {
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

export const FirstExercise5 = (ages: Array<number>, name: Array<string>) => {

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

export const FirstExercise6 = (candidatesNames: string[] , candidatesVotes: number[] , password: string) => {
    //Criar um algoritmo que simule uma urna eletrónica. Esta urna deve possuir dois candidatos
    //e possui três modos. O primeiro é o modo de CADASTRO, onde o sistema pergunta o nome de cada
    //um dos dois candidatos. Por medidas de segurança, para poder cadastrar um candidato na urna
    //o sistema deve solicitar ao usuário a senha para poder ter acesso
    //(a senha do sistema é Pa$$w0rd). O segundo modo é o modo de votos, onde o usuário informa 1 para
    //votar no primeiro candidato e 2 para votar no segundo candidato. O terceiro modo,
    //é o modo de apuração de votos, onde o sistema verifica qual candidato tem mais votos.
    //Caso o número de votos seja igual, o sistema deve imprimir a mensagem "SEGUNDO TURNO", caso 
    //contrário deve imprimir o nome do candidato vencedor e o número de votos que ele obteve.
    
    let candidates: {name: string ; votes: number}[] = []
    for (let index = 1; index <= 3; index++) {
        
        if (index == 1) {
            console.log('VERIFICANDO SENHA...')   
            if(password !== 'Pa$$w0rd') console.log('SENHA INVÁLIDA')
            console.log('SENHA VERIFICADA')            
            
            for (let index = 0; index < candidatesNames.length; index++)
            candidates.push({ name: candidatesNames[index] , votes: 0}) 

        }
        else if (index == 2) {
            for (let index = 0; index < candidatesNames.length; index++) {
                candidates[index].votes += candidatesVotes[index]
            }
        }

        else{
            const maxVote = Math.max(...candidates.map(x => x.votes))
            const verificationNameCandidate = candidatesNames[candidates.findIndex(x => x.votes === maxVote)]
            
            const verificationEqualsVotes = candidates.filter(x => x.votes === maxVote).length > 1 
                ? console.log('SEGUNDO TURNO')  
                : console.log(`O candidato com mais votos é ${verificationNameCandidate} com ${maxVote} votos.`
            )
        }
    
    }
}

export const FirstExercise7 = (cigaretsPerDay: number , yearsSmoking: number , walletPrice: number) => {
    // 7)Calcular a quantidade de dinheiro gasta por um fumante.
    //  Dados: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira.
     
    const walletsPerDay = Math.floor(12 / cigaretsPerDay)
    const cigaretsPricePerYear = Math.floor(365 / (walletsPerDay + 1))
    console.log(cigaretsPricePerYear * yearsSmoking * walletPrice)
    
}

export const FirstExercise8 = (x: number , y: number ) => {
    // 8)Ler dois números inteiros, X e Y, e apresentar mensagem informando se o X é múltiplo de Y

    const verificaçãoModular = x % y == 0  
        ? console.log("x é múltiplo de y")  
        : console.log("x não é múltiplo de y")
}

export const FirstExercise9 = (x: number, y: number , z: number) => {
    // 9)Fazer um algoritmo para ler 03 números reais do teclado e 
    // verificar se o primeiro é maior que a soma dos outros dois.
    
    if(x == y + z) console.log('x = y + z')
    const arithmeticalVerification = x > y + z 
        ? console.log('Infelizmente não é um triângulo(x > y + z)') 
        : console.log('Até pode ser um triângulo(x < y + z)') 

}

export const FirstExercise10 = (a: number, b: number) => {
    // 10)Ler 02 números reais do teclado (A e B), verificar e imprimir qual deles 
    // é maior, ou a mensagem "A = B" caso sejam iguais.

    if (a === b) console.log('A = B')
    else {
        const ifTernary = a > b ? 'A é maior que B' : 'B é maior que A'
        console.log(ifTernary)
    }
}
 
export const FirstExercise11 = (numIntDividing: number, numIntDivisive: number) => {
    // 11)Ler 02 números inteiros do teclado. Se o segundo for diferente de zero,
    //  calcular e imprimir o quociente do primeiro pelo segundo. Caso contrário, 
    // imprimir a mensagem: "DIVISÃO POR ZERO".
        if(numIntDivisive === 0 || numIntDividing === 0 ) console.log('DIVISÃO POR ZERO') 
        
        else console.log(Math.floor(numIntDividing / numIntDivisive))
}

export const FirstExercise12 = (...randomNumbers) => {
    // 12)Ler 4 números inteiros e calcular a soma dos que forem pares.
  
    const sumODD = randomNumbers
        .filter(item => item % 2 === 0)
        .reduce((accumulator, item) => accumulator + item, 0) 
    
    console.log(sumODD)
}

export const FirstExercise13 = (...numbers) => {
    // 13)Ler 10 valores e determinar o maior dentre eles.
    
    console.log(`O número ${Math.max(...numbers)} é o maior número dentre os outros`)   
}
//! deixar por ultimo
export const FirstExercise14 = (nms1: number,nms2: number,nms3: number) => {
    // 14)Ler três valores e colocar-lós em ordem.
        //! Não genérico, mas tá feito :)

    nms1 = nms1 ?? 0
    nms2 = nms2 ?? 0
    nms3 = nms3 ?? 0
    
        const conversor = [nms1 ,nms2, nms3]   

        // conversor.sort

    const nmsArrayPos2 = Math.max(...conversor) 
    const nmsArrayPos0 = Math.min(...conversor)
        
    var nmsArrayPos1 = conversor.filter(x => ![nmsArrayPos0, nmsArrayPos2].includes(x))
        
    if(nmsArrayPos1.length === 0){
        let nmsArrayPos11 = Math.min(...conversor.filter(x => x === nmsArrayPos0 || x === nmsArrayPos2 ))
        console.log(`${nmsArrayPos0}, ${nmsArrayPos11}, ${nmsArrayPos2}`)
    }

    else if(nmsArrayPos1.length === 1) {
        console.log(`${nmsArrayPos0}, ${nmsArrayPos1[0]}, ${nmsArrayPos2}`)
    }
}

export const FirstExercise15 = (...numbers) => {
    // Ler 10 números e imprimir quantos são múltiplos de 3 e quantos são múltiplos de 5.
    
    console.log(`${
        numbers.filter(x => x % 3 === 0).length} são múltiplos de 3 e ${
        numbers.filter(x => x % 5 === 0).length} são múltiplos de 5 
    `)}
   
//TODO:REFOTORAR PARA SWITCH CASE. 
export const FirstExercise16 = (salário: number) => {
    // 16)Ler o salário de uma pessoa e imprimir o Salário Líquido de acordo
    //  com a redução do imposto descrito ao lado:
    // Menor ou igual a R$ 600,00 - ISENTO de desconto
    // Maior que R$ 600 e menor ou igual a 1.200 - 20% desconto
    // Maior que R$ 1.200 e menor ou igual a R$2.000 - 25% desconto
    // Maior que R$ 2.000,00 - 30% desconto    
   
    if(salário < 600) console.log(salário)
    else if(salário <= 1200 && salário > 600) console.log(salário*4/5)
    else if(salário <= 2000 && salário > 1200) console.log(salário*3/4)
    else console.log(salário*7/10)           
}

export const FirstExercise17 = (numberOnTable: number) => {
    // 17)Imprimir a tabuada de qualquer número fornecido 
    // pelo usuário até que o usuário forneça o valor –1
    
    console.log(`Tabuada do ${numberOnTable}: ${[0,1,2,3,4,5,6,7,8,9,10].map(x => x * numberOnTable )}`)    
}

// return numberOnTable * index
export const FirstExercise18 = (apples: number) => {
    // 18)As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia,
    //e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia
    //  o número de maçãs compradas, calcule e escreva o custo total da compra.
    
    console.log(apples < 12 ? apples * 12/10 : apples)
    
    // const applesMachine =  apples < 12 ? console.log(apples * 13/10) : console.log(apples) 
}

// Aqui estamos exportando especificamente as funções
// firstExerciseA e firstExerciseB para outros arquivos
// export { firstExerciseA, firstExerciseB }