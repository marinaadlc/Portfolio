var burger = document.querySelector(".nav-burger-button");
var nav = document.querySelector(".phone-nav .nav-bar");
var burgerIcon = document.querySelector(".burger-icon");
var closeIcon = document.querySelector(".close-icon");
var body = document.querySelector("body");
var customSel = document.querySelector(".custom-select");



/* Mobile menu toggle */
function menuToggle(){
    customSel.classList.toggle("hidden");
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





/* filterSelection("todos")
function filterSelection(filter){
    var x,i;
    x = document.getElementsByClassName("works-select");
    if (filter=="todos")filter="";
    for(i=0; i<x.length; i++){
        w3RemoveClass(x[i],"show");
        if (x[i].className.indexOf(filter) > -1) w3AddClass(x[i], "show");
    }   
}
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }  
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
var customSelector = document.querySelector(".custom-select");
var selectors = customSelector.getElementsByClassName("works-select");
for (var i = 0; i < selectors.length; i++) {
    selectors[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} */