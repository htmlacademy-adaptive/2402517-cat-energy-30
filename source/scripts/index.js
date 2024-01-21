/* в этот файл добавляет скрипты*/
let menu__toggle = document.querySelector("button.header__toggle");
let menu = document.querySelector("nav.header__nav");
let viewPort = window.innerWidth;

if (viewPort < 768) {
  window.addEventListener("load", function defaultMenu() {
  menu.classList.add("header__nav--has-close");
  })
}

// не хочет работать :с -> при изменении ширины до таблетки вернуть дисплей навигации
// window.addEventListener("resize", function checkViewPort () {
//   if (viewPort > 767) {
//     menu.classList.remove("header__nav--has-close")
//   }
// })

// if (window.innerWidth > 767) {
//   window.addEventListener("resize", function showNav() {
//     menu.classList.remove("header__nav--has-close");
//   })
// }

menu__toggle.addEventListener("click", function openMenu() {
  menu__toggle.classList.toggle("header__toggle--has-open");
  menu.classList.toggle("header__nav--has-open");
  menu.classList.toggle("header__nav--has-close");
})

