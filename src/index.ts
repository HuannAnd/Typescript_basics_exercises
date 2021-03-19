//* Aqui estamos importando em especifico a 
//* função firstExerciseA para este arquivo
//! Estou importando *(Todos os arquivos) as(como) com o nome de Exercises do arquivo app.ts
import * as Exercises from "./app"
import { userCreation, functionsExamplesWithReturn } from "./exemplos"

// const example =  userCreation('Vinicius Oliveira', 16)
// console.log(example)
const namesArray: Array<string> = ['Huann','vinicius','lucas','nyko','Matheus']
const agesArray: Array<number> = [18,16,0,23,15,45]

// Estamos enviando para o FirstExercise4 as idades em forma de array
// Exercises.FirstExercise5(agesArray, namesArray)
Exercises.FirstExercise7(7, 4, 12)