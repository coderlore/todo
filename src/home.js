import addToDo from "./addToDo.js";

function loadHome() {
    const content = document.querySelector('#content');
    const homePage = document.createElement('div');

    const title = document.createElement('h1');
    title.innerHTML = 'To Do List';
    homePage.appendChild(title);

    const project1 = document.createElement('h2');
    project1.innerHTML = 'Project'
    homePage.appendChild(project1);

    const inputTask = document.createElement('input');
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
    
    addToDo()
}

export default loadHome