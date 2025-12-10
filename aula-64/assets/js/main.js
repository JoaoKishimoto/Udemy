const taskInput = document.getElementById('taskInput');
const form = document.getElementById('form');
const lu = document.getElementById('tasks');

getFromLocal();

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!taskInput.value) return;
    
    taskCreator(taskInput.value);
});

document.addEventListener('click', function (e) {
    const target = e.target;
    if(target.classList.contains('deleteButton')){
        target.parentElement.remove();
        saveLocal();
    }
})

function taskCreator(task) {
    const li = criaLi();
    li.innerText = task;
    lu.appendChild(li);
    createDeleteButton(li);
    clearInput();
    saveLocal();
}

function criaLi() {
    return document.createElement('li');
}

function clearInput() {
    taskInput.value = '';
    taskInput.focus(); // this function automatically set the focus on the input
}

function createDeleteButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Complete';
    deleteButton.classList.add('deleteButton')
    li.appendChild(deleteButton);
}

function saveLocal() {
    const liTasks = lu.querySelectorAll('li');
    const tasksArray = [];

    for (let li of liTasks) {
        let taskText = li.innerText;
        taskText = taskText.replace('Complete', '').trim();
        tasksArray.push(taskText);
    }
    const tasksJSON = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', tasksJSON)
}

function getFromLocal() {
    const tasksJSON = localStorage.getItem('tasks');
    let tasksArray = JSON.parse(tasksJSON);
    for (let task of tasksArray) {
        taskCreator(task);
    }
}