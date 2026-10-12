/**
 * Scroll reveal: 24px fade-up over 700ms, staggered 80ms within [data-reveal-group].
 * CSS in global.css only hides elements when the html.js class is present and
 * motion is allowed, so content is never lost without JS.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
  group.querySelectorAll<HTMLElement>(':scope > [data-reveal], :scope > * > [data-reveal]').forEach((el, i) => {
    el.style.setProperty('--reveal-delay', `${i * 80}ms`);
  });
});

if (reduce || !('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  items.forEach((el) => io.observe(el));
}
