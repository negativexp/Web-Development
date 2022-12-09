let musicBlocks = document.querySelectorAll(".music-block");

let elementLeft = 0;
let elementTop = 0;

for(let i = 0; i < musicBlocks.length; i++) {

    // var childern = Array.from(musicBlocks[i].children);

    // childern.forEach(el => {
    //     if(el.nodeName.toLowerCase() != "img" && el.className != "music-block-title") {
    //         console.log("is not img")
    //         el.style.opacity = 0;
    //     }
    // })


    if(i % 4 != 0 || i == 0) {
        musicBlocks[i].style.left = elementLeft + "px";
        musicBlocks[i].style.top = elementTop + "px";
        elementLeft = elementLeft + 200;
    } else {
        elementLeft = 0;
        elementTop = elementTop + 200;
        musicBlocks[i].style.left = elementLeft + "px";
        musicBlocks[i].style.top = elementTop + "px";
        elementLeft = elementLeft + 200;
    }
}

function handleMusicBlock(index) {
    handleMusicBlockzIndex(index);
    anime({
        targets: musicBlocks[index-1],
        left: 0,
        top: 0,
        keyframes: [
            {left: 0},
            {top: 0},
            {width: "calc(100% - 50px)"},
            {height: "calc(100% - 50px)"},
        ],
        duration: 0,
        easing: "easeInQuad"
    });
    anime({
        targets: musicBlocks[index-1].querySelector("img"),
        width: "200%",
        filter: "brightness(5%)"
    })
    anime({
        targets: musicBlocks[index-1].querySelector("h2"),
        width: "100%"
    })
    anime({
        targets: [".music-block-content", ".music-block-options"],
        opacity: 1,
        width: "100%",
        easing: "easeInQuad",
        duration: 1000
    })
}

function handleMusicBlockzIndex(index) {
    musicBlocks[index-1].style.zIndex = 2;
    musicBlocks.forEach(element => {
        if(element != musicBlocks[index-1])  {
            element.style.zIndex = 1;
        }
    })
}

function handleGoBackButton(index) {
    console.log("go back")
    anime({
        targets: musicBlocks[index-1],
        left: 0,
        top: 0,
        keyframes: [
            {left: 0},
            {top: 0},
            {width: "150px"},
            {height: "150px"},
        ],
        duration: 0,
        easing: "easeInQuad"
    });
}