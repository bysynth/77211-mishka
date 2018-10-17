// ---------- Меню ----------

var nav = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__logo-toggle');

nav.classList.remove('navigation--nojs');
nav.classList.add('navigation--closed');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    navToggle.classList.remove('navigation__logo-toggle--open');
    navToggle.classList.add('navigation__logo-toggle--close');
  } else {
    nav.classList.add('navigation--closed');
    navToggle.classList.remove('navigation__logo-toggle--close');
    navToggle.classList.add('navigation__logo-toggle--open');
  }
});

// ---------- Корзина ----------

var links = document.querySelectorAll('.js-basket');
var popup = document.querySelector('.modal-basket');
var overlay = document.querySelector('.overlay');


links.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.add('overlay--show');
    popup.classList.add('modal--show');
  });
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    overlay.classList.remove('overlay--show');
    popup.classList.remove("modal--show");
  }
});

if (overlay !== null) {
  overlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    overlay.classList.remove('overlay--show');
    popup.classList.remove("modal--show");
  });
}
