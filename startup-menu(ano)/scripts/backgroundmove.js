// const el = document.getElementById("module");
const el = document.querySelector('.background');

el.addEventListener("mousemove", (e) => {
    let speed = 30;
    const windowWidth = window.innerWidth / speed;
    const windowHeight = window.innerHeight / speed
    // x = -e.offsetX / speed;
    // y = -e.offsetY / speed;

    x = -e.clientX / windowWidth;
    y = -e.clientY / windowHeight;

    // console.log(x + " ; " + y);
    
    
    // el.style.transform = `translate3d(-${x}%, -${y}%, 0)`;
    el.style.setProperty('--x', x + "px");
    el.style.setProperty('--y', y + "px");
});
  