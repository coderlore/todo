function setActive(li) {
    document.querySelectorAll('.project').forEach(li => {
        li.addEventListener('click',() => {
            const sidebar = li.parentElement;
            const navDiv = sidebar.parentElement;
            const contentDiv = navDiv.parentElement;
            const tabData = li.getAttribute('data-id')
            const tabActivate = contentDiv.querySelector(`.tab-content[data-id="${tabData}"]`)

            sidebar.querySelectorAll('.project').forEach(li => {
                li.setAttribute('active', 'none')
            })
            contentDiv.querySelectorAll('.tab-content').forEach(tab => {
                tab.setAttribute('content-active','none')
            })
            li.setAttribute('active','show')
            tabActivate.setAttribute('content-active','show')
        })
    });
}

export default setActive