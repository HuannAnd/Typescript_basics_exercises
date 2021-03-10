// Quando temos as chaves significa que precisamos especificar o retorno
// desta função que neste caso é 1
const constFunctionsExamplesWithReturn = () => {
    //* Especificando o retorno que é: 1
    
}

// Quando temos o parênteses significa que já estamos retornando o valor
// que neste caso é 10
const constFunctionsExamplesWithoutReturn = () => (
    10
)

// Quando temos as chaves significa que precisamos especificar o retorno
// desta função que neste caso é 2
export function functionsExamplesWithReturn() {
    return ['Apple', 'Orange', 'Banana']
}   

// recebendo o parâmetro name que é do tipo string e age que é do tipo number
export const userCreation = (name: string, age: number) => {
    while (age < 19) {
        console.log(`sua idade é ${age}`)
        age++
    }

    if (name === 'Viniccius 13') {
        return 'Bem vindo deus'
    } 
    
    else if (name === 'Vinicius Oliveira') {
        return 'Você é um mamaco'.toUpperCase() // Transformando tudo para maiúsculo
    }

    else {
        return `Olá ${name}`
    }
}