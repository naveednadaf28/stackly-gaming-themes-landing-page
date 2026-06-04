// =========================
// PRELOADER
// =========================

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("preloader").style.display = "none";

    }, 1500);

});

// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

        menuBtn.innerHTML = "✕";
        document.body.style.overflow = "hidden";

    } else {

        menuBtn.innerHTML = "☰";
        document.body.style.overflow = "auto";
    }

});

// =========================
// CLOSE MENU AFTER CLICK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuBtn.innerHTML = "☰";
        document.body.style.overflow = "auto";

    });

});

// =========================
// SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(
".stat-card, .category-card, .game-card, .testimonial-card"
);

window.addEventListener("scroll", function () {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// initial state

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";

});