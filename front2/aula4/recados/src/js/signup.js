const formSignup = document.getElementById('form-signup')
const email = document.getElementById('email')
const password = document.getElementById('password')
const userName = document.getElementById('name')
const loginUser = document.querySelector('.btn-login')


formSignup.addEventListener('submit', (event) => {
    event.preventDefault()
    const formSignups = formSignup.querySelectorAll('input')

    let valid = true
    formSignups.forEach( input => {
        if(!input.value){
            setError(input, "Campo é obrigatório")
            valid = false
        }else{
            setSucess(input)
        }
    })

    if(valid){
        const userSignup = {
            name: userName.value,
            email: email.value,
            password: password.value
        }

        createAccont(userSignup)
    }

})

async function createAccont(userSignup){
    try {
        const response = await api.post(`/users/singup`, userSignup)

        if(response.status === 201){
            alert('Conta criada com Sucesso!')
            location.href = 'login.html'
        }
        
    } catch (error) {
        if(error.response){
            if(error.response.status === 400){
                alert(error.response.data.message)
            }else{
                console.error(error.response)
            }
        }
              
    }
}

loginUser.addEventListener('click', () => {
    location.href = 'login.html'
})

const togglePassword = document.querySelector('.toggle')
const toggleOn = document.querySelector('.fa-toggle-on')
const toggleOff = document.querySelector('.fa-toggle-off')
toggleOn.style.visibility = "visible"

togglePassword.addEventListener('click', () => {

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

function setError(input, message){
    const formControl = input.parentElement 
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.classList.remove('success')
    formControl.classList.add('error')

}

function setSucess (input){
    const formControl = input.parentElement
    
    formControl.classList.remove('error')
    formControl.classList.add('success')
}
