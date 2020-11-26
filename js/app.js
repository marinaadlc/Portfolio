var burger = document.querySelector("#nav-burger-button");
var nav = document.querySelector(".nav-bar");
var burgerIcon = document.querySelector("#burger-icon");
var closeIcon = document.querySelector("#close-icon");

queryHandler();
window.onresize=queryHandler;
function queryHandler(){
    if (window.matchMedia("(min-width: 700px)").matches){
        nav.classList.remove('hidden');
        nav.classList.remove('nav-phone-view');
    }else{
        nav.classList.add('hidden');
        nav.classList.add('nav-phone-view');
        burgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

burger.addEventListener('click',function(){
    nav.classList.toggle('hidden');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});