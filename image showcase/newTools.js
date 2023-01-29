//load images
function loadImages(loadAll, images, showcaseDiv) {
    if(loadAll) {
        images.forEach(imgsrc => {
            if(images[0] != imgsrc) {
                var HTMLimg = document.createElement("img")
                HTMLimg.src = imgsrc
                HTMLimg.setAttribute("style", "left: 100%;")
                showcaseDiv.appendChild(HTMLimg)
            } else {
                var HTMLimg = document.createElement("img")
                HTMLimg.src = imgsrc
                HTMLimg.setAttribute("style", "left: 0%;")
                showcaseDiv.appendChild(HTMLimg)
            }
        });
    } else {
        const img1 = document.createElement("img")
        img1.setAttribute("style", "left: 0%;")
        const img2 = document.createElement("img")
        img2.setAttribute("style", "left: 100%;")
    
        showcaseDiv.appendChild(img1)
        showcaseDiv.appendChild(img2)
        img1.src = images[0]
        img2.src = images[1]
    }
}
//add checkbuttons
function createCheckboxes(showcaseDiv, images, loadAll, timeDuration, easingType) {
    const buttonsDiv = document.createElement("div")
    buttonsDiv.className = "showcase-buttons"
    buttonsDiv.style.zIndex = 100
    showcaseDiv.appendChild(buttonsDiv)
    var counter = 0
    images.forEach(el => {
        var innerdiv = document.createElement("div")
        innerdiv.className = "showcaseCheckbox"
        var innerdiv2 = document.createElement("div")
        innerdiv2.className = "round"
        var checkbox = document.createElement("input")
        var label = document.createElement("label")
        label.setAttribute("for", "showcaseCheckbox"+counter)
        checkbox.type = "checkbox"
        checkbox.value = counter
        checkbox.id = "showcaseCheckbox"+counter
        checkbox.onclick = () => {
            checkBoxOnClick(checkbox, showcaseDiv, loadAll, images, timeDuration, easingType)
        }
        innerdiv2.appendChild(checkbox)
        innerdiv2.appendChild(label)
        innerdiv.appendChild(innerdiv2)
        buttonsDiv.appendChild(innerdiv)
        counter++
    })
    document.querySelectorAll("input")[0].checked = true
}

//on click
var odd = true
var imgSelectedBefore = 0

function checkBoxOnClick(el, showcaseDiv, loadAll, images, timeDuration, easingType) {
    showcaseDiv.querySelectorAll("input").forEach(element => {
       element.checked = false
    });
    el.checked = true
    var currentValue = el.value
    if(!loadAll) {
    const allImages = showcaseDiv.querySelectorAll("img")
    if(currentValue > imgSelectedBefore) {
        if(odd) {
            allImages[1].src = images[currentValue]
            anime({
                targets: allImages[1],
                left: ["100%", "0%"],
                duration: timeDuration,
                easing: easingType
            })
            anime({
                targets: allImages[0],
                left: ["0%", "-100%"],
                duration: timeDuration,
                easing: easingType
            })
            odd = false
        } else {
            allImages[0].src = images[currentValue]
            anime({
                targets: allImages[0],
                left: ["100%", "0%"],
                duration: timeDuration,
                easing: easingType
            })
            anime({
                targets: allImages[1],
                left: ["0%", "-100%"],
                duration: timeDuration,
                easing: easingType
            })
            odd = true
        }
    }
    if(currentValue < imgSelectedBefore) {
        if(odd) {
            allImages[1].src = images[currentValue]
            anime({
                targets: allImages[0],
                left: ["0%", "100%"],
                duration: timeDuration,
                easing: easingType
            })
            anime({
                targets: allImages[1],
                left: ["-100%", "0%"],
                duration: timeDuration,
                easing: easingType
            })
            odd = false
        } else {
            allImages[0].src = images[currentValue]
            anime({
                targets: allImages[0],
                left: ["-100%", "0%"],
                duration: timeDuration,
                easing: easingType
            })
            anime({
                targets: allImages[1],
                left: ["0%", "100%"],
                duration: timeDuration,
                easing: easingType
            })

            odd = true
        }
    }
    } else {
    const allImages = showcaseDiv.querySelectorAll("img")
    if(currentValue > imgSelectedBefore) {
        anime({
            targets: allImages[imgSelectedBefore],
            left: ["0%", "-100%"],
            duration: timeDuration,
            easing: easingType
        })
        anime({
            targets: allImages[currentValue],
            left: ["100%", "0%"],
            duration: timeDuration,
            easing: easingType
        })
    }
    if(currentValue < imgSelectedBefore) {
        anime({
            targets: allImages[imgSelectedBefore],
            left: ["0%", "100%"],
            duration: timeDuration,
            easing: easingType
        })
        anime({
            targets: allImages[currentValue],
            left: ["-100%", "0%"],
            duration: timeDuration,
            easing: easingType
        })
    }
    }
imgSelectedBefore = el.value
}

function start(images, loadAll, showcaseDiv, duration, easing) {
    loadImages(loadAll, images, showcaseDiv)
    createCheckboxes(showcaseDiv, images, loadAll, duration, easing)
}

export function createImageShowcase(images, loadAll, showcaseDiv, duration, easing) {
    start(images, loadAll, showcaseDiv, duration, easing)
}