//corpo
const corpo = document.querySelector('body')

//cria corpo e adiciona contador
const contador = document.createElement('p')
contador.classList.add("contador")
let likes = 0
contador.innerText = likes
corpo.appendChild(contador)


const btn = document.createElement('button')
btn.innerText = "Like"
btn.classList.add("button")

corpo.appendChild(btn)


function registrarLike(){
    likes++
    console.log(likes)
    contador.innerText = likes

    if (likes == 10){
        const p = document.createElement('p')
        p.innerText = 'Postagem popular'
        corpo.appendChild(p)
    } 
}

btn.onclick = () => registrarLike()