// function media (nota1 , nota2){
//     return (nota1 + nota2) / 2
// }

// console.log(media(5, 10).toFixed(2))

// function valores(notas){
//     let soma = 0
//     for(const nota of notas){
//         soma += nota
//     }
//     return soma / notas.length
// }

// const notaAluno = [8,9,10]
// const media = valores(notaAluno)
// if(media >= 7){
//     console.log(`Aluno Aprovado ${media.toFixed(2)}`)
// }else{
//     console.log(`Aluno Reprovado ${media.toFixed(2)}`)
// }

// notaAluno.forEach(function (numero){
//     console.log(numero * 2)
// })

// const frutas = ['Maça', 'Banana', 'Laranja', 'Uva']

// frutas.forEach(function(fruta, indice, arrey){
//     console.log(`Eu gosto de ${fruta}`)
//     console.log(`indice ${indice}`)
//     console.log(arrey)
// })

//filter
//forech  //passa pelos 
//find  retorna so o primeiro elemento que satisfaz
//findIndex  retorna so o primeiro elemento que satisfaz mas retorna o index nao o valor

const biblioteca = []

function adicionarLivros() {
    const titulo = prompt("Digite um titulo de livro")
    const numeroPaginas = prompt("Paginas do livro")
    const autor = prompt("Autor do livro")
    const foiLido = "Não"
    const livro = {
        titulo,
        numeroPaginas,
        autor,
        foiLido,
    }
    biblioteca.push(livro)
}

function lerBiblioteca(livroBiblioteca) {
    livroBiblioteca.forEach(function(livro){
        console.log(`Titulo do livro: ${livro.titulo}`)
        console.log(`Numero de paginas do livro: ${livro.numeroPaginas}`)
        console.log(`Autor do livro: ${livro.autor}`)
        console.log(`Ele foi lido: ${livro.foiLido}`)
        console.log("----------------------------------------------")
    })
}
function removerLivro(){
    const remover = prompt("Digite o livro que deseja Remover")
    const novaBiblioteca = biblioteca.filter((livro => livro.titulo != remover))
    console.log("----------------------------------------------")
    console.log("-----------------------Biblioteca Atualizada-----------------------")
    return novaBiblioteca
}
function lerLivro(){
    const livrolido = prompt("Digite o livro que deseja marcar como lido")
    novaBiblioteca.forEach(function(livro) {
        if (livro.titulo == livrolido){
            livro.foiLido = "Sim"
        }
        console.log("----------------------------------------------")
        console.log("-----------------------Biblioteca Atualizada-----------------------")
    })
}

let cadasLivros = true
while(cadasLivros){
    adicionarLivros();
    cadasLivros = confirm("Continuar a cadastrar livros?")
}
lerBiblioteca(biblioteca);
const novaBiblioteca = removerLivro()
lerBiblioteca(novaBiblioteca);
lerLivro();
lerBiblioteca(novaBiblioteca);

