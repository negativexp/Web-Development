mainMenuSVG = [
    document.getElementById("svg1"),
    document.getElementById("svg2"),
    document.getElementById("svg3"),
    document.getElementById("svg4"),
    document.getElementById("svg5")
]

mainMenuSVG.forEach(element => {
    element.style.opacity = 0
});

function startEverything(button) {
    console.log("lets go.")

    mainMenuSVG.forEach(element => {
        element.style.opacity = 1
    });

    var tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 1000
    });

    tl.add({
        targets: button,
        left: "-10%",
        duration: 1000
    })
    .add({
        targets: "#svg1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1250,
        direction: 'alternate',
    })
    .add({
        targets: "#svg1",
        opacity: 0,
        duration: 250
    })
    .add({
        targets: "#svg2",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1250,
        direction: 'alternate',
    })
    .add({
        targets: "#svg2",
        opacity: 0,
        duration: 250
    })
    .add({
        targets: "#svg3",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1250,
        direction: 'alternate',
    })
    .add({
        targets: "#svg3",
        opacity: 0,
        duration: 250
    })
    .add({
        targets: "#svg4",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        direction: 'alternate',
    })
    .add({
        targets: "#svg5",
        opacity: [0, 1],
        duration: 1000
    })
    .add({
        targets: ".navbar ul li",
        top: "-50px",
        delay: function(el, i, l) {
            return i * 100;
        }
    })
}

function pushDownOption(item) {
    anime({
        targets: item,
        top: 0,
        duration: 150,
        easing: "easeInOutSine",
    })
}

function pushUpOption(item) {
    anime({
        targets: item,
        top: "-50px",
        duration: 150,
        easing: "easeInOutSine",
    })
}

function getSection(item) {
    var list = Array.from(document.getElementById("web-content").children)
    for(let i = 0; i < list.length; i++) {
        if(list[i] == item) {
            anime({
                targets: item,
                left: 0,
                duration: 500
            })
        } else {
            anime({
                targets: list[i],
                left: "-100%",
                duration: 500
            })
        }
    }
}