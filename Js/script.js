const i18Obj = {
  en: {
    skills: "Skills",
    portfolio: "Portfolio",
    video: "Video",
    price: "Price",
    contacts: "Contacts",
    "hero-title": "Alexa Rise",
    "hero-text":
      "Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",
    hire: "Hire me",
    "skill-title-1": "Digital photography",
    "skill-text-1": "High-quality photos in the studio and on the nature",
    "skill-title-2": "Video shooting",
    "skill-text-2": "Capture your moments so that they always stay with you",
    "skill-title-3": "Rotouch",
    "skill-text-3": "I strive to make photography surpass reality",
    "skill-title-4": "Audio",
    "skill-text-4":
      "Professional sounds recording for video, advertising, portfolio",
    winter: "Winter",
    spring: "Spring",
    summer: "Summer",
    autumn: "Autumn",
    "price-description-1-span-1": "One location",
    "price-description-1-span-2": "120 photos in color",
    "price-description-1-span-3": "12 photos in retouch",
    "price-description-1-span-4": "Readiness 2-3 weeks",
    "price-description-1-span-5": "Make up, visage",
    "price-description-2-span-1": "One or two locations",
    "price-description-2-span-2": "200 photos in color",
    "price-description-2-span-3": "20 photos in retouch",
    "price-description-2-span-4": "Readiness 1-2 weeks",
    "price-description-2-span-5": "Make up, visage",
    "price-description-3-span-1": "Three locations or more",
    "price-description-3-span-2": "300 photos in color",
    "price-description-3-span-3": "50 photos in retouch",
    "price-description-3-span-4": "Readiness 1 week",
    "price-description-3-span-5": "Make up, visage, hairstyle",
    order: "Order shooting",
    "contact-me": "Contact me",
    "send-message": "Send message",
  },
  ru: {
    skills: "Навыки",
    portfolio: "Портфолио",
    video: "Видео",
    price: "Цены",
    contacts: "Контакты",
    "hero-title": "Алекса Райс",
    "hero-text":
      "Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",
    hire: "Пригласить",
    "skill-title-1": "Фотография",
    "skill-text-1": "Высококачественные фото в студии и на природе",
    "skill-title-2": "Видеосъемка",
    "skill-text-2":
      "Запечатлите лучшие моменты, чтобы они всегда оставались с вами",
    "skill-title-3": "Ретушь",
    "skill-text-3":
      "Я стремлюсь к тому, чтобы фотография превосходила реальность",
    "skill-title-4": "Звук",
    "skill-text-4":
      "Профессиональная запись звука для видео, рекламы, портфолио",
    winter: "Зима",
    spring: "Весна",
    summer: "Лето",
    autumn: "Осень",
    "price-description-1-span-1": "Одна локация",
    "price-description-1-span-2": "120 цветных фото",
    "price-description-1-span-3": "12 отретушированных фото",
    "price-description-1-span-4": "Готовность через 2-3 недели",
    "price-description-1-span-5": "Макияж, визаж",
    "price-description-2-span-1": "Одна-две локации",
    "price-description-2-span-2": "200 цветных фото",
    "price-description-2-span-3": "20 отретушированных фото",
    "price-description-2-span-4": "Готовность через 1-2 недели",
    "price-description-2-span-5": "Макияж, визаж",
    "price-description-3-span-1": "Три локации и больше",
    "price-description-3-span-2": "300 цветных фото",
    "price-description-3-span-3": "50 отретушированных фото",
    "price-description-3-span-4": "Готовность через 1 неделю",
    "price-description-3-span-5": "Макияж, визаж, прическа",
    order: "Заказать съемку",
    "contact-me": "Свяжитесь со мной",
    "send-message": "Отправить",
  },
};

const headerBurger = document.querySelector(".header__burger");
let check = false;
let before = null;
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
let portImages = document.querySelectorAll(".portfolio-image");
const language = document.querySelector(".header__language");

portfolioItemContainer = document
  .querySelector(".portfolio__item-container")
  .addEventListener("click", colorButton);

function colorButton(event) {
  if (
    event.target.classList.contains("portfolio__button") ||
    event.target.classList.contains("button1")
  ) {
    if (before !== null) {
      before.classList.remove("checked");
    }
    event.target.classList.add("checked");
    before = event.target;
    changePhotos(event);
  }
}

function changePhotos(event) {
  portImages.forEach((img, index) => {
    img.src = `/Assets/img/gallery/${event.target.dataset.season}/${
      index + 1
    }.jpeg`;
  });
}
const dataText = document.querySelectorAll("[data-i18Obj]");

language.addEventListener("click", (event) => {
  event.preventDefault();
  const beforeLang = document.querySelector(".active");
  if (beforeLang !== null) {
    beforeLang.classList.remove("active");
  }

  const lang = event.target.dataset.lang || "en";

  event.target.classList.add("active");

  console.log(lang);
  dataText.forEach((item, index) => {
    item.textContent = i18Obj[lang][item.dataset.i18obj];
  });

  ///боды+актыве, <span><a href="" data-lang="en" class="active">en</a></span>
});

const headerDaySwitch = document.querySelector(".header__day-switch");
headerDaySwitch.addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("light");
});

const priceItemContainer = document.querySelector(".price__item-container");
priceItemContainer.addEventListener("click", (event) => {
  event.preventDefault();
  // if (event.target.classList.contains("a")) {

  // }
});
