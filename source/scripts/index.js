/* в этот файл добавляет скрипты*/
const menuToggle = document.querySelector('button.header__toggle');
const menu = document.querySelector('nav.header__nav');
const viewPort = window.innerWidth;

if (viewPort < 768) {
  window.addEventListener('load', () => {
    menu.classList.add('header__nav--has-close');
  });
}

// не хочет работать :с -> при изменении ширины до таблетки вернуть дисплей навигации
// window.addEventListener('resize', function checkViewPort () {
//   if (viewPort > 767) {
//     menu.classList.remove('header__nav--has-close')
//   }
// })

// if (window.innerWidth > 767) {
//   window.addEventListener('resize', function showNav() {
//     menu.classList.remove('header__nav--has-close');
//   })
// }

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('header__toggle--has-open');
  menu.classList.toggle('header__nav--has-open');
  menu.classList.toggle('header__nav--has-close');
});
