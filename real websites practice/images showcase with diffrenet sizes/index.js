var mX = null
var mY = null
const box = document.getElementById("box")

window.addEventListener("mousemove", (e) => {
    mX = e.clientX
    mY = e.clientY
})

function imgClick() {
    box.style.left = mX + 'px';
    box.style.transform = "translateX(-cacl" + mX + "px)" 
    box.style.top = mY + 'px';
    console.log(mY, mX)
}