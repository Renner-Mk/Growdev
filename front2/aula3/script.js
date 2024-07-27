const userContainer = document.querySelector('.user-list')
const loadingIndicator = document.querySelector('.loading')
const userCardTamplate = document.getElementById('user-card-tamplate')

async function fecthUsers() {
    loadingIndicator.style.display = 'block'
    userContainer.innerHTML = '' // limpa o container de usuarios

    try {
        const response = await api.get('/notes/83dc61c7-925a-411f-b12b-73bc129c5cc8')
        const users = response
        
        users.forEach(user => {
            const userCard = userCardTamplate.cloneNode(true) //clona o template

            userCard.querySelector('img').src = user.avatar
            userCard.querySelector('img').alt = `${user.first_name} ${user.last_name}`
            userCard.querySelector('h2').innerText = `${user.first_name} ${user.last_name}`
            userCard.querySelector('p').innerText = `E-mail: ${user.email}`

            userContainer.appendChild(userCard)
        });
    }catch (erro){
        console.error('erro')
    }finally{
        loadingIndicator.style.display = 'none'
    }
}

fecthUsers()

async function createNewNote(){
    const newNote = {
        title: 'Estudar axios',
        description: '1h por dia',
        userId: '1'
    }

    try{
        const response = await api.post('/notes')

        if(response.status === 201){
            console.log('Recado cadastrado com sucesso!')
        }
    }catch(error){
        console.error('Erro')
    }





}