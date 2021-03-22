//! 1)Crie um programa que imprima:

import { couldStartTrivia, setSyntheticLeadingComments } from "typescript"

//* Este é mais recomendado
export const FirstExerciseA = () => {
    // a)Os números de 1 a 10 de forma crescente
    
    for (let v1 = 1; v1 <= 10; v1++) {
        console.log(v1)
    
    }
    // let counter = 1,
    // while (counter <= 10) {
        // console.log(arr[counter])
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

export function FirstExercise3() {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    for (let v4 = 1; v4 <= 200; v4 += 2) {
        console.log(v4)
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


type PropsFirstExercise6 = {
    modos: number
    cadastro: string
    candidatos: string  
    senha: string
    nome: string
    quantidadesDeVotos1ou2: number
    // subscriptDeQuantidadeDeVotos: number[] = [1 , 2] 
}

//TODO: verificação da senha vem em primeiro lugar
//TODO: fazer os 3 modos dentro de 1 for, utilizar continue
export const FirstExercise6 = (props : PropsFirstExercise6) => {
    //Criar um algoritmo que simule uma urna eletrónica. Esta urna deve possuir dois candidatos
    //e possui três modos. O primeiro é o modo de CADASTRO, onde o sistema pergunta o nome de cada
    //um dos dois candidatos. Por medidas de segurança, para poder cadastrar um candidato na urna
    //o sistema deve solicitar ao usuário a senha para poder ter acesso
    //(a senha do sistema é Pa$$w0rd). O segundo modo é o modo de votos, onde o usuário informa 1 para
    //votar no primeiro candidato e 2 para votar no segundo candidato. O terceiro modo,
    //é o modo de apuração de votos, onde o sistema verifica qual candidato tem mais votos.
    //Caso o número de votos seja igual, o sistema deve imprimir a mensagem "SEGUNDO TURNO", caso 
    //contrário deve imprimir o nome do candidato vencedor e o número de votos que ele obteve.
            
    if (props.modos === 1) {
        console.log("Qual o seu candidato?")
        var candidatos = props.candidatos === 'Flavinho' || props.candidatos == 'Peterpan' 
            ? console.log("RECONHECEMOS SEU CANDIDATO") 
            : console.log("NÃO RECONHECEMOS SEU CANDIDATO, POR FAVOR TENTE MAIS TARDE.")
        // break
    }
    // CORPO DO TEXTO DA SENHA
    
    if (props.modos === 2 && props.senha === 'Pa$$w0rd') {
        console.log("VOTO REGISTRADO")
    }
    
    else if(props.modos === 2 && props.senha !== 'Pa$$w0rd'){
        console.log("NÃO RECONHECEMOS SUA SENHA, POR FAVOR TENTE MAIS TARDE.")
    }
    
    // if (props.modos === 3) {

    //     if(props.quantidadesDeVotos1ou2 === ) console.log("SEGUNDO TURNO")
        
    //     var verificacaoDosCandidatos = 

    // }
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
    
    const verficacaoAritmética = x > y + z 
        ? console.log('Infelizmente não é um triângulo(x > y + z)') 
        : console.log('Até pode ser um triângulo(x < y + z)') 
}

export const FirstExercise10 = (a: number, b: number) => {
    // 10)Ler 02 números reais do teclado (A e B), verificar e imprimir qual deles 
    // é maior, ou a mensagem "A = B" caso sejam iguais.

    // if (a > b) console.log(a)
    // else if (a < b) console.log(b)
    // else console.log('A = B') 

    if (a === b) {
        console.log('A = B')
    }

    else {
        // Se a condição for verdadeira retornará o primeiro valor dps do ponto de 
        // interrogação, caso contrário retornará o valor dps dos 2 pontos
        const ifTernary = a > b ? 'A é maior que B' : 'B é maior que A'
        console.log(ifTernary)
        // console.log(a > b ? 'A é maior que B' : 'B é maior que A')
    }
}

export const FirstExercise11 = () => {
    // 11)Ler 02 números inteiros do teclado. Se o segundo for diferente de zero,
    //  calcular e imprimir o quociente do primeiro pelo segundo. Caso contrário, 
    // imprimir a mensagem: "DIVISÃO POR ZERO".


}

export const FirstExercise12 = () => {
    
}

export const FirstExercise13 = () => {
    
}

//! deixar por ultimo
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