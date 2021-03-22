export const Exercise1A = (): number[] => {
    // a)Os números de 1 a 10 de forma crescente
    
    let counter: number[]
    for (let index = 1; index < 11; index++) {
        counter.push(index)
    }

    return counter
}

export const Exercise1B = (): number[] => {
    // b)Os números de 1 a 10 de forma decrescente
    
    let counter: number[]
    for (let index = 10; index > 0; index--) {
        counter.push(index)
    }

    return counter
}

export function Exercise1C(): number[] {
    // c)Os números de 1 a 10 de forma crescente, mas apenas aqueles que forem par.
    
    let counter: number[]
    for (let index = 0; index < 11; index+=2) {
        counter.push(index)
    }

    return counter
}

export function Exercise2(): number {
    // 2)Imprimir a soma dos números inteiros de 1 a 100.

    let counter = 0
    for (let index = 1; index < 101; index++) {
        counter += index
    }

    return counter
}

export function Exercise3(): number[] {
    // 3)Imprimir todo os números ímpares menores de 200.
    
    let counter: number[]
    for (let index = 1; index < 200; index+=2) {
        counter.push(index)
    }

    return counter
}

export const Exercise4 = (ages: number[]): number => {
    // 4) Calcular a média de idade de uma turma qualquer. O algoritmo deve 
    // parar quando for digitada a idade igual a zero.

    return ages.reduce((a, b) => a + b)
}

export function Exercise5(ages: Array<number>, name: Array<string>) {

    // 5)Criar um algoritmo que peça o nome e a idade de 5 mulheres. 
    // Após informar estes dados, o programa deve mostrar apenas percentagem 
    // de mulheres que estão com idade entre 18 e 35.
    
    return ages.filter(x => x > 17 && x < 36).length        
}

type candidate = {
    name: string
    votes: number
}

function createCandidates(name: string): { name: string, votes: number } {
    return {
        name: name,
        votes: 0
    }
}

export const Exercise6 = (password: string, candidateNames: string[], candidateVotes: number[]): string => {
    // 6)Criar um algoritmo que simule uma urna eletrónica. Esta urna deve possuir dois candidatos 
    // e possui três modos. O primeiro é o modo de CADASTRO, onde o sistema pergunta o nome de cada um dos 
    // dois candidatos. Por medidas de segurança, para poder cadastrar um candidato na urna o sistema deve
    // solicitar ao usuário a senha para poder ter acesso (a senha do sistema é Pa$$w0rd). O segundo modo
    // é o modo de votos, onde o usuário informa 1 para votar no primeiro candidato e 2 para votar no segundo
    // candidato. O terceiro modo, é o modo de apuração de votos, onde o sistema verifica qual candidato
    // tem mais votos. Caso o número de votos seja igual, o sistema deve imprimir a mensagem "SEGUNDO TURNO",
    // caso contrário deve imprimir o nome do candidato vencedor e o número de votos que ele obteve.

    let firstCandidate: (string | number)[]
    let secondCandidate: (string | number)[]
    let candidate: candidate
    let teste: (name | votes)Candidate[]

    let candidates = [{
        name: 'Vinicius',
        age: 0
    }, {
        name: 'Huann',
        age: 1
    }]
    for (let mode = 1; mode <= 3; mode++) {
        
        if (mode === 1) {
            if (password !== 'Pa$$w0rd') return 'senha inválida'
            
            // firstCandidate = createCandidates(candidateNames[0])
            // secondCandidate = createCandidates(candidateNames[1])
            // continue
            candidate = createCandidates('Vinicius')
            teste.push(createCandidates('Vinicius'))
            // return candidates[1].age.toString()
            return teste[0].name
        }

        if (mode === 2) {
            firstCandidate[1] = candidateVotes[0]
            secondCandidate[1] = candidateVotes[1]
            continue
        }

        if (mode === 3) {
            if (firstCandidate[1] === secondCandidate[1]) return 'Segundo turno'
                
            return firstCandidate[1] > secondCandidate[1]
                ? `o candidato ${firstCandidate[0]} venceu com: ${firstCandidate[1]} votos`
                : `o candidato ${secondCandidate[0]} venceu com: ${secondCandidate[1]} votos`
        }
    }
}


export const Exercise7 = (walletPrice: number, cigaretsPerDay: number, yearsSmoking: number): number => {
    // 7)Calcular a quantidade de dinheiro gasta por um fumante.
    //  Dados: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira.
     
    const walletsPerDay = Math.floor(12 / cigaretsPerDay)
    const cigaretsPricePerYear = Math.floor(365 / (walletsPerDay + 1))
    return cigaretsPricePerYear * yearsSmoking * walletPrice
}

