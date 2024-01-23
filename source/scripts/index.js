/* в этот файл добавляет скрипты*/
const menuToggle = document.querySelector('button.header__toggle');
const menu = document.querySelector('nav.header__nav');
const viewPort = window.innerWidth;
const sliderToggle = document.querySelector('button.slider__toggle');
const sliderAfter = document.querySelector('div.slider__after');
const sliderContainer = document.querySelector('div.example__slider');
let mousePressed = false;

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

sliderToggle.addEventListener('mousedown', () => {
  // console.log('mousedown');
  mousePressed = true;
});

document.addEventListener('mouseup', () => {
  // console.log('mouseup');
  mousePressed = false;
});

document.addEventListener('mousemove', (event) => {
  if (mousePressed) {
    // console.log('mousemove', event.clientX);
    const rightBorder = sliderAfter.getBoundingClientRect().right;
    const leftBorder = sliderContainer.getBoundingClientRect().left;
    const mouseX = (event.clientX < leftBorder) ? leftBorder : event.clientX;
    const width = rightBorder - mouseX;
    sliderAfter.style.width = `${width}px`;
  }
});
