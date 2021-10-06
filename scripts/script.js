// JavaScript Document
var menuKnop = document.querySelector("body > section nav button img");

function hamburgerMenu() {
    var menu = document.querySelector("body > section nav ul");
    menu.classList.toggle("MenuUit");
}

menuKnop.addEventListener ("click" , hamburgerMenu);



var loadMoreBtn = document.querySelector("#home main section:nth-of-type(4) > button");
var items = document.querySelector(".items");


function loadMore(){
    items.classList.toggle("load-more");
}

loadMoreBtn.addEventListener("click" , loadMore);