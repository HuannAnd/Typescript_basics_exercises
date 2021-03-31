export function SecondExercise1 (A: number[], B:number[]) {
  // 1-Leia dois arrays A e B com 15 elementos. Construir um array C, onde cada elemento de
  // C é a subtração do elemento correspondente de A com B. No final imprimir o array C.

  const arrayC: number[] = []
  for (let index = 0; index < A.length && index < B.length; index++) {
    arrayC.push(A[index] - B[index])
  }

  console.log(arrayC)
}
