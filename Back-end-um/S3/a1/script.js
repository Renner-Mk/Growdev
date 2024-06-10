// // const valores = [1, 12, 2, 23, 56, 4,]

// // console.log(valores.join()) // concatena todos os items em uma string podendo ter um separador ou nao sendo o padrao a ,
// // console.log(valores.join(' '))
// // console.log(valores.join(' - '))
// // console.log(valores.join(' , '))


// const matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(const index of matriz){
//     for(const percore of index){
//         console.log(percore)
//     }
// }

// const copa = [1959, 1962, 1970, 1994, 2002]
// for(const ganhou of copa){
//     console.log(`O brasil ganhou a copa de ${ganhou}`)
// }

// const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// for(const fruta of frutas){
//     console.log(fruta)
//     if(fruta === 'Pera'){
//         break;
//     }
// }

// const ultimaFruta = frutas[frutas.length -1]
// console.log(ultimaFruta)

// frutas.forEach((fruta, indice, arrey) => { //primeiro o nome, seugundo o indice, e terceiro pega o arrey
//     console.log(`forEach ${fruta} ${indice}`)
// })

let adicionar = true
let temp
let totalNotas = 0
let notas = 0
while(adicionar){
    do{
        temp = Number(prompt("Digite a nota do aluno de 0 a 10"))
    }while(isNaN(temp) || temp < 0 || temp > 10)
    totalNotas += temp
    notas++
    adicionar = confirm("Deseja continuar a dicionar notas?")
}
totalNotas /= notas
if(totalNotas >= 7){
    console.log(`Aprovado com ${totalNotas}`)
}else{
    console.log(`Reprovado com ${totalNotas}`)
}