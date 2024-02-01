const addTaskbtn = document.querySelector('button');
const taskInput = document.querySelector('input');
const ul = document.querySelector('ul');

addTaskbtn.addEventListener('click', () => {
    if(taskInput.value.trim() === '') {
        alert('PLEASE ENTER A TASK!');
        taskInput.focus();
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    
    const newDelBtn = document.createElement('span');
    newDelBtn.innerText = 'delete';
    newDelBtn.classList.add('material-symbols-outlined');
    // append element 
    newTask.appendChild(newDelBtn);
    ul.appendChild(newTask);
    taskInput.value = '';  // return empty input box 
})

ul.addEventListener('click', (event) => {
    if (event.target.classList.contains('material-symbols-outlined')) {
        const liToRemove = event.target.parentElement;
        ul.removeChild(liToRemove);
    }
});
