const revealTargets = document.querySelectorAll(".section, .card, .timeline-item");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

for (const el of revealTargets) {
  el.classList.add("reveal");
}

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((el) => el.classList.add("visible"));
} else {
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((el) => observer.observe(el));
}
