document.addEventListener("DOMContentLoaded", function () {

    // ===== Nama Tamu dari URL =====
    const params = new URLSearchParams(window.location.search);
    const guest = params.get("to");
    document.getElementById("guestName").innerText =
        guest ? guest.replace(/\+/g, " ") : "Tamu Undangan";

    // ===== Buka Undangan =====
    const btn = document.getElementById("openInvitation");
    const content = document.getElementById("content");
    const music = document.getElementById("bgMusic");

    btn.addEventListener("click", function () {
        document.body.classList.remove("lock-scroll");
        content.style.display = "block";
        content.scrollIntoView({ behavior: "smooth" });
        music.play();
    });

    // ===== FLIP COUNTDOWN =====
    const targetDate = new Date("December 20, 2026 08:00:00").getTime();

    const flipUpdate = (id, value) => {
        const el = document.getElementById(id);
        if (el.innerText !== value) {
            el.classList.remove("flip");
            void el.offsetWidth;
            el.innerText = value;
            el.classList.add("flip");
        }
    };

    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) return;

        flipUpdate("days", String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"));
        flipUpdate("hours", String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0"));
        flipUpdate("minutes", String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0"));
        flipUpdate("seconds", String(Math.floor((distance / 1000) % 60)).padStart(2, "0"));
    }, 1000);

});// ===== ANIMASI SAAT SCROLL =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.2
    }
);

reveals.forEach(el => observer.observe(el));

// Tanggal target (misal akad nikah)
const targetDate = new Date("December 20, 2026 08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Update setiap detik
setInterval(updateCountdown, 1000);
updateCountdown(); // jalankan segera saat load


