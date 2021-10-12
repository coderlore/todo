function sidebar() {
    const content = document.querySelector('#content');
    content.id = 'content';
    const project = document.createElement('h2');
    const nav = document.createElement('nav');
    const projectList = document.createElement('h3');
    
    projectList.innerHTML = 'Project Name Placeholder';
    project.innerHTML = 'My Projects';

    nav.appendChild(project);
    nav.appendChild(projectList);
    content.appendChild(nav);
    document.body.appendChild(content);
}

export default sidebar