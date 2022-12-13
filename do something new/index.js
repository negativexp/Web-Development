var header = document.body.querySelector("header");
var sections = document.body.querySelectorAll("section")
var lastSection;
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

startEverything();

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
        duration: 250
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
        duration: 750
    })
    .add({
        targets: ".welcome-menu ul",
        opacity: 1
    })
    .add({
        targets: ".welcome-menu li",
        paddingTop: "0px"
    })
    .add({
        targets: ".navbar ul li",
        top: "-100px",
        delay: function(el, i, l) {
            return i * 100;
        }
    })

    anime({
        targets: "body",
        delay: 6750,
        backgroundColor: "rgb(52, 52, 52)",
        easing: 'easeInOutSine',
        duration: 750
    })
}

var list = Array.from(document.getElementById("web-content").children)

function getSection(item) {
    if(lastSection != item) {
        setZindex();
        if(!header.classList.contains("topWindow")) {
            //get header to top and bring from bottom a selected item
            header.classList.add("topWindow")
            anime({
                targets: item,
                top: "20%",
                easing: "easeOutQuad"
            })
        } else {
            //header is on top already
            //make the visible section change brightness
            //bring up clicked section
    
            list.forEach(el => {
                if(el != item) {
                    var tl = anime.timeline({
                        targets: el,
                        easing: "easeOutQuad",
                        duration: 1000
                        
                    })
                    .add({
                        targets: item,
                        top: "20%",
                        easing: "easeOutQuad",
                        duration: 2000
                    })
                }
            })
        }
        lastSection = item
    }
}

function setZindex(section) {
    var sectionsLength = document.querySelectorAll("section")
    section.style.zIndex = sectionsLength--;
    lastSection.style.zIndex = sectionsLength--;
    section.forEach(el => {
        if(el != section && el != lastSection) {
            el.style.zIndex = sectionsLength--;
        }
    })
}

function removeTopWindow() {
    document.body.querySelector("header").classList.remove("topWindow")
    console.log("remove")
    anime({
        targets: list,
        top: "100%",
        duration: 1000,
        easing: "easeOutQuad"
    })
}