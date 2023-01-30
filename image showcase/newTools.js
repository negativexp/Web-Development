export function createImageShowcase(images, loadAll, showcaseDiv, timeDuration, easingType) {
    //load images
    function loadImages() {
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
    //create checkbuttons
    function createRadios() {
        const buttonsDiv = document.createElement("div")
        buttonsDiv.className = "newToolsImageShowcaseRadioDiv"
        buttonsDiv.style.zIndex = 100
        showcaseDiv.appendChild(buttonsDiv)
        var counter = 0
        images.forEach(el => {
            var divRadio = document.createElement("div")
            divRadio.className = "newToolsImageShowCaseRadio"
            var radio = document.createElement("input")
            radio.type = "radio"
            radio.value = counter
            radio.name = "newToolsImageShowCaseRadios"
            divRadio.appendChild(radio)
            buttonsDiv.appendChild(divRadio)
            counter++
        })
        document.querySelectorAll("input")[0].checked = true
    }
    //add onClick function to each radio button
    function addRadioOnClick() {
        showcaseDiv.querySelectorAll("input").forEach(el => {
            el.onclick = () => {
                radioOnClick(el, showcaseDiv, loadAll, images, timeDuration, easingType)
            }
        })
    }
    //on click
    var odd = true
    var imgSelectedBefore = 0
    function radioOnClick(el) {
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

    function create() {
        loadImages()
        createRadios()
        addRadioOnClick()
    }
    create()
}

export function setImageShowcaseRadioStyle() {
    const style = document.createElement("style")
    style.textContent = 
    `
    .newToolsImageShowcaseRadioDiv {
        opacity: 0.3;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
    
        padding: 10px;
    
        border-radius: 10px;
    
        display: flex;
        gap: 10px;
    
        top: 85%;
        left: 50%;
        transform: translateX(-50%);
    }
    .newToolsImageShowcaseRadioDiv:hover {
        opacity: 1;
    }
    input[type="radio"] {
        background-color: transparent;
        border: .0625em solid rgba(255,255,255,.5);
        border-radius: 50%;
        box-shadow: inset 0 0 0 0 white;
        cursor: pointer;
        font: inherit;
        height: 1em;
        outline: none;
        width: 1em;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
      
      input[type="radio"]:checked {
        background-color: white;
        box-shadow: inset 0 0 0 .1875em #47d1da;
        -webkit-transition: background .15s, box-shadow .1s; 
        transition: background .15s, box-shadow .1s; 
      }
    `

    document.head.appendChild(style)
}