//* Aqui estamos importando em especifico a 
//* função firstExerciseA para este arquivo
//! Estou importando *(Todos os arquivos) as(como) com o nome de Exercises do arquivo app.ts
import * as Exercises from "./app"
import { Exercises1, Exercises2, Exercises3, Exam } from './vinicius'

// const namesArray: Array<string> = ['Huann','vinicius','lucas','Rua','Matheus']
// const agesArray: Array<number> = [18,16,0,23,15,45]

const props: { 
    candidatesNames: string[]
    password:  string
    candidatesVotes: number[]
} = {
    candidatesNames:['Huann','Vinicius '], 
    password: 'Pa$$w0rd',
    candidatesVotes: [1 , 2]
}

Exercises.FirstExercise6(props)