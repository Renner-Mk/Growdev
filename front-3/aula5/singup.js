(() => {
    const formSignup = document.getElementById('form-signup')
    const nameInputSignup = document.getElementById('name-signup')
    const emailInputSignup = document.getElementById('email-signup')
    const passwordInputSignup = document.getElementById('password-signup')
    const rePasswordInputSignup = document.getElementById('re-password-signup')

    const successAlertSignup = document.getElementById('success-alert-signup')
    const errorAlertSignup = document.getElementById('error-alert-signup')

    formSignup.addEventListener('submit', async (event) =>{
        event.preventDefault()

        const passwordValue = passwordInputSignup.value
        const rePasswordValue = rePasswordInputSignup.value

        if(passwordValue !== rePasswordValue){
            errorAlertSignup.innerText = 'As senhas precisam ser iguais.'
            errorAlertSignup.classList.remove('d-none')

            passwordInputSignup.value = ''
            rePasswordInputSignup.value = ''



        } else {
            errorAlertSignup.classList.add('d-none')
            const data = {
                name: nameInputSignup.value,
                email: emailInputSignup.value,
                password: passwordValue
            }


            try{
                const response = await api.post('users/singup', data)

                if(response.status === 201){
                    successAlertSignup.classList.remove('d-none')
                }
            }catch (error){
                const errorMessage = error?.response?.data?.message
                console.log(errorMessage)

                errorAlertSignup.classList.remove('d-none')
                errorAlertSignup.innerText = errorMessage
            }
        }
    })

})()