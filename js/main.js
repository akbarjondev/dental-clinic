// Burger Menu

var elButton = document.querySelector(".nav__button");
var elNavList = document.querySelector(".nav__list");
var elSocialList = document.querySelector(".nav__socials-list");

elButton.addEventListener("click", function() {
	elButton.classList.toggle("nav__button--close");
	elSocialList.classList.toggle("nav__socials-list--toggle");
	elNavList.classList.toggle("nav__list--toggle");
});


// noJS

// var elMenu = document.querySelector(".menu");

// elMenu.classList.remove("nojs");
