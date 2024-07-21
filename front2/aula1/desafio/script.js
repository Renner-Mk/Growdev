//cria corpo e adiciona contador
const h1 = document.createElement('h1')
h1.innerText = 'Contador de likes'
document.body.appendChild(h1)

const container = document.createElement('div')
container.setAttribute("class", 'container')
document.body.appendChild(container)


const contador = document.createElement('p')
contador.classList.add("contador")
let likes = 0
contador.innerText = likes
document.body.appendChild(contador)


const btn = document.createElement('button')
btn.innerText = "Like"
btn.classList.add("button")

document.body.appendChild(btn)


function registrarLike(){
    likes++
    console.log(likes)
    contador.innerText = likes

    if (likes == 10){
        const p = document.createElement('p')
        p.innerText = 'Postagem popular'
        document.body.appendChild(p)
    } 
}

btn.onclick = () => registrarLike()