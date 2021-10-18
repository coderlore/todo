function sidebar() {
    const content = document.querySelector('#content');
    content.id = 'content';
    const project = document.createElement('h2');
    const nav = document.createElement('nav');
    const projectList = document.createElement('ul');
    
    projectList.innerHTML = 'Project Name Placeholder';
    project.innerHTML = 'My Projects';

    const projectBtn = document.createElement('button');
    projectBtn.id = 'projectBtn';
    projectBtn.innerHTML = '+ New Project';
    projectList.appendChild(projectBtn);

    const modal = document.createElement('div');
    modal.id = 'myModal';
    modal.classList = 'modal';
    projectList.appendChild(modal);

    const modalContent = document.createElement('div');
    modalContent.classList = 'modal-content';
    modal.appendChild(modalContent);

    const span = document.createElement('span');
    span.classList = 'close';
    span.innerHTML = '&times';
    modalContent.appendChild(span);

    const projectTitle = document.createElement('h3');
    projectTitle.innerHTML = 'New Project';
    modalContent.appendChild(projectTitle);

    const inputProject = document.createElement('input');
    inputProject.id = 'inputText';
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

    nav.appendChild(project);
    nav.appendChild(projectList);
    content.appendChild(nav);
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
}

export default sidebar