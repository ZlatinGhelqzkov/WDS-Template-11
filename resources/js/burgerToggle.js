let burger = document.getElementById("burger");
let header__bottom = document.getElementById("header__bottom");
let header__top__links = document.getElementById("header__top-links");

function burgerToggle(){ 
    burger.classList.toggle("clicked");
    header__bottom.classList.toggle("opened");
    header__top__links.classList.toggle("active");
}

//OUTSIDE CLICK

document.addEventListener('click', function(event) {

    // Check if the navigation is open
    if (header__bottom.classList.contains("opened")) {
        // Check if the click is outside the nav and burger
        if (!header__bottom.contains(event.target) && !burger.contains(event.target) && !header__top__links.contains(event.target)) {
            // Close the nav
            header__bottom.classList.remove("opened");
            burger.classList.remove("clicked");
            header__top__links.classList.remove("active");
        }
    }
});