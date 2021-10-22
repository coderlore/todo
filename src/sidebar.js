function sidebar() {
    const content = document.querySelector('#content');
    content.id = 'content';
    const projectTitle = document.createElement('h2');
    const nav = document.createElement('nav');
    const projectList = document.createElement('ul');
    
    //projectList.innerHTML = 'Project Name Placeholder';
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

    const span = document.createElement('span');
    span.classList = 'close';
    span.innerHTML = '&times';
    modalContent.appendChild(span);

    const projectFormTitle = document.createElement('h3');
    projectFormTitle.innerHTML = 'New Project';
    modalContent.appendChild(projectFormTitle);

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
    // Move to class 
    /*addProjectBtn.addEventListener('click', function() {
        let projectName = document.querySelector('#inputProject').value;
        alert(projectName)
        modal.style.display = 'none';
        //if this works, need to put project into it's own li and then 
        //add to a projects array
    })*/
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

    const projectAll = [];
    class Project {
        constructor(project) {
            this.ulProject = project; 
        };

        add() {
            let projectInput = document.querySelector('#inputProject').value;
            if (projectInput == "") {
                alert('No task was entered. Try again!');
            } else {
                const projectObject = {
                    id: projectAll.length,
                    projectInput: projectInput,
                }
                projectAll.push(projectObject);
            this.display();
            document.querySelector('#inputProject').value = '';
            modal.style.display = 'none';
            }
        }

        display() {
            this.ulProject.innerHTML = '';
            
            projectAll.forEach((object_item) => {
                const liProject = document.createElement('li');

                liProject.innerText = object_item.projectInput;
                liProject.setAttribute('data-id', object_item.id);

                liProject.addEventListener('click', function(e) {
                    const selectId = e.target.getAttribute('data-id');
                })

                this.ulProject.appendChild(liProject);
            })
        }
    };

    const list = document.querySelector('#projects');
    let myProjectList = [];
    myProjectList = new Project(list);
    addProjectBtn.addEventListener('click', function() {
        myProjectList.add();
        //console.table(projectAll)
    })
}

export default sidebar