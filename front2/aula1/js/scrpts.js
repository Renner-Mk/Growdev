// fica dentro de window setTimeout atrasa a execução a escolha do usuario
//setTimeout(() => console.log("Temporizador"), 2000)

/*
history.back    volta pra ultima pagina visitada
*/

// let elementos = document.getElementsByClassName("titulo")
// console.log(elementos)

// const primeiroAluno = document.querySelector('.aluno')
// console.log(primeiroAluno)

// const todosAlunos = document.querySelectorAll(".aluno")
// console.log(todosAlunos)

// const alunos = document.getElementsByClassName(".aluno")
// console.log(alunos)

// const aluno1 = document.getElementById("aluno-1")
// console.log(aluno1)

// const itemlist = document.getElementsByTagName("li")

// console.log(itemlist)

// const idAluno = aluno1.getAttribute("id")

// console.log(idAluno)

// const a = document.getElementById("aluno-1")


// let html = documento.getElementById('meuParagrafo').innerHTML;


const listaPresensa = document.getElementById("lista-presenca")
const novoAluno = document.createElement('li')
novoAluno.innerText = 'Renner'
listaPresensa.appendChild(novoAluno)
novoAluno.classList.add("aluno")

const aluno2 = document.getElementById('aluno-2')
listaPresensa.removeChild(aluno2)

// console.log(listaPresensa.parentElement)
console.log(listaPresensa.previousElementSibling)

const element = document.getElementById("element")