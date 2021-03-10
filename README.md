## Fonte de estudo
    https://www.typescriptlang.org/docs/


### downloads necessários

    1- abra o cmd (windows + r)
    2- npm install typescript -g 
    3- npm install --global yarn


### Comandos Git 

    // Enviar alterações para o repositório no github
    1- git add . // Pegando todas as alterações
    2- git commit -m "sua mensagem" // Mensagem que aparecerá no github
    3- git push // empurrando as alterações para o github

    // puxando alterações do github para sua maquina local
    git pull


### Atalhos do teclado

    shift + end // seleciona a linha até o final
    shift + home // seleciona a linha até o inicio
    ctrl + shift + setas // selecionando palavras
    ctrl + space // Aparecer na tela as opções que podem ser digitadas
    ctrl + . // importar algo


### inicializando um projeto

    npm init -y (criando package.json)
    tsc --init (criando tsconfig.json)


### instalando dependências 

    npm install typescript tsc ts-node -d


### Terminal

    console.log('Hello World)


### functions

    // Nesse tipo de função não é permito você chamar-la 
    // antes mesmo de ter criado, ou seja só pode ser utilizada se estiver
    // em cima do seu código de onde está sendo chamada.
    // Utilizado em situações quando se apenas precisar retorna algo sem 
    // muita lógica.
    const firstExerciseA = () => (
        1
    )

    // Nesse tipo de função é permito você chamar-la em qualquer parte do código
    // e o return é explicito.
    // Utilizado em situações com maior quantidade de código
    function firstExerciseA() {
        return 1
    } 

    // Pegando o valor retornado da função firstExerciseA
    console.log(firstExerciseA()) // retorna 1

    // Pegando o valor retornado da variável firstExerciseA
    console.log(firstExerciseA) // retorna [Function: firstExerciseA]


### Tipos Variáveis 

    diferença entre var, let e const assista: https://youtu.be/QVrrqgDhhu4
    var varName = value
    let letName = value
    const constName = value

    // String
    var varName = 'Hello World'

    // Number
    var varName = 24

    // Boolean
    bool shit = false ou true

    // Array
    // criando o array é já atribuindo seus valores
    const arr = [1, 3, 'Apple', 'Orange', 'Banana', true, false]

    // Criando o array é já definindo seu tipo/atribuindo valores
    // ou seja, você não pode colocar tipos de valores diferentes do definido
    // ex: array de number querendo atribuir string
    const fruits: Array<string> = ['Apple', 'Orange', 'Banana']
    // Outra forma de criar um array
    const fruits: string[] = ['Apple', 'Orange', 'Banana']


### Loops

    // Enquanto uma condition seja verdadeira esse loop se 
    // repetirá infinitamente até que esta condition seja falsa
    exemplo
    var counter = 0
    while (counter < arr.length) {
        console.log(counter)
        counter++
    }   


### Ifs

    // se a condição for verdadeira a maquina ira entrar dentro 
    // deste if e rodar seu código.
    // Sempre será lido independentemente da situação.
    if (condition) {
        
    }
    
    // Caso o if anterior seja verdadeiro, este if não ira ser rodado
    // pela maquina ou seja, será pulado.
    else if (condition) {
        
    }
    
    // SÓ SERÁ LIDO caso nenhuma das condições sejam verdadeiras a maquina 
    // cairá dentro do else.
    else {
        // por exemplo uma mensagem de erro
        return 'deu erro'
    }


### Condições

    // TODA CONDIÇÃO RETORNA UM BOOLEAN
    
    // Verificando se 1 é menor que 2
    1 < 2  // retornará true

    // Verificando se 10 é maior que 5
    10 < 5  // retornará true

    // Verificando se 2 é igual a 2
    2 === 2  // retornará true

    // Verificando se 2 é diferente de 2
    2 !== 2  // retornará false


### Operações matemáticas

    // Parênteses funcionam igual na matemática

    // dividindo 4 por 2
    4 / 2  // retornará 2

    // restos de uma divisão ps: Utilizado para saber se é par ou ímpar
    // ex: 4 % 2 == 0  // retornará true, ou seja é par
    6 % 3  // retornará 0 ou seja, sem restos da divisão

    // multiplicando 3 por 2
    3 / 2  // retornará 6

    // elevando 3 ao quadrado
    3 ** 2  // retornará 9
    

### instruções

    export const myFunction = () => {
        // return serve para retornar da função algum valor especifico neste caso 'hello World'
        return 'Hello World'  // Aqui estou retornando a string 'hello World'
    }