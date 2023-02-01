// tabs

let tabsBtn = document.querySelectorAll('.work-stages__info__link');
let tabsItem = document.querySelectorAll('.work-stages__item');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {btn.classList.remove('work-stages__info__link--active')});
    e.currentTarget.classList.add('work-stages__info__link--active');

    tabsItem.forEach(function(element) {
      element.classList.remove('work-stages__item--active');
      element.classList.add('work-stages__item--unactive')
    });
    document.querySelector(`[data-target="${path}"]`).classList.remove('work-stages__item--unactive');
    document.querySelector(`[data-target="${path}"]`).classList.add('work-stages__item--active');
  });
});

// Swiper

const swiper = new Swiper('.banner__swiper', {
  speed: 400,
  loop: true,
  pagination: {
    el: '.banner__pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  a11y: {
    paginationBulletMessage: 'Слайд номер {{index}}',
  },
});

// Accordion

new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'faq__item__bottom',
  activeClass: 'faq--active',
});

// header search

document.querySelector(".header__button").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
   let form = document.querySelector(".header__form");
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__button").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header__form");
  if (!target.closest(".header__search")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header__button").classList.remove("active")
  }
})

// menu

document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".header__nav-mobile").classList.add("active");
})
document.querySelector(".header__nav__close").addEventListener("click", function() {
  document.querySelector(".header__nav-mobile").classList.remove("active");
})
