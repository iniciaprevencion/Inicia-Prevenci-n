/* ============================================
   IniciaPrevención - JavaScript principal
   ============================================ */

(function() {
  'use strict';

  // Actualizar año en el footer dinámicamente
  document.addEventListener('DOMContentLoaded', function() {
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  // Smooth scroll para enlaces internos
  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = 80; // altura del header sticky
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  });

  // Validación básica del formulario
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('formContacto');
    if (!form) return;

    form.addEventListener('submit', function(e) {
      var requiredInputs = form.querySelectorAll('[required]');
      var valid = true;
      requiredInputs.forEach(function(input) {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = '#A32D2D';
        } else {
          input.style.borderColor = '#B4B2A9';
        }
      });
      if (!valid) {
        e.preventDefault();
        alert('Por favor completa los campos obligatorios.');
      }
    });
  });

  // Tracking básico de clics CTA (Google Analytics si está instalado)
  document.addEventListener('DOMContentLoaded', function() {
    var ctas = document.querySelectorAll('.btn-primary, .btn-cta');
    ctas.forEach(function(cta) {
      cta.addEventListener('click', function() {
        if (typeof gtag === 'function') {
          gtag('event', 'click', {
            'event_category': 'CTA',
            'event_label': this.textContent.trim()
          });
        }
      });
    });
  });

})();