export const Exercise8 = (x: number, y: number): string => {
    // 8)Ler dois números inteiros, X e Y, e apresentar mensagem informando se o X é múltiplo de Y.

    return x % y === 0 ? 'é múltiplo' : 'não é múltiplo'
}

export const Exercise9 = (firstNumber: number, secondNumber: number, thirdNumber: number): string => {
    // 9)Fazer um algoritmo para ler 03 números reais do teclado e verificar 
    // se o primeiro é maior que a soma dos outros dois.

    const secondNumberPlusThirdNumber = secondNumber + thirdNumber
    return firstNumber > secondNumberPlusThirdNumber ? 'é maior que a soma' : 'é menor que a soma'
}

export const Exercise10 = (a: number, b: number): string => {
    // 10)Ler 02 números reais do teclado (A e B), verificar e imprimir qual deles é maior, 
    // ou a mensagem "A = B" caso sejam iguais.

    if (a === b) return 'A = B'
    return a > b ? 'A é maior que B' : 'B é maior que A'
}

export const Exercise11 = (firstNumber: number, secondNumber: number): string => {
    // 11)Ler 02 números inteiros do teclado. Se o segundo for diferente de zero, calcular e imprimir 
    // o quociente do primeiro pelo segundo. Caso contrário, imprimir a mensagem: "DIVISÃO POR ZERO".

    if (firstNumber === 0 || secondNumber === 0) return 'DIVISÃO POR ZERO'
    return `${firstNumber / secondNumber}` 
}

export const Exercise12 = (
        firstNumber: number, 
        secondNumber: number, 
        thirdNumber: number, 
        fourthNumber: number
    ): number => {
    // 12)Ler 4 números inteiros e calcular a soma dos que forem pares.

    const allNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber]
    return allNumbers
        .filter(x => x % 2 === 0)
        .reduce((a, b) => a + b)
}

export const Exercise13 = (values: number[]): number => {
    // 13)Ler 10 valores e determinar o maior dentre eles.

    return Math.max(...values);
}

export const Exercise14 = (firstNumber: number, secondNumber: number, thirdNumber: number): string => {
    // 14)Ler três valores e colocar-lós em ordem. 

    if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
        const temporary = firstNumber
        firstNumber = thirdNumber
        thirdNumber = secondNumber
        secondNumber = temporary
    } 

    if (secondNumber > thirdNumber && secondNumber > firstNumber) {
        const temporary = firstNumber
        firstNumber = secondNumber
        secondNumber = temporary
    }

    if (thirdNumber > secondNumber) {
        const temporary = thirdNumber
        thirdNumber = secondNumber
        secondNumber = temporary
    }

    return `${thirdNumber} ${secondNumber} ${firstNumber}`
}

export const Exercise15 = (values: number[]): string => {
    // 15)Ler 10 números e imprimir quantos são múltiplos de 3 e quantos são múltiplos de 5.

    const multipleByThree = values.filter(x => x % 3 === 0).length
    const multipleByFive = values.filter(x => x % 5 === 0).length

    return `Múltiplos de 3:${multipleByThree}, Múltiplos de 5:${multipleByFive}`
}

export const Exercise16 = (salary: number): string => {
    // 16)Ler o salário de uma pessoa e imprimir o Salário Líquido de acordo com a redução 
    // do imposto descrito ao lado:
    // Menor ou igual a R$ 600,00 - ISENTO de desconto
    // Maior que R$ 600 e menor ou igual a 1.200 - 20% desconto
    // Maior que R$ 1.200 e menor ou igual a R$2.000 - 25% desconto
    // Maior que R$ 2.000,00 - 30% desconto

    switch (true) {
        case salary <= 600:
            return 'ISENTO de desconto'
        case salary > 600 && salary <= 1200:
            return '20% desconto'
        case salary > 1200 && salary <= 2000:
            return '25% desconto'
        default:
            return '30% de desconto'
    }
}

export const Exercise17 = (table: number): number[] => {
    // 17)Imprimir a tabuada de qualquer número fornecido pelo usuário até que o usuário forneça o valor –1.

    const multiplicationTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return multiplicationTable.map(item => item * table)
}

export const Exercise18 = (apples: number): number => {
    // 18)As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 
    // se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
    // escreva o custo total da compra.

    const lessThenTwelve = 1.30
    const moreThenTwelve = 1.00
    if (apples < 12) return apples * lessThenTwelve
    return apples * moreThenTwelve
}