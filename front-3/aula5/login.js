(() => {
    const formLogin = document.getElementById('form-login')
    const emailInput = document.getElementById('email-login')
    const passwordInput = document.getElementById('password-login')

    // alerts
    const successAlert = document.getElementById('success-alert-login')
    const errorAlert = document.getElementById('error-alert-login')

    formLogin.addEventListener('submit', async (event) =>{
        event.preventDefault()

        const data = {
            email: emailInput.value,
            password: passwordInput.value
        }

        try{
            const response = await api.post('/users/login', data)

            if(response.status === 200){
                const userData = response.data

                localStorage.setItem('userId', userData.userId)

                successAlert.classList.remove('d-none')
                errorAlert.classList.add('d-none')

                setTimeout(() => {
                    location.href = '/index.html'
                }, 3000)
            }
        }catch (error){
            const errorMessage = error?.response?.data
            console.log(errorMessage)

            errorAlert.classList.remove('d-none')
            errorAlert.innerText = errorMessage
        }

        
    })
})()