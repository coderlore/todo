

function addToDo() {
    const todoList = [];
    const list = document.querySelector('#tasks');
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

        /*display() {
            this.ulTask.innerHTML = '';
            
            todoList.forEach((object_item) => {
                const liTask = document.createElement('li');
                const delBtn = document.createElement('i');

                liTask.innerText = object_item.taskInput;
                liTask.setAttribute('data-id', object_item.id);
                delBtn.setAttribute('data-id', object_item.id);
                delBtn.classList.add('far', 'far-trash-alt');
                //liTask.appendChild(delBtn);
            }
        }*/
    };

    myToDoList = new ToDo(list);
    document.querySelector('#addBtn').addEventListener('click', function() {
    myToDoList.add()
    })
}

export default addToDo