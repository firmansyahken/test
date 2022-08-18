const menuToggler = document.querySelector("#check");
const mobileMenu = document.querySelector(".mobile-menu");
menuToggler.addEventListener("click", () => {
  if (menuToggler.checked) {
    mobileMenu.classList.add("open");
    return;
  }

  mobileMenu.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    interval: 7000,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  splide.mount();
});

const preloader = document.querySelector(".preloader");
const popupBtn = document.getElementById("popup_toggle");
// const navLink = document.querySelectorAll(".nav_link")
// const navMenu = document.querySelectorAll(".nav_menu")
// const navMobileContainer = document.querySelector(".navbar_mobile_container")
// const navBtn = document.getElementById("navbar_toggle")

setTimeout(() => {
  preloader.classList.add("disable");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 100);
}, 2000);

// navBtn.addEventListener("click", function() {
//   navMobileContainer.classList.toggle("active")
//   navMobileContainer.classList.contains("active") ? navBtn.setAttribute("class", "fa fa-times") :
//   navBtn.setAttribute("class", "fa fa-bars")
// })

popupBtn.addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  document.body.style.overflow = "scroll";
});

// navLink.forEach(link => {
//   link.addEventListener("click", function() {
//     let linkActive = document.getElementById(this.dataset.id)
//     if(linkActive.classList.contains("active")) {
//       navMenu.forEach(menu => { menu.classList.remove("active") })
//       return linkActive.classList.remove("active")
//     }

//     navMenu.forEach(menu => { menu.classList.remove("active") })
//     return linkActive.classList.add("active")

//   })
// })
