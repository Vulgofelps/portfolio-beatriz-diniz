// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('nav-open');
  burger.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Leve entrada do diagrama de proporção no hero (respeita prefers-reduced-motion)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const diagram = document.getElementById('phiDiagram');
  if (diagram) {
    diagram.style.opacity = '0';
    diagram.style.transform = 'scale(0.96)';
    diagram.style.transition = 'opacity 1.4s ease, transform 1.4s ease';
    requestAnimationFrame(() => {
      setTimeout(() => {
        diagram.style.opacity = '1';
        diagram.style.transform = 'scale(1)';
      }, 200);
    });
  }

  // fade-in suave para seções ao rolar a página
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.proc-card, .resultado-card, .depo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `.in-view{ opacity:1 !important; transform:none !important; }`;
  document.head.appendChild(style);
});
