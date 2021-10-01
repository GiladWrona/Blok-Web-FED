// JavaScript Document
var menuKnop = document.querySelector("header nav button img");

function hamburgerMenu() {
    var menu = document.querySelector("header nav ul");
    menu.classList.toggle("MenuUit");
}

menuKnop.addEventListener ("click" , hamburgerMenu);