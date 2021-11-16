export const projectAll = [{
    id: 0, 
    projectInput: 'Project 1',
    taskList: {},
}]

import addProject from "./addProject.js";
import loadHome from "./home.js";

function sidebar() {
    const content = document.querySelector('#content');
    content.id = 'content';
    const projectTitle = document.createElement('h2');
    const nav = document.createElement('nav');
    const projectList = document.createElement('ul');
    
    projectList.id = 'projects';
    projectTitle.innerHTML = 'My Projects';

    const projectBtn = document.createElement('button');
    projectBtn.id = 'projectBtn';
    projectBtn.innerHTML = '+ New Project';

    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList = 'modal';
    nav.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList = 'modal-content';
    modal.appendChild(modalContent);

    const projectFormTitle = document.createElement('h3');
    projectFormTitle.innerHTML = 'New Project';
    modalContent.appendChild(projectFormTitle);

    const span = document.createElement('span');
    span.classList = 'close';
    span.innerHTML = '&times';
    modalContent.appendChild(span);

    const inputProject = document.createElement('input');
    inputProject.id = 'inputProject';
    inputProject.placeholder = 'Project Name';
    modalContent.appendChild(inputProject);

    const cancelBtn = document.createElement('button');
    cancelBtn.id = 'cancelBtn';
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    })
    modalContent.appendChild(cancelBtn);

    const addProjectBtn = document.createElement('button');
    addProjectBtn.id = 'addProjectBtn';
    addProjectBtn.innerHTML = 'Add Project';
    modalContent.appendChild(addProjectBtn);

    nav.appendChild(projectTitle);
    content.appendChild(nav);
    nav.appendChild(projectList);
    nav.appendChild(projectBtn);
    document.body.appendChild(content);

    let btn = document.getElementById('projectBtn');
    let sn = document.getElementsByClassName('close')[0];
    
    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    })

    sn.addEventListener('click', function() {
        modal.style.display = 'none';
    })

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    })

    addProject();
}

export default sidebar