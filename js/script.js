const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todolist = document.getElementById('todoLIist');

function addTodo(){
    const todoText = todoInput.value.trim();
    if (todoText !== ''){
        const todoItem = document.createElement('li');
        todoItem.innerText = todoText;

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'delete';
        removeBtn.classList.add('remove-btn');

        removeBtn.addEventListener('click', ()=>{
            todolist.removeChild(todoItem);
        })

        todolist.appendChild(todoItem);
        todoItem.appendChild
    }
}

addTodoBtn.addEventListener('click', addTodo);