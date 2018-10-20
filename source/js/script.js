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

// ---------- Яндекс Карта ----------

if (typeof ymaps !== "undefined") {
  ymaps.ready(init);
}

var myMap;
var myPlacemark;

function init() {
  myMap = new ymaps.Map('map', {
    center: [59.938913419022086,30.322913165344634],
      zoom: 16,
      controls: []
    }),
  myPlacemark = new ymaps.Placemark([59.93875191633704,30.32310628439369], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [67, 100],
    iconImageOffset: [-30, -90]
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
}
