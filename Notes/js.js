const btn = document.querySelector('.btn')
const notesContainer = document.querySelector('.notes-container')
const pBox = document.querySelector('.p-box')


function showNotes() {
    notesContainer.innerHTML = localStorage.getItem('notes')
}

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML)
}



btn.addEventListener('click', function () {
    let list = document.createElement('p')
    let img = document.createElement('img')
    list.setAttribute('contenteditable', 'true')
    list.className = 'p-box'
    img.src = "delete (1).png"
    notesContainer.appendChild(list).appendChild(img)
})
notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateStorage()
    }
})