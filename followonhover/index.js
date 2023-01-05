console.log("loaded")

var box = document.querySelector(".box")
var followbox = document.querySelector(".followbox")
followbox.style.opacity = 0

box.addEventListener("mousemove", function(event) {
    boxMM(event)
})

function boxMM(e) {
    followbox.style.top = e.pageY + 15 + "px"
    followbox.style.left = e.pageX + 15 + "px"
}

function mouseLeave() {
    followbox.style.opacity = 0
}

function mouseEnter() {
    followbox.style.opacity = 1
}