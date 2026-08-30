// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

// Apply to all animated elements
document.querySelectorAll('.reveal-3d, .reveal-left, .reveal-right, .reveal-zoom, .reveal-flip, .reveal-scale, .stream-block, .career-card, .college-card').forEach(el => {
  observer.observe(el);
});