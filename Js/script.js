const headerBurger = document.querySelector(".header__burger");

headerBurger.addEventListener("click", () => {
  const headerMenu = document.querySelector(".header__menu");
  //headerMenu.classList.toggle("menu-mobile");
  headerMenu.classList.toggle("active");
  headerBurger.classList.toggle("active");
});
const menuList = document.querySelector(".menu-list");
const navLinks = document.querySelectorAll(".nav");

menuList.addEventListener("click", closeMenu);
function closeMenu(event) {
  if (event.target.classList.contains("nav")) {
    event.target.parentNode.parentNode.parentElement.classList.remove("active");
  }
}
