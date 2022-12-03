//get all sections
const sections = document.querySelectorAll("section");

//get all buttons in navbar
const navbarButtons = document.querySelector(".navbar").querySelectorAll("button")

//first section to be visible
lastSection = sections[0];

function sectionHandle(section) {
    if(section != lastSection) {
        sections.forEach(element => {
            if(element == section) {
                setAnimationShowSectionClass(element)
                setZindex(element);

                lastSection = element;
            }
        })
    }
}

function enableNavbarButtons() {
    navbarButtons.forEach(element => {
        element.disabled = false;
    })
}

function disableNavbarButtons() {
    navbarButtons.forEach(element => {
        element.disabled = true;
    })
}

function getSection(index) {
    return sections[index - 1];
}

function setAnimationShowSectionClass(section) {
    disableNavbarButtons();
    sections.forEach(element => {
        if(element == section) {
            element.classList.add("animationShowSection");
            element.classList.remove("animationBlurContent");
        } else {
            element.classList.remove("animationShowSection");
            element.classList.add("animationBlurContent");
        }
    })
    setTimeout(() => {
        enableNavbarButtons();
    }, 1500);
} 

function setZindex(section) {
    var sectionsLength = sections.length;

    //visible
    section.style.zIndex = sectionsLength--;
    //under
    lastSection.style.zIndex = sectionsLength--;

    sections.forEach(element => {

        if(element != section && element != lastSection) {
            //hidden
            element.style.zIndex = sectionsLength--;
        }

    })
}