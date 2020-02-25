const btnNav = document.querySelector('.nav__btn')
const nav = document.querySelector('.wrapper__nav')
btnNav.addEventListener('click', () => {
  btnNav.classList.toggle('active')
  nav.classList.toggle('active')
})

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {

    document.getElementById("scrollTop").style.visibility = "visible"
  }
  else {
    document.getElementById("scrollTop").style.visibility = "hidden"
  }
}
// Kiedy użytkownik kliknie przycisk, wróci do góry strony
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}