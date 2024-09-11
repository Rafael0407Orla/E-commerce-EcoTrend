document.addEventListener('DOMContentLoaded', function() {
      const currentPath = window.location.pathname.split('/').pop(); // Obtém apenas o nome da página
    
      const navLinks = document.querySelectorAll('.nav-link');
    
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentPath)) {
          link.classList.add('active');
        }
      });
    });