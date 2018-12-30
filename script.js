const h1 = document.querySelector("h1")
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX
    const y = e.clientY
    const width = window.innerWidth
    const height = window.innerHeight

    h1.textContent = `${x}, ${y}`
})