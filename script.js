//MOUSEMOVE
const element = document.createElement("h1")
document.body.appendChild(element)
const h1 = document.querySelector("h1")
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY
    const width = window.innerWidth
    const height = window.innerHeight
    h1.textContent = ` Mouse position : ${x}, ${y}`

    const color1 = x / width * 100
    const color2 = y / height * 100
    const color3 = ((x / width * 100) + (y / height * 100) / 2)
    document.body.style.backgroundColor = `rgb(${color1}%, ${color2}%, ${color3}%)`
})

//CLICK

// document.body.addEventListener("click", (event) => {
//     const color = getColor(event)
//     document.body.style.backgroundColor = color
// })

// const getColor = (e) => {
//     if (e.clientX % 2 === 0) {
//         if (e.clientY % 2 === 0) {
//             return "red"
//         } else {
//             return "orange"
//         }
//     }
//     else {
//         if (e.clientY % 2 === 0) {
//             return "green"
//         } else {
//             return "blue"
//         }
//     }
// }
