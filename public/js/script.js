const toggle = document.querySelector(".circle");
const toggleActive = document.querySelector(".toggle");
const onOff = document.querySelector(".onoff");


toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    toggleActive.classList.toggle("active");

    // if (toggle.classList.contains("active")) {
    //     onOff.innerHTML = "LIGHT";
    // }
    // else {
    //     onOff.innerHTML = "DARK";
    // }
})