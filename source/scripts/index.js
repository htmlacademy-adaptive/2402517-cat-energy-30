const menuToggle = document.querySelector('button.header__toggle');
const menu = document.querySelector('nav.header__nav');
const viewPort = window.innerWidth;
const sliderToggle = document.querySelector('button.slider__toggle');
const sliderBefore = document.querySelector('div.slider__before');
const sliderAfter = document.querySelector('div.slider__button-delimiter');
const sliderContainer = document.querySelector('div.example__slider');
let mousePressed = false;

// open menu (открывать навигацию при изменении ширины !не получилось!);
// если так не норм - отключите скрипт;
if (viewPort < 768) {
  window.addEventListener('load', () => {
    menu.classList.add('header__nav--has-close');
  });
}

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('header__toggle--has-open');
  menu.classList.toggle('header__nav--has-open');
  menu.classList.toggle('header__nav--has-close');
});

// slider
sliderToggle.addEventListener('mousedown', () => {
  mousePressed = true;
});

document.addEventListener('mouseup', () => {
  mousePressed = false;
});

document.addEventListener('mousemove', (event) => {
  if (mousePressed) {
    const rightBorder = sliderAfter.getBoundingClientRect().right;
    const leftBorder = sliderContainer.getBoundingClientRect().left;
    const mouseX = (event.clientX < leftBorder) ? leftBorder : event.clientX;
    const widthAfter = rightBorder - mouseX;
    const widthBefore = mouseX - leftBorder;
    sliderAfter.style.width = `${widthAfter}px`;
    sliderBefore.style.width = `${widthBefore}px`;
  }
});
