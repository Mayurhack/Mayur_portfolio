```javascript id="gmrh3j"
/* ==========================
   MAYUR CYBER PORTFOLIO
========================== */

/* ==========================
   MATRIX RAIN EFFECT
========================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>?/\\|";

const letters = chars.split("");

const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {

    ctx.fillStyle = "rgba(2,6,13,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffff";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text =
        letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(
            text,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

/* ==========================
   TYPING EFFECT
========================== */

const typingText = document.getElementById("typing");

const words = [

    "Cyber Security Enthusiast",
    "Digital Forensics Learner",
    "OSINT Researcher",
    "Network Security Analyst",
    "Cloud Security Explorer",
    "Ethical Hacking Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .cert-card, .contact-card, .feature, .info-card"
);

function revealOnScroll() {

    revealElements.forEach((element) => {

        const top =
        element.getBoundingClientRect().top;

        const windowHeight =
        window.innerHeight;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform =
            "translateY(0px)";
        }
    });
}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }
    });
});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});
}

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

        target.scrollIntoView({

            behavior:"smooth"

        });

        navMenu.classList.remove("show");

        }

    });

});

/* ==========================
   CYBER GLOW ON MOUSEMOVE
========================== */

document.addEventListener(
    "mousemove",
    (e) => {

    const glow =
    document.querySelector(".glow-circle");

    if(glow){

    glow.style.transform =

    `translate(
        ${e.clientX * 0.02}px,
        ${e.clientY * 0.02}px
    )`;

    }

});

/* ==========================
   CYBER CARD HOVER
========================== */

const cards =
document.querySelectorAll(
".project-card, .skill-card, .cert-card"
);

cards.forEach(card => {

    card.addEventListener(
    "mousemove",
    (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =

        `radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,255,255,.18),
            rgba(0,255,255,.04)
        )`;

    });

    card.addEventListener(
    "mouseleave",
    () => {

        card.style.background =
        "rgba(0,255,255,.04)";
    });

});

/* ==========================
   CONSOLE MESSAGE
========================== */

console.log(
"%cWelcome to Mayur's Cyber Portfolio",
"color:#00ffff;font-size:20px;font-weight:bold;"
);

console.log(
"%cCyber Security | Digital Forensics | OSINT",
"color:white;font-size:14px;"
);
```
