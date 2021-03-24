export const Exercise1 = (hours: number, minutes: number, serviceHour: number): string => {
    // 1- Solicite ao usuário que informe quantas horas e minutos ele 
    // trabalha por dia e qual o valor/hora de seu serviço. Imprima 
    // quanto dinheiro ele ganha ao longo de um dia trabalhado. A mensagem 
    // impressa ao usuário deve ter, no máximo, duas casas após a vírgula.

    const returnedValue = (hours + (minutes / 60)) * serviceHour
    return `${returnedValue.toFixed(2)}`
}

export const Exercise2 = (letters: string[]): string => {
    // 2- Solicite ao usuário que informe uma palavra qualquer, porém 
    // ele deve digitar uma letra por vez. Quando o usuário informar a palavra 
    // “Finalizar”, a aplicação deve apresentar a palavra inteira.

    let word: string = ''
    for (let index = 0; index < letters.length; index++) {
        if (letters[index].toLocaleLowerCase() !== 'finalizar') break
            
        word += letters[index]        
    }

    return word
}

export const Exercise3 = (users: {name: string, maritalStatus: string}[]): string[] => {
    // 3- Solicite para 5 usuários que informem seus nomes e se são solteiros.
    //  Ao final apresente o nome de todos os usuários solteiros.
    
    return users
        .filter(x => x.maritalStatus.toLowerCase() === 'solteiro')
        .map(x => x.name)
}

export const Exercise4 = (birthday: number[]): string[] => {
    // 4- Solicite ao usuário seu ano de nascimento e imprima se ele é ou não maior
    // de idade. Caso o usuário digite um valor inválido, a aplicação deve pedir que ele
    // digite novamente.

    return birthday.map(x => {
        return x - 2021 > 17
            ? 'Usuário maior de idade'
            : 'Usuário menor de idade'
    })
}

export const Exercise5 = (arr: number[]): number[] => {
    // 5- Solicite ao usuário que informe 5 números e armazene em um array. 
    // Toda vez que o usuário digitar um valor inválido, a aplicação deverá 
    // armazenas “null” no índice correspondente. Ao final, imprimir apenas 
    // os números válidos.

    return arr.filter(x => x !== undefined && x !== null)
}

export const Exercise6 = (employees: string[]): number => {
    // 6- Calcule e apresente a média salarial dos funcionários de uma 
    // empresa qualquer. A aplicação será encerrada quando o usuário digitar 
    // a palavra "calcular". Caso o usuário digite um valor negativo então a 
    // aplicação deve pedir seu salário novamente.

    let employeesSum: number
    let index = 0
    for (; ; index++) {
        if (employees[index].toLowerCase() !== 'calcular') break
            
        try {
            const parse = parseFloat(employees[index])
            if (parse > -1) employeesSum += parse
        } catch (error) {}
    }

    return employeesSum / index
}

export const Exercise7 = (users: string[]): number => {
    // 7- Pergunte para 5 usuários a UF que representa o estado onde ele 
    // nasceu. A aplicação deverá mostrar uma lista com todas as opções para o usuário, 
    // e cada uma deve conter um ID numérico, o usuário digitará o número que representa 
    // sua UF. Ao final a aplicação deverá mostrar a percentagem de usuários que nasceram 
    // em Santa Catarina.

    const amountOfUsersBornInSC = users.filter(x => x.toUpperCase() === '42 SC').length
    return (amountOfUsersBornInSC * 100) / users.length
}

export const Exercise8 = (students: {morningClass: string, afternoonClass: string}[]): string[] => {
    // 8- Solicite ao usuário que digite o nome dos alunos das turmas Matutino e Vespertino. 
    // Cada turma possui 5 alunos. Armazene os nomes em dois arrays distintos de forma alternada, 
    // ou seja, o primeiro nome deve ser armazenado no array da Matutino, o segundo nome deve ser 
    // armazenado no array da Turma Vespertino, assim por diante. Ao final imprima apenas os nomes 
    // dos alunos que estão estudando em período integral. Caso nenhum aluno esteja cadastrado
    // em ambas as turmas, imprimir a mensagem “todos os alunos estudam em meio período”.

    const bothTurns = students.map(x => {
        const student = students.find(y => x.morningClass === y.afternoonClass)
        return student !== undefined    
            ? x
            : undefined
    })

    return bothTurns.filter(x => x !== undefined).map(x => x.morningClass)
}