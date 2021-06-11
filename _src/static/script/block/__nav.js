const burgerBtn = document.querySelector('.header__container-burger');
const nav = document.querySelector('.nav');
const link = document.querySelector('.nav__item-link--active')

burgerBtn.addEventListener('click', () => {
  if(nav.classList.contains('nav--none')) {
    nav.classList.remove('nav--none');
    nav.classList.add('nav--block');
    burgerBtn.classList.remove('header__container-burger--opened');
    burgerBtn.classList.add('header__container-burger--closed');
    link.setAttribute('style', 'border: 1px solid transparent;');
  } else {
    nav.classList.add('nav--none');
    nav.classList.remove('nav--block');
    burgerBtn.classList.remove('header__container-burger--closed');
    burgerBtn.classList.add('header__container-burger--opened');
  }
});
