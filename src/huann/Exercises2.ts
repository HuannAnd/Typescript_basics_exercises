export function SecondExercise1(A: number[], B:number[]) {
    // 1-Leia dois arrays A e B com 15 elementos. Construir um array C, onde cada elemento de 
    // C é a subtração do elemento correspondente de A com B. No final imprimir o array C.
    
    let c: string 
    for (let index = 0 ; index < B.length; index++) {
        var confirmNotELement = A[index] in B ? true : c += `,${A[index]}`

    }

        console.log(`${`C = [${c}]`}`)    
}
    



// function DifferenceArray (B: number[]) {
//     for (let index = 0; index < B.length; index++) {
//         var c: string = ''
//         var confirmNotELement = B[index] in A ? (true) : c += `, ${B[index]}`
        
//     }
    
  
