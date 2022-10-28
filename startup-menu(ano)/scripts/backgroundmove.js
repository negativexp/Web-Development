const el = document.getElementById("module");

el.addEventListener("mousemove", (e) => {
    speed = 20;
    x = -e.offsetX / speed;
    y = -e.offsetY / speed;
    el.style.setProperty('--x', x + "px");
    el.style.setProperty('--y', y + "px");
});
  