const hammer = document.querySelector(".hammer")
const btn = document.querySelector(".btn")
let rotate = -100




setInterval(() => {
    hammer.style.transform = `rotate(${rotate}deg)`
    if(rotate <= 70) {
        rotate++
    }
    else if(rotate => 120) {
        rotate = 0
    }
}, 50);