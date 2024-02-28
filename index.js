const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.header__burger-menu');
const closeMenu = document.querySelector('.header__close-menu');
burgerMenu.addEventListener('click', (e) => {
  body.classList.toggle('body--fixed');
  nav.classList.toggle('nav--visible');
  burgerMenu.classList.toggle('header__burger-menu--hidden');
  closeMenu.classList.toggle('header__close-menu--hidden');
});
closeMenu.addEventListener('click', (e) => {
  body.classList.toggle('body--fixed');
  nav.classList.toggle('nav--visible');
  burgerMenu.classList.toggle('header__burger-menu--hidden');
  closeMenu.classList.toggle('header__close-menu--hidden');
});
