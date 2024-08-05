const notesContainer = document.querySelector('.notes-list')

const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

const selectPage = document.getElementById('select-pages-pagineted')

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
                deleteNote(noteId)
                location.reload();
            })

            // editar nota
            const editIcon = noteCard.querySelector('.fa-edit')
            editIcon.addEventListener('click', () =>{
                const noteId = editIcon.getAttribute('data-id')
                navagateToEditPage(noteId)
            })
        });

        
        if(notes.length === 0){
            const emptyNoteList = document.createElement('h3')
            emptyNoteList.innerText = 'Nenhum recado encontrado.'
            notesContainer.appendChild(emptyNoteList)
        }

        updatePaginationButtons()
        selectionPage(totalPages)
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
        localStorage.setItem('selectPage', currentPage)
        fecthNotes(currentPage)
    }
})

nextPage.addEventListener('click', () => {
    if(currentPage < totalPages){
        currentPage++
        localStorage.setItem('selectPage', currentPage)
        fecthNotes(currentPage)
    }
})

function updatePaginationButtons(){
    selectPage.disabled = totalPages === 1
    prevPage.disabled = currentPage === 1
    nextPage.disabled = currentPage === totalPages || totalPages === 0
}

selectPage.addEventListener('change', (event) => {
    const selectedPage = event.target.value;
    localStorage.setItem('selectPage', selectedPage)
    currentPage = parseInt(selectedPage)
    fecthNotes(currentPage)
});

function selectionPage(totalPages){
    const pages = selectPage.querySelectorAll('option');
    pages.forEach(option => {
        if(option.value === localStorage.getItem('selectPage')){
            selectPage.value = option.value
        }
    });
    
    if(pages.length !== totalPages){
        selectPage.innerHTML = ''
        
        for(let i = pages.length || 1; i <= totalPages; i++){
            selectPage.innerHTML += `
            <option value="${i}">Recados Pagina ${i}</option>
            `
        }
    }
}