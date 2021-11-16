import { projectAll } from "./sidebar.js"
import loadHome from "./home.js";
import setActive from "./setActive.js"

function addProject() {
    class Project {
        constructor(project) {
            this.ulProject = project; 
        };

        add() {
            const myModal = document.querySelector('#myModal');
            let projectInput = document.querySelector('#inputProject').value;
            if (projectInput == "") {
                alert('No task was entered. Try again!');
            } else {
                const projectObject = {
                    id: projectAll.length,
                    projectInput: projectInput,
                    taskList: {},
                }
                projectAll.push(projectObject);
            this.display();
            document.querySelector('#inputProject').value = '';
            myModal.style.display = 'none';
            loadHome();
            }
        }

        display() {
            this.ulProject.innerHTML = '';
            const projectList = document.querySelector('#projects');
            
            projectAll.forEach((object_item) => {
                const liProject = document.createElement('li');

                liProject.innerText = object_item.projectInput;
                liProject.removeAttribute('active', 'show');
                liProject.setAttribute('data-id', object_item.id);
                liProject.setAttribute('active', 'none');
                liProject.classList.add('project');

                projectList.addEventListener('click', (e) => {
                    setActive(liProject);
                });

                this.ulProject.appendChild(liProject);
                if (object_item.id == (projectAll.length - 1))  {
                    liProject.setAttribute('content-active', 'show');
                }
            })
        }
    };

    const list = document.querySelector('#projects');
    let myProjectList = [];
    myProjectList = new Project(list);
    myProjectList.display();
    addProjectBtn.addEventListener('click', function() {
        myProjectList.add();
        const contentDiv = document.querySelector('#content');
        let whichOne = projectAll.length - 1;
        let activeProject = contentDiv.querySelector(`.tab-content[data-id="${whichOne}"]`);
        contentDiv.querySelectorAll('.tab-content').forEach(tab => {
            tab.setAttribute('content-active','none')
        })
        activeProject.setAttribute('content-active','show')
    })
}

export default addProject