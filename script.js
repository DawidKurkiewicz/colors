const h1 = document.querySelector("h1")
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY
    const width = window.innerWidth
    const height = window.innerHeight
    h1.textContent = `${x}, ${y}`

    const color1 = x / width * 100
    const color2 = y / height * 100
    const color3 = ((x / width * 100) + (y / height * 100) / 2)
    document.body.style.backgroundColor = `rgb(${color1}%, ${color2}%, ${color3}%)`
})