/* =============================================
   ANNAYYARA GARAGE 7 SURABAYA — main.js
   ============================================= */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobileMenu');
  const hero = document.getElementById('home');
  const service = document.getElementById('service');

  if (!navbar) return; // Navbar not ready yet

  function updateNavbarStyle() {
    const scrollPos = window.scrollY;
    
    // Get positions
    const heroPos = hero ? hero.getBoundingClientRect().bottom + window.scrollY : 0;

    // Add scrolled class for blur effect
    if (scrollPos > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Change navbar color based on which section we're in
    // If we've scrolled past hero section, use light background
    if (scrollPos > heroPos - 100) {
      navbar.classList.add('light-bg');
      if (mobileMenu) mobileMenu.classList.add('light-bg');
    } else {
      navbar.classList.remove('light-bg');
      if (mobileMenu) mobileMenu.classList.remove('light-bg');
    }

    // Update active nav link
    updateActiveNavLink();
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');
    
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Trigger immediately
  updateNavbarStyle();
  
  // Event listeners
  window.addEventListener('scroll', updateNavbarStyle);
  window.addEventListener('load', updateNavbarStyle);
  window.addEventListener('resize', updateNavbarStyle);

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      if (mobileMenu) mobileMenu.classList.toggle('open');
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;

      e.preventDefault();

      const navHeight = navbar.offsetHeight;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Close mobile menu
      if (hamburger) {
        hamburger.classList.remove('open');
        if (mobileMenu) mobileMenu.classList.remove('open');
      }

      setTimeout(updateNavbarStyle, 100);
    });
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbar);
} else {
  // DOM is already loaded
  initNavbar();
}
