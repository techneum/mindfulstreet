// NAV ***************
const nav = document.querySelector(".nav");
const navToggler = document.querySelector(".nav__toggler");

navToggler.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});

// SMOOTH SCROLL ***************
// Listen to nav buttons
const navButtons = document.querySelectorAll(".nav__button");

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = button.hash;

    // Get destination section
    const destination = document.querySelector(hash);
    destination.scrollIntoView({ behavior: "smooth" });
  });
});
// ABOUT US ***************
const colors = {
  primary: "#0e3255",
  secondary: "#587db2",
  accent: "#e0923f",
  black: "#252b42",
  gray: "#737373",
  white: "#fff",
};

// Listen to text hover
const textParent = document.querySelector(".about-us__text");
if (textParent) {
  textParent.addEventListener("mouseover", (e) => {
    const text = e.target.closest(".about-us__text p");
    if (!text) return;
    const id = text.dataset.target;
    const target = document.querySelector(id);
    const color = text.dataset.color;

    // Change Text Color
    text.style.color = colors[color];

    // Change Circle Color
    changeCircleColor(target, colors[color]);

    // Remove Color Listener
    text.addEventListener("mouseout", () => {
      removeColor(target);
      removeColor(text);
    });
  });

  // Listen to circle cover
  const circles = document.querySelector(".circles");
  circles.addEventListener("mouseover", (e) => {
    const circle = e.target.closest(".circle");
    if (!circle) return;
    const color = circle.dataset.color;
    const id = circle.id;
    const text = document.querySelector(`p[data-target="#${id}"]`);

    // Change Circle Color
    changeCircleColor(circle, colors[color]);

    // Change Text Color
    changeTextColor(text, colors[color]);

    // Remove Circle Color
    circle.addEventListener("mouseout", () => {
      removeColor(circle);
      removeColor(text);
    });
  });

  function changeCircleColor(target, color) {
    target.style.background = color;
    target.style.color = colors["white"];
  }

  function changeTextColor(target, color) {
    target.style.color = color;
  }

  function removeColor(target) {
    target.style.background = colors["white"];
    target.style.color = colors["gray"];
  }
}
