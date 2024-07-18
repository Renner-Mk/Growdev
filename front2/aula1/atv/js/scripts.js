//capturar elementos
const contador = document.getElementById("contador")
const status = document.getElementById("status")
const botao = document.querySelector("button")

let numeroPessoas = 0
const numeroMin = 5

contador.innerText = numeroPessoas

function registrarPresenca(){
    numeroPessoas++
    contador.innerText = numeroPessoas

    if (numeroPessoas >= numeroMin){
        status.innerText = 'Pode começar'
        status.className = 'pode-comecar'
    } else {
        status.innerText = 'Aguardando por mais'
        status.className = 'aguardando'
    }
}

botao.onclick = () => registrarPresenca()
