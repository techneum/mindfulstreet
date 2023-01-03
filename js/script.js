const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav__toggler");

navToggler.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});
