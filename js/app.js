var burger = document.querySelector("#nav-burger-button");
var nav = document.querySelector("#phone-nav .nav-bar");
var burgerIcon = document.querySelector("#burger-icon");
var closeIcon = document.querySelector("#close-icon");
var body = document.querySelector("body");

function menuToggle(){
    nav.classList.toggle('hide-up');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    body.classList.toggle('fixed');
};

burger.addEventListener('click',menuToggle);