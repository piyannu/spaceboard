const board = document.querySelector('#board')
const colors = ['#6d1b9c', '#cf80fd', '#fb0ec8', '#fb0e6d', '#a93d68', '#ff8fbc', '#9a3c61']
let SQUARES_NUMBER = 644


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => 
    // setColor(square))

    // square.addEventListener('mouseleave', () => 
    // removeColor(square))

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

// function setColor(element) {
//     const color = getRandomColor()
//     element.style.backgroundColor = color
//     element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }
// function removeColor(element) {
//     element.style.backgroundColor = '#1d1d1d'
//     element.style.boxShadow = `0 0 2px #000`
 
function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`

}
// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.length)
//     return colors[index]
// }
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}