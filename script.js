/* ==========================================================
   EDIT YOUR LINKS HERE
   Leave a link as "" and its button is hidden automatically,
   so the site never shows a dead link.
   ========================================================== */
const LINKS = {
  // Profiles
  github:   "https://github.com/Prateeksha08-crew",
  linkedin: "",   // e.g. "https://www.linkedin.com/in/your-id"
  leetcode: "",   // e.g. "https://leetcode.com/u/your-id"

  // Resume: put your PDF in the assets folder with this exact name
  resume: "assets/Prateeksha_J_Resume.pdf",

  // AI Complaint Classifier and Summarizer
  classifierDemo: "",   // your Render link
  classifierRepo: "",

  // Rural Cleanliness Checker App
  ruralDemo: "",
  ruralRepo: "",

  // Food Allergen and Diet Planner
  foodDemo: "",         // your live demo link
  foodRepo: "",

  // PriceRadar
  priceDemo: "",
  priceRepo: "https://github.com/Prateeksha08-crew/Price-radar"
};

const CONTACT_EMAIL = "prateekshaj03@gmail.com";

/* ---------- Fill links, hide empty ones ---------- */
document.querySelectorAll("[data-link]").forEach((a) => {
  const url = LINKS[a.dataset.link];
  if (!url) {
    a.hidden = true;
    return;
  }
  a.href = url;
  if (/^https?:/i.test(url)) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
});

// Hide a project's link row when it has no links at all
document.querySelectorAll(".project-links").forEach((row) => {
  if (![...row.children].some((el) => !el.hidden)) row.hidden = true;
});

/* ---------- Hero name: letter by letter entrance ---------- */
let charIndex = 0;
document.querySelectorAll("[data-split]").forEach((el) => {
  const text = el.textContent.trim();
  el.textContent = "";
  [...text].forEach((ch) => {
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--i", charIndex++);
    span.textContent = ch;
    el.appendChild(span);
  });
});

/* ---------- Mobile menu ---------- */
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  }
});

/* ---------- Nav border on scroll + active link ---------- */
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

const menuLinks = [...menu.querySelectorAll("a")];
const sections = menuLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuLinks.forEach((a) =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Skill ticker: duplicate for a seamless loop ---------- */
const track = document.getElementById("marquee");
if (track) track.innerHTML += track.innerHTML;

/* ---------- Project accordion ---------- */
document.querySelectorAll(".project-head").forEach((btn) => {
  btn.addEventListener("click", () => {
    const project = btn.closest(".project");
    const willOpen = project.dataset.open !== "true";
    project.dataset.open = String(willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
  });
});

/* ---------- Contact form: opens the visitor's email app ---------- */
const form = document.getElementById("contact-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  note.classList.remove("error");

  if (!name || !email || !message) {
    note.textContent = "Please fill in your name, email, and message.";
    note.classList.add("error");
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    note.textContent = "That email address doesn't look right. Please check it.";
    note.classList.add("error");
    return;
  }

  const subject = encodeURIComponent("Message from " + name + " via your portfolio");
  const body = encodeURIComponent(message + "\n\nFrom: " + name + "\nReply to: " + email);
  window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + subject + "&body=" + body;
  note.textContent = "Your email app should open with the message ready to send.";
  form.reset();
});

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
