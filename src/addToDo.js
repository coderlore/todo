const todoList = [];
const list = document.querySelector('#tasks');

function addToDo() {

    class ToDo {
        constructor(task) {
            this.task = task; 
        };
    };

    myToDoList = new ToDo(list);
}

export default addToDo