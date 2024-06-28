const tasks = [
    {title: "Tarefa 1", description: "Descrição da tarefa 1", completed: false},
    {title: "Tarefa 2", description: "Descrição da tarefa 2", completed: false},
    {title: "Tarefa 3", description: "Descrição da tarefa 3", completed: false},
    {title: "Tarefa 4", description: "Descrição da tarefa 4", completed: false}
]
function createTask(titleTask, descriptionTask){
    const title = testTitle(titleTask)
    const description = testDescription(descriptionTask)
    let task = {
        title,
        description,
        completed: false
    }
    tasks.push(task)
}

function testTitle(title){
    if(title){
        return title
    }else{
        let nameTitle
        do{
            nameTitle = prompt("Titulo Obrigatório")
        }while(nameTitle === null)
            return title
    }
}
function testDescription(description){
    if(description){
        return description
    }else{
        let nameTitle
        do{
            nameTitle = prompt("Descrição Obrigatória")
        }while(nameTitle === null)
            return description
    }
}

function listTasks(){
    console.log("-------------------Listando Tarefas-------------------")
    for(const task of tasks){
        console.log(`Titulo da Tarefa: ${task.title}`)
        console.log(`Descrição da Tarefa: ${task.description}`)
        console.log(`Tarefa Está completa? ${task.completed? "Sim" : "Não"}`)
        console.log(' - ')
    }
    console.log(' - ')
    console.log(' - ')
}

function updateTaskStatus(index, completed){
    let indexTrue = checkIndex(index)
    tasks[indexTrue].completed = completed
}

function checkIndex(index){
    let testIndex = index
    while(isNaN(testIndex) || testIndex < 0 || testIndex >= tasks.length){
        testIndex = parseInt(prompt("Tarefe não encontrada passe um novo valor"))
    }
    return testIndex
}

function deleteTask(index){
    let indexTrue = checkIndex(index)
    tasks.splice(indexTrue, 1)
}

const title = prompt("Digite o titulo da tarefa")
const description = prompt("Digite a descrição da tarefa")
createTask(title, description)
listTasks()

updateTaskStatus(6, confirm("task Foi feita?"))
listTasks()

deleteTask(6)
listTasks()





