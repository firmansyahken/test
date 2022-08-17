document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide' );
  splide.mount();
} );

const preloader = document.querySelector(".preloader")
const popupBtn = document.getElementById("popup_toggle")
var navLink = document.querySelectorAll(".nav_link")

setTimeout(() => {
  preloader.classList.add("disable")
  setTimeout(() => {
    preloader.style.display = "none"
  }, 100)
}, 2000)

popupBtn.addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none"
  document.body.style.overflow = "scroll"
})

navLink.forEach(link => {
  link.addEventListener("click", function() {
    document.getElementById(this.dataset.id).classList.toggle("active")
  })
})