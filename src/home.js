import addToDo from "./addToDo.js";
import { projectAll } from "./sidebar.js"

let count = 0;
function loadHome() {   
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');
    homePage.setAttribute('data-id', `${count}`);
    homePage.setAttribute('content-active','show');
    homePage.classList = 'tab-content';
    homePage.id = 'homepage';

    const project1 = document.createElement('h2');
    project1.innerHTML = projectAll[`${count}`].projectInput
    homePage.appendChild(project1);

    const inputTask = document.createElement('input');
    inputTask.id = `inputText${count}`;
    inputTask.classList = 'inputText';
    inputTask.placeholder = 'Enter task here';
    homePage.appendChild(inputTask);

    const taskBtn = document.createElement('button');
    taskBtn.id = `addBtn${count}`;
    taskBtn.classList = 'addBtn';
    taskBtn.innerHTML = 'Add Task';
    homePage.appendChild(taskBtn);

    content.appendChild(homePage);

    const currentList = document.createElement('ul');
    currentList.id = `tasks${count}`;
    currentList.classList = 'tasks';
    homePage.appendChild(currentList);
    document.body.appendChild(content)

    count++
    
    addToDo()
    /*const todoList = [];

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

        done_undone(check) {
            const todoIndex = todoList.findIndex((task) => task.id == check);
            // Add if/else statement to get rid of error
            console.log(todoList[todoIndex].isDone);
            todoList[todoIndex].isDone == false ? todoList[todoIndex].isDone = true : todoList[todoIndex].isDone = false;
            this.display();
        }

        delete(item) {
            const delIndex = todoList.findIndex((task) => task.id == item);
            todoList.splice(delIndex, 1);
            this.display();
        }

        display() {
            this.ulTask.innerHTML = '';
            
            todoList.forEach((object_item) => {
                const liTask = document.createElement('li');
                const delBtn = document.createElement('i');

                liTask.innerText = object_item.taskInput;
                liTask.setAttribute('data-id', object_item.id);
                delBtn.setAttribute('data-id', object_item.id);
                delBtn.classList.add('far', 'fa-trash-alt');
                liTask.appendChild(delBtn);

                delBtn.addEventListener('click', function(e) {
                    const deleteId = e.target.getAttribute('data-id');
                    myToDoList.delete(deleteId);
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
    })*/

}

export default loadHome