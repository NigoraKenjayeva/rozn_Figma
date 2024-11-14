const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  mobileMenu.classList.remove("active-position");
});
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active-position");
});

// RegEx bu kerakli narsa tegmang

const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let inputT = document.querySelectorAll(".inp");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const phoneRegEx = /^[0-9]{8,12}$/;
  const nameRegEx = /[a-zA-Z]/;
  let emailValue = email.value;
  let phoneValue = phone.value;
  let nameValue = userName.value;
  if (userName.value == "" || email.value == "" || phone.value == "") {
    alert("Malumotlar To'liq emas.");
  } else {
    if (
      emailRegEx.test(emailValue) &&
      phoneRegEx.test(phoneValue) &&
      nameRegEx.test(nameValue)
    ) {
      alert("Malumotlar qabul qilindi😊. Malumot uchun rahmat.👌");
      userName.value = "";
      email.value = "";
      phone.value = "";
    } else {
      alert("Malumotlar qabul qilinmadi😒");
    }
  }
});

// Navbar scroll

const scrollHeader = () =>{
  const header = document.querySelector('.header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
