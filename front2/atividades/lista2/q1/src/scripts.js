const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.style.backgroundColor = "#fd8f00";
});

const tituloCards = document.querySelectorAll('.titulo-card')

tituloCards.forEach(titulos =>{
    titulos.innerText = 'Meu Card';
    titulos.style.padding = "20px";
    titulos.style.color = "#2b385b"
})

const descricaoCard = document.querySelectorAll('.descricao-card')

descricaoCard.forEach(descricao =>{
    descricao.innerText = 'Descrição modificada pelo JavaScript'
    descricao.style.color = "white"
    descricao.style.fontSize = "15px"
    descricao.style.padding = "5px 0 30px"
})

const btnEditar = document.querySelectorAll('.botao-editar')

btnEditar.forEach(btn =>{
    btn.style.padding = '10px';
    btn.style.borderRadius = '10px';
    btn.style.backgroundColor = "green";
    btn.style.color = 'white'
    btn.style.borderStyle = 'none'
    btn.setAttribute('onclick', 'editarCard()')
})

const btnApagar = document.querySelectorAll('.botao-apagar')

btnApagar.forEach(btn =>{
    btn.style.padding = '10px';
    btn.style.borderRadius = '10px';
    btn.style.backgroundColor = "red";
    btn.style.color = 'white'
    btn.style.borderStyle = 'none'
    btn.setAttribute('onclick', 'apagarCard()')
})

function editarCard(){
    alert("Clicou em Editar!")
}
function apagarCard(){
    confirm("Tem certeza que deseja apagar?")? alert("confirmado!") : alert("Cancelou!")
}