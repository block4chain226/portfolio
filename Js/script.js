const headerBurger = document.querySelector(".header__burger");

headerBurger.addEventListener("click", () => {
  const headerMenu = document.querySelector(".header__menu");
  //headerMenu.classList.toggle("menu-mobile");
  headerMenu.classList.toggle("active");
  headerBurger.classList.toggle("rotate");
  const beforeR = headerBurger.querySelectorAll("::before");
});
const menuList = document.querySelector(".menu-list");
const navLinks = document.querySelectorAll(".nav");

menuList.addEventListener("click", closeMenu);
function closeMenu(event) {
  if (event.target.classList.contains("nav")) {
    event.target.parentNode.parentNode.parentElement.classList.remove("active");
  }
}

//portfolio

let but = document.querySelector(".portfolio__item-container");
let portfolioButton = document.querySelector(".portfolio__button");

let portImages = document.querySelectorAll(".portfolio-image");
but = addEventListener("click", (event) => {
  event.preventDefault();
  if (
    (event.target && event.target.tagName == "DIV") ||
    (event.target && event.target.tagName == "BUTTON")
  ) {
    console.log(event.target.dataset);
    portImages.forEach((img, index) => {
      img.src = `/Assets/img/gallery/${event.target.dataset.season}/${
        index + 1
      }.jpeg`;
    });
  }
});
