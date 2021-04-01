export function SecondExercise1 (A: number[], B:number[]) {
  // 1-Leia dois arrays A e B com 15 elementos. Construir um array C, onde cada elemento de
  // C é a subtração do elemento correspondente de A com B. No final imprimir o array C.

  const arrayC: number[] = []
  for (let index = 0; index < A.length && index < B.length; index++) {
    arrayC.push(A[index] - B[index])
  }

  console.log(arrayC)
}
export function SecondExercise2 (A: number[]){
// 2-Ler um array com 10 inteiros e mostrar os números na ordem direta e inversa a que foram lidos.
 
  let arrayA: number[] = []
  for (let index = A.length-1; index >= 0; index--){
    arrayA.push(A[index])
   
  }
  console.log(arrayA);
}

  // let ArrayA: number[] = []
  // for (let index = 0; index < A.length; index++) {
    //   ArrayA.push(A[ArrayA.length-(index+1)])
    
//   }

  // console.log(A)
// }

export function SecondExercise3 (A: number[], B: number[]){
  // 3-Leia 10 elementos e armazene em um array A. Em seguida, solicite pelo teclado um número qualquer
  //  e pesquise no array se o número existe. Caso, seja verdade imprima a mensagem: 
  //  “O número existe no array”, caso contrário “Número inexistente”.
  
  // for (let index = 0; index < B.length; index++) {
  //   B[index] in A ? console.log('O número existe no array') : console.log('Número inexistente') 
  
  // }

  let arrayNumberBNotInA: number[] = [] 
  let arrayNumberBInA: number[] = []
  for (let index = 0; index < B.length; index++) {
    B[index] in A 
    ? arrayNumberBInA.push(B[index])
    : arrayNumberBNotInA.push(B[index])
  }
  
  console.log(`O/s número/s ${arrayNumberBInA} existem no array`)
  console.log(`O/s número/s ${arrayNumberBNotInA} não existem no array`)
}

export function SecondExercise4 (A: number[], B: number[]) {
  // 4-Leia dois arrays A e B com 10 elementos.  Em seguida, compare os arrays e verifique
  // Se os mesmos são iguais ou diferentes.  
 
  const verificationArrayAAndB = A.length === B.length ? 1 : 0
  switch (verificationArrayAAndB) {
    case 1:
       A == B 
      ? console.log(`O array A é igual ao array B`) 
      : console.log(`O array A é diferente do array B`)
      break;
      case 0:
        default:
          console.log(`A é diferente de B`)  
          break;
        }  
      }

export function SecondExercise5 (A: number[]) {
  // 5-Leia um array A com 15 elementos,
  // e calcule a média aritmética dos mesmos, em seguida, diga quantos dos elementos lidos estão abaixo, acima e na média.
 
  let average = 0
    for (let index = 0; index < A.length; index++) {
      average += A[index] / A.length
    
    } 
  
  let numberGreaterThanAverage: number[] = []
  let numberLessThanAverage: number[] = []
  for (let index = 0; index < array.length; index++) {
    
  
  }  


}

      
// ? let lastVerification: number[] = []
// ? const lastVerificationElements = A === B ? 
// ? for (let index = 0; index < A.length; index++) {
// ?  const verificationAAndBElements = A[index] === B[index] 
// ?  lastVerification.push([index])
  
