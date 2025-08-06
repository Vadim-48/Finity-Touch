// burger
const link = document.querySelectorAll(".nav__item-link");
function linkClick () {
  Array.from(link).forEach(function(item) {
    item.addEventListener('click', function() {
      document.querySelector(".nav__menu").classList.remove("active")
      document.querySelector(".header__burger").classList.remove("active")
      document.querySelector("body").classList.remove("lock")
    })
  })
}
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".header__burger").addEventListener("click", function() {
    document.querySelector(".header__nav-menu").classList.toggle("active")
    document.querySelector(".header__burger").classList.toggle("active")
    document.querySelector("body").classList.toggle("lock")
  })
  linkClick();
})

//acordeon
document.querySelectorAll('.accordion__btn').forEach((el) => {
  el.addEventListener('click', () => {
    let accordion__text = el.nextElementSibling;
    console.log(accordion__text)
    if (accordion__text.style.maxHeight) {
      document.querySelectorAll('.accordion__text').forEach((el) => el.style.maxHeight = null)
    } else {
      document.querySelectorAll('.accordion__text').forEach((el) => el.style.maxHeight = null)
      accordion__text.style.maxHeight = accordion__text.scrollHeight + 'px'
    }
  })
})
