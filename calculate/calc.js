const dysplay = document.getElementById('dysplay')

function appendToDisplay(input) {
    dysplay.value += input
}
function clearDisplay() {
    dysplay.value = ''
}
function calculate() {
    try {
        dysplay.value = eval(dysplay.value)
    } catch (error) {
        dysplay.value = 'error'
    }
}