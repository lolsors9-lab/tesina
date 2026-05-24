// LOADER

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader").style.opacity = "0";

    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000);

  }, 3000);

});

// AOS

AOS.init({
  duration: 1200,
});

// PARTICLES

tsParticles.load("tsparticles", {

  background: {
    color: "#050816"
  },

  particles: {

    number: {
      value: 100
    },

    color: {
      value: ["#00ffff", "#ff00ff"]
    },

    links: {
      enable: true,
      color: "#00ffff",
      distance: 150,
      opacity: 0.3
    },

    move: {
      enable: true,
      speed: 2
    },

    size: {
      value: 2
    },

    opacity: {
      value: 0.5
    }

  }

});

// 3D EFFECT

VanillaTilt.init(document.querySelectorAll(".card"), {

  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5,

});

// GSAP HERO

gsap.from(".main-title", {

  y: -100,
  opacity: 0,
  duration: 1.5,

});

gsap.from(".hero p", {

  opacity: 0,
  duration: 2,
  delay: 0.5,

});

gsap.from(".btn", {

  opacity: 0,
  duration: 2,
  delay: 1,

});

// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});

// CUSTOM CURSOR

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});

// HOVER EFFECT

const hoverElements = document.querySelectorAll(
  "a, button, .btn, .card"
);

hoverElements.forEach(el => {

  el.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });

});
