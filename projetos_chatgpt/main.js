/* ============================================================
   AMORE — MAIN JAVASCRIPT
   ============================================================ */

/* ---------------- CURSOR ---------------- */
const cursor = document.getElementById("cursor");
const trail = document.getElementById("cursorTrail");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  setTimeout(() => {
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";
  }, 80);
});

document.querySelectorAll("a, button, input, textarea").forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

/* ---------------- NAV SCROLL ---------------- */
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
});

/* ---------------- COUNTDOWN ---------------- */
const cdDays = document.getElementById("cdDays");
const cdHours = document.getElementById("cdHours");
const cdMins = document.getElementById("cdMins");

function updateCountdown() {
  const target = new Date("June 12, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  cdDays.textContent = String(days).padStart(2, "0");
  cdHours.textContent = String(hours).padStart(2, "0");
  cdMins.textContent = String(mins).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ---------------- REVEAL ON SCROLL ---------------- */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

/* ---------------- ANIMAÇÃO DE NÚMEROS ---------------- */
const stats = document.querySelectorAll(".mstat__num");

function animateNumber(el) {
  const target = el.dataset.target;

  if (target === "∞") {
    el.textContent = "∞";
    return;
  }

  let count = 0;
  const end = parseInt(target);
  const speed = 30;

  const interval = setInterval(() => {
    count += Math.ceil(end / 60);
    if (count >= end) {
      el.textContent = end;
      clearInterval(interval);
    } else {
      el.textContent = count;
    }
  }, speed);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

stats.forEach(s => statsObserver.observe(s));

/* ---------------- CARTA ---------------- */
const cartaText = document.getElementById("cartaText");
const paraInput = document.getElementById("paraInput");
const deInput = document.getElementById("deInput");
const cartaDate = document.getElementById("cartaDate");

const toast = document.getElementById("toast");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* data da carta */
const today = new Date();
cartaDate.textContent = today.toLocaleDateString("pt-BR");

/* copiar carta */
function copyCarta() {
  const text = `
Para: ${paraInput.value}

${cartaText.value}

Com amor,
${deInput.value}
  `;

  navigator.clipboard.writeText(text);
  showToast("Carta copiada com amor 💌");
}

/* dicas */
const tips = [
  "Desde a primeira vez que vi você, algo mudou em mim...",
  "Todo dia quando acordo, penso em você antes de tudo...",
  "O que mais amo em você é o jeito que me faz sentir em casa...",
  "Prometo que sempre vou escolher você, mesmo nos dias difíceis..."
];

function injectTip(i) {
  cartaText.value += "\n\n" + tips[i];
  showToast("Ideia adicionada ✨");
}

/* download simples (print da carta) */
function downloadCarta() {
  showToast("Use Ctrl + P → Salvar como PDF 💾");
  window.print();
}

/* ---------------- CORAÇÕES FOOTER ---------------- */
const footerHearts = document.getElementById("footerHearts");

function spawnHearts() {
  const hearts = "♡ ♥ ❤ ❥";
  let output = "";

  for (let i = 0; i < 12; i++) {
    output += hearts[Math.floor(Math.random() * hearts.length)] + " ";
  }

  footerHearts.textContent = output;
}

spawnHearts();

/* ---------------- CANVAS (HEART PARTICLES SIMPLES) ---------------- */
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(201,24,74,0.4)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    ctx.fill();

    p.y -= p.d;

    if (p.y < 0) {
      p.y = canvas.height;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawHearts);
}

drawHearts();

/* resize */
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});