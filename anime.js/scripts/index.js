let allParagraphs = document.querySelectorAll("p")
allParagraphs.forEach(element => {
    element.innerText = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Aliquam ornare wisi eu metus. Vivamus ac leo pretium faucibus. Duis condimentum augue id magna semper rutrum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Quisque tincidunt scelerisque libero. Proin mattis lacinia justo. Aliquam erat volutpat. Vivamus luctus egestas leo. Aenean id metus id velit ullamcorper pulvinar. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est."
});

//observer
//checks if a element is being seen or intrerected with
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if(entry.isIntersecting) {
            console.log("is intersecting")
            animateBlock()
            //entry.target.classList.add("isIntersecting")
        } else {
            console.log("is not intersecting")
            animateBlockReset()
            //entry.target.classList.remove("isIntersecting")
        }
    })
})

//finds all elemetns that contains .hidden query
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

function animateBlock() {
    var elements = document.querySelectorAll(".block")

    anime({
        targets: elements,
        translateX: [-800, 0],
        delay: anime.stagger(250),
        easing: 'easeInOutExpo',
        duration: 1000
    });
}

function animateBlockReset() {
    var elements = document.querySelectorAll(".block")

    elements.forEach(element => {
        anime({
            targets: element,
            translateX: 0,
            duration: 0
        });
    });
}