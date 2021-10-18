function addProject() {
    const projectList = [];

    class Project {
        constructor(task) {
            this.ulTask = task; 
        };

        add() {
            const projectInput = document.querySelector('#inputText').value;
            if (projectInput == "") {
                alert('No task was entered. Try again!');
            } else {
                const projectkObject = {
                    id: todoList.length,
                    taskInput: taskInput,
                }
            todoList.unshift(projectObject);
            this.display();
            document.querySelector('#inputText').value = '';
            }
        }

        display() {
            this.ulTask.innerHTML = '';
            
            todoList.forEach((object_item) => {
                const liTask = document.createElement('li');

                liTask.innerText = object_item.taskInput;
                liTask.setAttribute('data-id', object_item.id);

                liTask.addEventListener('click', function(e) {
                    const selectId = e.target.getAttribute('data-id');
                })

                this.ulTask.appendChild(liTask);
            })
        }
    };

    const list = document.querySelector('#tasks');
    let myToDoList = [];
    myProjectList = new Project(list);
    document.querySelector('#addBtn').addEventListener('click', function() {
    myProjectList.add()
    })
}

export default addToDo