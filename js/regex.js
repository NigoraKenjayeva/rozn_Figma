// RegEx 

const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let inputT = document.querySelectorAll(".inp");
let submitBtn = document.querySelector(".submit_btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const phoneRegEx = /^[0-9]{8,12}$/;
  const nameRegEx = /^[a-zA-Z]{5,20}$/;
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
