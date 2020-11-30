var burger = document.querySelector(".nav-burger-button");
var nav = document.querySelector(".phone-nav .nav-bar");
var burgerIcon = document.querySelector(".burger-icon");
var closeIcon = document.querySelector(".close-icon");
var body = document.querySelector("body");

/* Mobile menu toggle */
function menuToggle(){
    nav.classList.toggle('hide-up');
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    body.classList.toggle('fixed');
};
burger.addEventListener('click',menuToggle);

/* Work filter */
var filterOg = "todos";
function filterSelection(filter){
 var works = document.getElementsByClassName("mini-trabajo");
 if(filter!==filterOg && filter!=="todos"){
   var showEls = document.getElementsByClassName(filter);
   for (i=0; i<works.length; i++){
     works[i].classList.add("hidden");
   };
   for (i=0; i<showEls.length; i++){
     showEls[i].classList.remove("hidden");
   }
 }
 if (filter=="todos"){
   for (i=0;i<works.length; i++){
     works[i].classList.remove("hidden");
   }
 }
}
