export function SecondExercise1 (A: number[], B:number[]) {
  // 1-Leia dois arrays A e B com 15 elementos. Construir um array C, onde cada elemento de
  // C é a subtração do elemento correspondente de A com B. No final imprimir o array C.

  const arrayC: number[] = []
  for (let index = 0; index < A.length && index < B.length; index++) {
    arrayC.push(A[index] - B[index])
  }

  console.log(arrayC)
}

export function SecondExercise2 (A: number[]) {
  // 2-Ler um array com 10 inteiros e mostrar os números na ordem direta e inversa a que foram lidos.

  const arrayAInverse: number[] = []
  for (let index = A.length - 1; index >= 0; index--) {
    arrayAInverse.push(A[index])
  }

  console.log(A)
  console.log(arrayAInverse)
}

export function SecondExercise3 (A: number[], searchedNumber: number) {
  // 3-Leia 10 elementos e armazene em um array A. Em seguida, solicite pelo teclado um número qualquer
  //  e pesquise no array se o número existe. Caso, seja verdade imprima a mensagem:
  //  “O número existe no array”, caso contrário “Número inexistente”.

  let numberExists: number = null
  for (let index = 0; index < A.length; index++) {
    if (searchedNumber === A[index]) numberExists = A[index]
  }

  const verification = numberExists !== null ? `O número existe no array, valor é: ${numberExists}` : 'Número inexistente'
  console.log(verification)

  // const arrayNumberBNotInA: number[] = []
  // const arrayNumberBInA: number[] = []

  // for (let index = 0; index < A.length; index++) {
  //   B in A
  //     ? arrayNumberBInA.push(B)
  //     : arrayNumberBNotInA.push(B)
  // }

  // console.log(`O/s número/s ${arrayNumberBInA} existem no array`)
  // console.log(`O/s número/s ${arrayNumberBNotInA} não existem no array`)
}

export function SecondExercise4 (A: number[], B: number[]) {
  // 4-Leia dois arrays A e B com 10 elementos. Em seguida, compare os arrays e verifique
  // Se os mesmos são iguais ou diferentes.

  const verificationArrayAAndB = A.length === B.length ? 1 : 0
  const newArrayVerification: [] = []
  switch (verificationArrayAAndB) {
    case 1:
      for (let index = 0; index < A.length; index++) {
        newArrayVerification.push(A[index] === B[index] ? 1 : 0)
      }

      break
    default:
      console.log('A é diferente de B')
      break
  }

  // A: 1,2,3,4 // vamos comparar o 1 por ex com cada valor de b, em seguida o 2 com cada valor de b e assim vai.
  // B: 3,4,5,6

  //   let areEqual: boolean = false
  //   for (let i = 0; i < A.length && i < B.length; i++) {
  //     for (let j = 0; j < A.length && j < B.length; j++) {
  //       if (i === j && A[i] === B[j]) {
  //         areEqual = true
  //         break
  //       }

  //       areEqual = false
  //     }
  //   }

  //   console.log(areEqual ? 'são iguais' : 'são diferentes')
  // }

  // export function SecondExercise5 (A: number[]) {
  //   // 5-Leia um array A com 15 elementos,
  //   // e calcule a média aritmética dos mesmos, em seguida, diga quantos dos elementos lidos estão abaixo, acima e na média.

  //   let average = 0
  //   for (let index = 0; index < A.length; index++) {
  //     average += A[index] / A.length
  //   }

  //   const numberGreaterThanAverage: number[] = []
  //   const numberLessThanAverage: number[] = []
  //   for (let index = 0; index < array.length; index++) {

  //   }
  // }

// ? let lastVerification: number[] = []
// ? const lastVerificationElements = A === B ?
// ? for (let index = 0; index < A.length; index++) {
// ?  const verificationAAndBElements = A[index] === B[index]
// ?  lastVerification.push([index])
}
