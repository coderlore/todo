const todoList = [];
const list = document.querySelector('#tasks');

function addToDo() {

    class ToDo {
        constructor(task) {
            this.task = task; 
        };

        add() {
            const taskInput = document.querySelector('#inputText').nodeValue;
        }
    };

    myToDoList = new ToDo(list);
    document.querySelector('.addBtn').addEventListener('click', function() {
    myToDoList.add()
    })
}

export default addToDo