/* ═══════════════════════════════════════════════════════════════
   AJ KITCHEN — Main JavaScript
   Handles navigation, scroll effects, gallery filters,
   form validation, and scroll-reveal animations.
   Minimal, performant, zero-dependency.
   ═══════════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  // ─── ENABLE JS FEATURES ────────────────────────────────────
  // Add .js-enabled to enable scroll animations
  document.documentElement.classList.add('js-enabled');

  // ─── DOM REFERENCES ────────────────────────────────────────
  const header      = document.getElementById('site-header');
  const menuToggle  = document.getElementById('menu-toggle');
  const mainNav     = document.getElementById('main-nav');
  const navLinks    = document.querySelectorAll('.nav-link');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const galleryCards= document.querySelectorAll('.gallery-card');
  const contactForm = document.getElementById('contact-form');
  const reveals     = document.querySelectorAll('.reveal');

  // ─── HEADER SCROLL EFFECT ─────────────────────────────────
  let lastScroll = 0;
  const SCROLL_THRESHOLD = 50;

  function handleHeaderScroll() {
    const currentScroll = window.scrollY;
    header.classList.toggle('scrolled', currentScroll > SCROLL_THRESHOLD);
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  // Run once on load
  handleHeaderScroll();


  // ─── MOBILE MENU ──────────────────────────────────────────
  function toggleMenu() {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    mainNav.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMenu();
    }
  });


  // ─── ACTIVE NAV LINK ON SCROLL ────────────────────────────
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });


  // ─── GALLERY FILTER ───────────────────────────────────────
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      galleryCards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'all' || category === filter;

        card.style.transition = 'opacity 400ms ease, transform 400ms ease';

        if (show) {
          card.style.display = '';
          // Force reflow for animation
          void card.offsetHeight;
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 400);
        }
      });
    });
  });


  // ─── SCROLL REVEAL (Intersection Observer) ────────────────
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: just show everything
    reveals.forEach(el => el.classList.add('visible'));
  }


  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // ─── CONTACT FORM HANDLING ────────────────────────────────
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name  = formData.get('name')?.trim();
      const phone = formData.get('phone')?.trim();
      const email = formData.get('email')?.trim();

      // Basic validation
      let isValid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        field.style.borderColor = '';
        if (!field.value.trim()) {
          field.style.borderColor = '#C0392B';
          isValid = false;
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('#email');
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailField.style.borderColor = '#C0392B';
        isValid = false;
      }

      if (!isValid) return;

      // Simulate submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Enquiry Sent!
        `;
        submitBtn.style.background = '#4A7C59';

        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1200);
    });

    // Clear error state on input
    contactForm.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }


  // ─── LAZY LOAD IMAGES (native + fallback) ─────────────────
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported — images already have loading="lazy"
  } else {
    // Fallback with Intersection Observer
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  // ── Back to Top Button ──
  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  initBackToTop();

  /* ── Hero Rotating Text ── */
  function initHeroRotatingText() {
    const el = document.getElementById('hero-rotating');
    if (!el) return;

    const words = ['Every Event!', 'Corporate!', 'Subscription!'];
    let index = 0;

    setInterval(() => {
      el.style.animation = 'heroRotateOut 0.4s ease forwards';

      setTimeout(() => {
        index = (index + 1) % words.length;
        el.textContent = words[index];
        el.style.animation = 'heroRotateIn 0.4s ease forwards';
      }, 400);
    }, 2500);
  }

  initHeroRotatingText();

})();
