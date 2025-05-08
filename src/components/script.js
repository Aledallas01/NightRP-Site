document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggle = document.getElementById('nav-toggle');
    const icon = toggle.querySelector('i');
  
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('open');
      // Cambia icona + / ×
      if (nav.classList.contains('open')) {
        icon.classList.replace('fa-plus', 'fa-times');
        toggle.setAttribute('aria-label', 'Chiudi menu');
      } else {
        icon.classList.replace('fa-times', 'fa-plus');
        toggle.setAttribute('aria-label', 'Apri menu');
      }
    });
  });
  