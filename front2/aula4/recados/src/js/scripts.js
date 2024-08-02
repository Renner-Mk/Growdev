const notesContainer = document.querySelector('.notes-list')

const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

let currentPage = 1
let totalPages = 1


async function fecthNotes(page){
    try{
        notesContainer.innerHTML = '' // Limpa o HTML
        const userId = localStorage.getItem('userId')

        if(!userId){
            alert('Faça login para poder acessar essa pagina')
            return location.href = 'login.html'
        }

        const params = { // definindo no front quantos itens por pagina
            page,
            perPage: 3
        }
        
        const response = await api.get(`/note/${userId}`, { params })
        const notes = response.data.userNotes

        totalPages = response.data.totalPages

        notes.forEach(note => {
            const noteCard = document.createElement('div')
            noteCard.classList.add('card')

            noteCard.innerHTML = `
            <h2 class="card-title">${note.title}</h2>
            <p class="card-description">${note.description}</p>

            <div class="card-icons">
                <i class="fa-solid fa-trash" data-id=${note.id}></i>
                <i class="fa-solid fa-edit" data-id=${note.id}></i>
            </div>
            `

            notesContainer.appendChild(noteCard)
            const deleteIcon = noteCard.querySelector('.fa-trash')

            // Deletar Nota
            deleteIcon.addEventListener('click', () => {
                const noteId = deleteIcon.getAttribute('data-id')
                console.log(noteId)
                deleteNote(noteId)
            })

            // editar nota
            const editIcon = noteCard.querySelector('.fa-edit')
            editIcon.addEventListener('click', () =>{
                const noteId = editIcon.getAttribute('data-id')
                console.log(noteId)
                navagateToEditPage(noteId)
            })
        });

        if(notes.lenght === 0){
            const emptyNoteList = document.createElement('h3')
            emptyNoteList.innerText = 'Nenhum recado encontrado.'
            notesContainer.appendChild(emptyNoteList)
        }

        updatePaginationButtons()
    }catch (error){
        console.error('Erro ao buscar recados.', error)
    }
}

function navagateToEditPage(noteId){
    location.href = `edit-note.html?id=${noteId}`
}

fecthNotes(currentPage)


const addNote = document.querySelector('.addNote')
addNote.addEventListener('click', () => {
    location.href = 'new-note.html'
})
const createAccount = document.querySelector('.btn-signup')
createAccount.addEventListener('click', () => {
    location.href = 'signup.html'
})
const loginAccount = document.querySelector('.btn-login')
loginAccount.addEventListener('click', () => {
    location.href = 'login.html'
})



prevPage.addEventListener('click', () => {
    if(currentPage > 1){
        currentPage--
        fecthNotes(currentPage)
    }
})

nextPage.addEventListener('click', () => {
    if(currentPage < totalPages){
        currentPage++
        fecthNotes(currentPage)
    }
})

function updatePaginationButtons(){
    prevPage.disabled = currentPage === 1
    nextPage.disabled = currentPage === totalPages
}