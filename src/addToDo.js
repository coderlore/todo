import sidebar from "./sidebar.js";
import { projectAll } from "./sidebar.js"

function addToDo() {
    const todoList = [];

    class ToDo {
        constructor(task) {
            this.ulTask = task; 
        };

        add() {
            const taskInput = document.querySelector(`#inputText${whichOne}`).value;
            if (taskInput == "") {
                //alert('No task was entered. Try again!');
            } else {
                const taskObject = {
                    id: todoList.length,
                    taskInput: taskInput,
                    isDone: false,
                }
            todoList.push(taskObject);

            const contentDiv = document.querySelector('#content');

            projectAll[`${whichOne}`]['taskList'] = todoList;
            this.display();
            document.querySelector(`#inputText${whichOne}`).value = '';
            }
        }

        done_undone(check) {
            const todoIndex = todoList.findIndex((task) => task.id == check);
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
                const checkBtn = document.createElement('i');
                const delBtn = document.createElement('i');

                liTask.innerText = object_item.taskInput;
                liTask.setAttribute('data-id', object_item.id);

                checkBtn.setAttribute('data-id', object_item.id);
                checkBtn.classList.add('far', 'fa-check-square', 'checkbox');

                delBtn.setAttribute('data-id', object_item.id);
                delBtn.classList.add('far', 'fa-trash-alt', 'trash');

                liTask.appendChild(delBtn);
                liTask.appendChild(checkBtn);

                delBtn.addEventListener('click', function(e) {
                    const deleteId = e.target.getAttribute('data-id');
                    myToDoList.delete(deleteId);
                })

                checkBtn.addEventListener('click', function(e) {
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

    let whichOne = projectAll.length - 1;
    const list = document.querySelector(`#tasks${whichOne}`);
    let myToDoList = [];
    myToDoList = new ToDo(list);
    document.querySelector(`#addBtn${whichOne}`).addEventListener('click', function() {
        myToDoList.add()
    })
}

export default addToDo