// ---------- Меню ----------

var nav = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__logo-toggle');

nav.classList.remove('navigation--nojs');
nav.classList.add('navigation--closed');

navToggle.addEventListener('click', function() {
  if(nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    navToggle.classList.remove('navigation__logo-toggle--open');
    navToggle.classList.add('navigation__logo-toggle--close');
  } else {
    nav.classList.add('navigation--closed');
    navToggle.classList.remove('navigation__logo-toggle--close');
    navToggle.classList.add('navigation__logo-toggle--open');
  }
});
