/*navbar button*/
const show = document.querySelector(".navbar-wrapper");
const showNavButton = document.querySelector(".open-navbar-icon");
const hideNavButton = document.querySelector(".close-navbar-button");

showNavButton.addEventListener('click', function () {
    show.style.visibility = "visible";
});

hideNavButton.addEventListener('click', function () {
    show.style.visibility = "hidden";

})

// const x = Array.from(document.querySelectorAll(".navigation-button"));
// console.log(x);

Array.from(document.querySelectorAll(".navigation-button")).forEach(
    (function (item) {
        console.log(item);
        item.onclick = function () {
            item.parentElement.parentElement.classList.toggle("change");
        }
    })
);