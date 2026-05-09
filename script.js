// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  }, 1000);
});


// ===============================
// TYPING EFFECT
// ===============================

const words = [
  "High-Converting Websites",
  "Startup SaaS Platforms",
  "AI Solutions",
  "Business Growth Websites",
  "Modern UI/UX Design"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

  currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typingElement.textContent =
    currentWord.substring(0, charIndex);

  typingElement.style.borderRight =
    "3px solid #00E0FF";

  if (!isDeleting &&
      charIndex === currentWord.length) {

    isDeleting = true;

    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {

    isDeleting = false;

    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


// ===============================
// PARTICLES BACKGROUND
// ===============================

particlesJS("particles-js", {

  particles: {

    number: {
      value: 90
    },

    color: {
      value: "#00E0FF"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: 3
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: "#00E0FF",
      opacity: 0.2,
      width: 1
    },

    move: {
      enable: true,
      speed: 2
    }

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {
        enable: true,
        mode: "grab"
      },

      onclick: {
        enable: true,
        mode: "push"
      }

    },

    modes: {

      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },

      push: {
        particles_nb: 4
      }

    }

  },

  retina_detect: true

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

function revealSections() {

  const reveals =
    document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {

    const windowHeight = window.innerHeight;

    const elementTop =
      reveals[i].getBoundingClientRect().top;

    const elementVisible = 120;

    if (elementTop <
        windowHeight - elementVisible) {

      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll("nav a")
.forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const target =
      document.querySelector(
        this.getAttribute("href")
      );

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// ===============================
// BUTTON CLICK EFFECT
// ===============================

const buttons =
  document.querySelectorAll("button");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform = "scale(0.95)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 150);

  });

});


// ===============================
// COUNTER ANIMATION
// ===============================

const counters =
  document.querySelectorAll(".stat-box h2");

const speed = 200;

counters.forEach(counter => {

  const animate = () => {

    const value =
      +counter.innerText.replace(/\D/g,'');

    const dataTarget =
      counter.getAttribute("data-target");

    const target =
      +dataTarget || value;

    const count =
      +counter.innerText.replace(/\D/g,'');

    const increment =
      target / speed;

    if (count < target) {

      counter.innerText =
        Math.ceil(count + increment) + "+";

      setTimeout(animate, 20);

    } else {

      counter.innerText = target + "+";
    }

  };

  animate();

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.clientHeight;

    if (pageYOffset >=
        sectionTop - 200) {

      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("active");
    }

  });

});


// ===============================
// FORM SUBMIT
// ===============================

const form =
  document.querySelector("form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  alert(
    "Thank you! Your message has been sent 🚀"
  );

  form.reset();

});


// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("scroll", () => {

  const scroll =
    window.pageYOffset;

  const heroImage =
    document.querySelector(".hero-image img");

  heroImage.style.transform =
    `translateY(${scroll * 0.05}px)`;

});


// ===============================
// GLOW EFFECT ON MOUSE MOVE
// ===============================

document.addEventListener("mousemove", (e) => {

  const x = e.clientX;
  const y = e.clientY;

  document.body.style.background =
  `
  radial-gradient(
    circle at ${x}px ${y}px,
    rgba(0,224,255,0.08),
    #0f172a 35%
  )
  `;

});


// ===============================
// AUTO HIDE HEADER ON SCROLL
// ===============================

let lastScrollTop = 0;

const header =
  document.querySelector("header");

window.addEventListener("scroll", () => {

  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {

    header.style.top = "-100px";

  } else {

    header.style.top = "0";
  }

  lastScrollTop = scrollTop;

});


// ===============================
// IMAGE HOVER ZOOM
// ===============================

const images =
  document.querySelectorAll("img");

images.forEach(img => {

  img.addEventListener("mouseenter", () => {

    img.style.transform =
      "scale(1.05)";

    img.style.transition =
      "0.5s";

  });

  img.addEventListener("mouseleave", () => {

    img.style.transform =
      "scale(1)";

  });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(`
====================================
🚀 BrainTech Solutions Website
Designed By Ranjith Kumar R
====================================
`);


// ===============================
// DIGITAL CLOCK
// ===============================

function updateClock() {

  const now = new Date();

  const hours =
    now.getHours()
    .toString()
    .padStart(2, "0");

  const minutes =
    now.getMinutes()
    .toString()
    .padStart(2, "0");

  const seconds =
    now.getSeconds()
    .toString()
    .padStart(2, "0");

  const clock =
    document.getElementById("clock");

  if (clock) {

    clock.innerHTML =
      `${hours}:${minutes}:${seconds}`;
  }
}

setInterval(updateClock, 1000);


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "100px";
topBtn.style.right = "30px";
topBtn.style.padding = "12px 18px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#00E0FF";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});
