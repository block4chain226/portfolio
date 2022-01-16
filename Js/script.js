const headerBurger = document.querySelector(".header__burger");

headerBurger.addEventListener("click", () => {
  const headerMenu = document.querySelector(".header__menu");
  //headerMenu.classList.toggle("menu-mobile");
  headerMenu.classList.toggle("active");
});
