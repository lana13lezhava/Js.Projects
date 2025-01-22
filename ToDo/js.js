const inputEl = document.getElementById('input')
const listConteiner = document.getElementById('list-container')

function getList() {
    if (inputEl.value === '') {
        alert('You must write smething')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputEl.value
        listConteiner.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputEl.value = ''
    seveDate()
}

listConteiner.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        seveDate()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        seveDate()
    }

})

function seveDate() {
    localStorage.setItem('data', listConteiner.innerHTML)
}

function showTask() {
    listConteiner.innerHTML = localStorage.getItem('data')
}
showTask()
