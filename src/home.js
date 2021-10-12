import addToDo from "./addToDo.js";

function loadHome() {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');

    const project1 = document.createElement('h2');
    project1.innerHTML = 'Project Name Placeholder'
    homePage.appendChild(project1);

    const inputTask = document.createElement('input');
    inputTask.id = 'inputText';
    inputTask.placeholder = 'Enter task here';
    homePage.appendChild(inputTask);

    const taskBtn = document.createElement('button');
    taskBtn.id = 'addBtn';
    taskBtn.innerHTML = 'Add Task';
    homePage.appendChild(taskBtn);

    content.appendChild(homePage);

    const currentList = document.createElement('ul');
    currentList.id = 'tasks'
    content.appendChild(currentList);
    document.body.appendChild(content)

    // Now add in the JS part
    
    //addToDo()
    const todoList = [];

    class ToDo {
        constructor(task) {
            this.ulTask = task; 
        };

        add() {
            const taskInput = document.querySelector('#inputText').value;
            if (taskInput == "") {
                alert('No task was entered. Try again!');
            } else {
                const taskObject = {
                    id: todoList.length,
                    taskInput: taskInput,
                    isDone: false,
                }
            todoList.unshift(taskObject);
            this.display();
            document.querySelector('#inputText').value = '';
            }
        }

        display() {
            this.ulTask.innerHTML = '';
            
            todoList.forEach((object_item) => {
                const liTask = document.createElement('li');
                const delBtn = document.createElement('i');

                liTask.innerText = object_item.taskInput;
                liTask.setAttribute('data-id', object_item.id);
                delBtn.setAttribute('data-id', object_item.id);
                delBtn.classList.add('far', 'far-trash-alt');
                liTask.appendChild(delBtn);

                delBtn.addEventListener('click', function(e) {
                    const deleteId = e.target.getAttribute('data-id');
                    myToDoList.deleteElement(deleteId);
                })

                liTask.addEventListener('click', function(e) {
                    const selectId = e.target.getAttribute('data-id');
                    myToDoList.done_undone(selectId);
                })

                if (object_item.isDone) {
                    liTask.classList.add('checked');
                }

                this.ulTask.appendChild(liTask);
            })
        }
    };

    const list = document.querySelector('#tasks');
    let myToDoList = [];
    myToDoList = new ToDo(list);
    document.querySelector('#addBtn').addEventListener('click', function() {
    myToDoList.add()
    })

}

export default loadHome