//* Aqui estamos importando em especifico a 
//* função firstExerciseA para este arquivo
//! Estou importando *(Todos os arquivos) as(como) com o nome de Exercises do arquivo app.ts
import * as Exercises from "./app"
import Home from './vinicius'

// console.log(Home())

const namesArray: Array<string> = ['Huann','vinicius','lucas','Rua','Matheus']
const agesArray: Array<number> = [18,16,0,23,15,45]

// Estamos enviando para o FirstExercise4 as idades em forma de array
// Exercises.FirstExercise5(agesArray, namesArray)
// const teste = {
//     walletPrice: 7, 
//     cigaretsPerDay: 5, 
//     yearsSmoking: 27
// }
 Exercises.FirstExercise3()