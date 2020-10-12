// Burger Menu

var elNav = document.querySelector(".nav");
var elNavList = document.querySelector(".nav__list");
var elSocialList = document.querySelector(".nav__socials-list");
var elButton = document.querySelector(".nav__button");

elButton.addEventListener("click", function() {
	elButton.classList.toggle("nav__button--close");
	elSocialList.classList.toggle("nav__socials-list--toggle");
	elNavList.classList.toggle("nav__list--toggle");
});


// noJS

elNav.classList.remove("nojs");
document.body.classList.remove("nojs");
