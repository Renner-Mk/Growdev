const email = document.getElementById('email')
const password = document.getElementById('password')
const formLogin = document.getElementById('form-login')
const loginUser = document.querySelector('.btn-signup')


formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    const userLogin = {
        email: email.value,
        password: password.value
    }

    login(userLogin)
})

async function login(userLogin){
    try {
        const response = await api.post(`/users/login`, userLogin)

        if(response.status === 200){
            alert('Está logado sucesso!')
        }
        location.href = 'index.html'
        localStorage.setItem("userId", response.data.userId)

    } catch (error) {
        if(error.response){
            if(error.response.status === 404){
                alert(error.response.data)
            }else{
                console.error(error.response)
            }
        }
    }
}

loginUser.addEventListener('click', () => {
    location.href = 'signup.html'
})

const togglePassword = document.querySelector('.toggle')
const toggleOn = document.querySelector('.fa-toggle-on')
const toggleOff = document.querySelector('.fa-toggle-off')
toggleOn.style.visibility = "visible"

togglePassword.addEventListener('click', () => {
    console.log(password.type)

    const toggle = password.getAttribute('type') === 'password' ? 'text' : 'password'
    password.setAttribute('type', toggle)

    if(toggle === 'text'){
        toggleOn.style.visibility = "hidden"
        toggleOff.style.visibility = "visible"
    }else{
        toggleOn.style.visibility = "visible"
        toggleOff.style.visibility = "hidden"
    }
})
