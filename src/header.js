

function loadHeader() {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.id = 'header';

    const title = document.createElement('h1');
    title.innerHTML = 'To Do List';
    header.appendChild(title);
    content.appendChild(header);
    document.body.appendChild(content);
}

export default loadHeader