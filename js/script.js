const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  mobileMenu.classList.remove("active-position");
});
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active-position");
});

// Navbar scroll

const scrollHeader = () => {
  const header = document.querySelector(".header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

//  Loading Screen

var loader = document.getElementById("preloader");

window.addEventListener("load", () => {
  loader.style.display = "none";
});
