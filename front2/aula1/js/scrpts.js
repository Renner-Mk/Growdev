//fica dentro de window setTimeout atrasa a execução a escolha do usuario
//setTimeout(() => console.log("Temporizador"), 2000)


//getElementsByClassName - retorna todos os elementos com a class definida, pode ser mais de uma separada por espaço
let elementos = document.getElementsByClassName("titulo")
console.log("1", elementos)

// getElementsByTagName - pega os elementos pela propria tag
const tagName = document.getElementsByTagName("li")
console.log("2", tagName) // posso especificar também com [posição do elemento que eu quero como se fosse um arrey]

// querySelector - retorna o primeiro elemento que atende a class id ou tag
const primeiroAluno = document.querySelector('.aluno') // atentar que quando for class precisa do .  assim como no id precisa da #
console.log("3", primeiroAluno)

//querySelectorAll - retorna todos os elementos que tem o id class ou tag passados
const todosAlunos = document.querySelectorAll(".aluno")// atentar que quando for class precisa do .  assim como no id precisa da #
console.log("4", todosAlunos)

//getElementsByClassName - retorna todos os elementos pela class
const alunos = document.getElementsByClassName(".aluno")
console.log("5", alunos)

// getElementById - eesse pelo id
const aluno1 = document.getElementById("aluno-1")
console.log("6", aluno1)

const itemlist = document.getElementsByTagName("li")
console.log("7", itemlist)

// pega o atribudo do aluno nesse caso o id
const idAluno = aluno1.getAttribute("id") // poderia usar para pegar o src de uma img
console.log("8", idAluno)

const chamadaBotao = document.getElementById("chamada")
chamadaBotao.setAttribute('disabled', 'disebled')// desabilita uma img ou botão

let html = document.getElementById('aluno-1')
let html2 = document.getElementById('aluno-3')
console.log("9", html.innerHTML)

html.innerHTML = "<strong>Patrick</strong>" // adiciona html
html2.innerText = "<strong>Pedro</strong>" // adiciona texto




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