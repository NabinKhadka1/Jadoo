// const navMenu = document.getElementById("nav__menu");
const dropdownItems = document.querySelector(".dropdown__items");
const navMenu = document.getElementById("nav__menu");
navMenu.onclick = function () {
  dropdownItems.classList.toggle("open");
};
