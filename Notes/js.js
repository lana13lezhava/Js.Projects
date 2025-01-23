const btnEl = document.querySelector('.btn')
const notescontainer = document.querySelector('.notes-container')

function showNotes() {
    notescontainer.innerHTML = localStorage.getItem('note')
}

function updeteStorage() {
    localStorage.setItem('note', notescontainer.innerHTML)
}

btnEl.addEventListener('click', function () {
    let pi = document.createElement('p')
    let img = document.createElement('img')
    pi.setAttribute('contenteditable', 'true')
    pi.className = 'input-box'
    img.src = 'delete (1).png'
    notescontainer.appendChild(pi).appendChild(img)
    updeteStorage()
})
notescontainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updeteStorage()
    } else if (e.target.tagName === 'P') {
        pEl = document.querySelectorAll('.input-box')
        pEl.forEach(nk => {
            nk.addEventListener('keyup', updeteStorage)
        })
        updeteStorage()
    }


})
showNotes()
