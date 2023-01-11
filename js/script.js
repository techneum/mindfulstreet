// Nav
const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav__toggler");

navToggler.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});

// Circles
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("mouseover", () => {
    const id = circle.dataset.target;
    const target = document.querySelector(id);
    const color = circle.dataset.color;
    changeColor(target, color);
  });

  circle.addEventListener("mouseout", () => {
    removeColor();
  });
});

function changeColor(target, color) {
  target.style.color = color;
}

function removeColor() {
  const texts = document.querySelectorAll(".about-us__text > *");
  texts.forEach((text) => {
    text.style.color = "#495057";
  });
}
