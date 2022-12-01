const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
const section5 = document.getElementById("section5");

sections = [section1, section2, section3, section4, section5]


lastSection = 0;

function sectionHandle(section) {

    // sections.forEach(element => {
    //     if(element != sections[section-1]) {
    //         console.log(element)
    //         element.style.zIndex = "-1";
    //     }
    // });

    if(section != lastSection) {
        if(section == 1) {
            setZindex(sections[0])
            sections[0].className = "animationClass"

            sections.forEach(element => {
                if(element != sections[0]) {
                    element.classList.remove("animationClass")
                }
            });

            lastSection = section
        }
        if(section == 2) {
            setZindex(section)
            sections[1].className = "animationClass"

            sections.forEach(element => {
                if(element != sections[1]) {
                    element.classList.remove("animationClass")
                }
            });

            lastSection = section
        }
        if(section == 3) {
            setZindex(section)
            sections[2].className = "animationClass"
            sections[2].style.zIndex = "99";

            sections.forEach(element => {
                if(element != sections[2]) {
                    element.style.zIndex = "1";
                    element.classList.remove("animationClass")
                }
            });

            lastSection = section
        }
        if(section == 4) {
            setZindex(section)
            sections[3].className = "animationClass"
            sections[3].style.zIndex = "99";

            sections.forEach(element => {
                if(element != sections[3]) {
                    element.style.zIndex = "1";
                    element.classList.remove("animationClass")
                }
            });

            lastSection = section
        }
        if(section == 5) {
            setZindex(section)
            sections[4].className = "animationClass"
            sections[4].style.zIndex = "99";

            sections.forEach(element => {
                if(element != sections[4]) {
                    element.style.zIndex = "1";
                    element.classList.remove("animationClass")
                }
            });

            lastSection = section
        }
    }
}

function setZindex(section) {
    let counter = 0;

    sections.map((element) => {
        if(section.id != element.id) {
            console.log(section.id, " false")
        } else {
            console.log(element.id, "true")
        }
        console.log(counter++)
    })
}