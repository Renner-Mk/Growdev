const userContainer = document.querySelector('.user-list')
const loadingContainer = document.querySelector('.loading')

async function fetchUsers(){
    loadingContainer.style.display = 'block'

    try {
        const response = await api.get('/users')

        //const response = await axios.get('https://reqres.in/api/users')
        const users = response.data.data

        console.log(users)

        users.forEach(user => {
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')
            userCard.innerHTML = `
                <img src="${user.avatar}" />
                <h2>${user.first_name}</h2>
                <p>${user.email}</p>
            `
            userContainer.appendChild(userCard)
        })


    } catch (error) {
        console.error("Erro: ", error)
    }finally{
        loadingContainer.style.display = 'none'
    }
}

fetchUsers()



/**
 * const userContainer = document.querySelector('.user-list')
const loadingContainer = document.querySelector('.loading')

async function fetchUsers(){
    loadingContainer.style.display = 'block'

    try {
        const response = await api.get('/users')

        //const response = await axios.get('https://reqres.in/api/users')
        const users = response.data.data

        console.log(users)

        users.forEach(user => {
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')
            userCard.innerHTML = `
                <img src="${user.avatar}" />
                <h2>${user.first_name}</h2>
                <p>${user.email}</p>
            `
            userContainer.appendChild(userCard)
        })


    } catch (error) {
        console.error("Erro: ", error)
    }finally{
        loadingContainer.style.display = 'none'
    }
}

fetchUsers()
 */