const email = document.getElementById('email')
const password = document.getElementById('password')
const formLogin = document.getElementById('form-login')


formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    const userLogin = {
        email: email.value,
        password: password.value
    }

    updatedNote(userLogin)
})

async function updatedNote(userLogin){
    try {
        const response = await api.post(`/users/login`, userLogin)

        if(response.status === 200){
            alert('Está logado sucesso!')
        }
        location.href = 'index.html'
        localStorage.setItem("userId", response.data.userId)

    } catch (error) {
        console.error("Erro ao fazer login", error)
    }
}