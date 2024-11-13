const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  mobileMenu.classList.remove("active-position");
});
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active-position");
});
