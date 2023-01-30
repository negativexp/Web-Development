import * as tool from "./newTools.js";

const showcase = document.getElementById("showcase1")

const images = ["images/1.jpg", "images/2.jpg", "images/3.jpg",
                "images/4.jpg", "images/5.jpg"]

tool.createImageShowcase(images, false, showcase, 1000, "easeInOutQuart")
tool.setImageShowcaseRadioStyle()