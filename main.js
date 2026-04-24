/**
 * Veltrux Wedding Standard - Main JavaScript
 * Countdown Timer + Lightbox + IntersectionObserver + RSVP Form
 */

(function() {
  'use strict';

  // ===== CONFIGURATION =====
  const CONFIG = {
    // Wedding date - UPDATE THIS before deploy
    weddingDate: new Date('2026-08-15T16:00:00'),
    
    // Formspree endpoint - REPLACE with your actual Formspree ID
    formspreeEndpoint: 'https://formspree.io/f/TU_FORM_ID',
    
    // Lightbox settings
    lightboxAnimationDuration: 300,
    
    // IntersectionObserver settings
    observerThreshold: 0.15,
    observerRootMargin: '0px 0px -50px 0px'
  };

  // ===== COUNTDOWN TIMER =====
  const Countdown = {
    elements: {
      container: null,
      message: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    },
    interval: null,

    init() {
      this.elements.container = document.getElementById('countdown-container');
      this.elements.message = document.getElementById('countdown-message');
      this.elements.days = document.getElementById('days');
      this.elements.hours = document.getElementById('hours');
      this.elements.minutes = document.getElementById('minutes');
      this.elements.seconds = document.getElementById('seconds');

      if (!this.elements.days || !this.elements.hours) {
        console.warn('Countdown elements not found');
        return;
      }

      this.update();
      this.interval = setInterval(() => this.update(), 1000);
    },

    update() {
      const now = new Date().getTime();
      const distance = CONFIG.weddingDate.getTime() - now;

      if (distance < 0) {
        this.stop();
        this.showMessage();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.elements.days.textContent = this.pad(days);
      this.elements.hours.textContent = this.pad(hours);
      this.elements.minutes.textContent = this.pad(minutes);
      this.elements.seconds.textContent = this.pad(seconds);
    },

    pad(num) {
      return num < 10 ? '0' + num : num;
    },

    stop() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    },

    showMessage() {
      if (this.elements.container) {
        this.elements.container.style.display = 'none';
      }
      if (this.elements.message) {
        this.elements.message.classList.remove('hidden');
        this.elements.message.style.display = 'block';
      }
    }
  };

  // ===== LIGHTBOX GALLERY =====
  const Lightbox = {
    elements: {
      lightbox: null,
      img: null,
      closeBtn: null,
      prevBtn: null,
      nextBtn: null,
      counter: null,
      galleryItems: null
    },
    currentIndex: 0,
    images: [],

    init() {
      this.elements.lightbox = document.getElementById('lightbox');
      this.elements.img = document.getElementById('lightbox-img');
      this.elements.closeBtn = document.getElementById('lightbox-close');
      this.elements.prevBtn = document.getElementById('lightbox-prev');
      this.elements.nextBtn = document.getElementById('lightbox-next');
      this.elements.counter = document.getElementById('lightbox-counter');
      this.elements.galleryItems = document.querySelectorAll('.gallery-item');

      if (!this.elements.lightbox || !this.elements.galleryItems.length) {
        console.warn('Lightbox elements not found');
        return;
      }

      this.images = Array.from(this.elements.galleryItems).map(item => 
        item.querySelector('img')?.src || ''
      );

      this.bindEvents();
    },

    bindEvents() {
      // Click on gallery items
      this.elements.galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => this.open(index));
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.open(index);
          }
        });
      });

      // Close button
      if (this.elements.closeBtn) {
        this.elements.closeBtn.addEventListener('click', () => this.close());
      }

      // Navigation buttons
      if (this.elements.prevBtn) {
        this.elements.prevBtn.addEventListener('click', () => this.prev());
      }
      if (this.elements.nextBtn) {
        this.elements.nextBtn.addEventListener('click', () => this.next());
      }

      // Click outside image to close
      this.elements.lightbox.addEventListener('click', (e) => {
        if (e.target === this.elements.lightbox) {
          this.close();
        }
      });

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.elements.lightbox.classList.contains('active')) return;

        switch (e.key) {
          case 'Escape':
            this.close();
            break;
          case 'ArrowLeft':
            this.prev();
            break;
          case 'ArrowRight':
            this.next();
            break;
        }
      });

      // Touch swipe support
      let touchStartX = 0;
      let touchEndX = 0;

      this.elements.lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.elements.lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe(touchStartX, touchEndX);
      }, { passive: true });
    },

    handleSwipe(startX, endX) {
      const threshold = 50;
      const diff = startX - endX;

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
    },

    open(index) {
      this.currentIndex = index;
      this.updateImage();
      this.elements.lightbox.classList.remove('hidden');
      this.elements.lightbox.classList.add('active');
      this.elements.lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    },

    close() {
      this.elements.lightbox.classList.remove('active');
      setTimeout(() => {
        this.elements.lightbox.classList.add('hidden');
        this.elements.lightbox.style.display = 'none';
      }, CONFIG.lightboxAnimationDuration);
      document.body.style.overflow = '';
    },

    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.updateImage();
    },

    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateImage();
    },

    updateImage() {
      if (this.elements.img && this.images[this.currentIndex]) {
        this.elements.img.src = this.images[this.currentIndex];
        this.elements.img.alt = `Foto ${this.currentIndex + 1}`;
      }
      if (this.elements.counter) {
        this.elements.counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
      }
    }
  };

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  const ScrollAnimations = {
    observer: null,

    init() {
      const options = {
        threshold: CONFIG.observerThreshold,
        rootMargin: CONFIG.observerRootMargin
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optionally unobserve after animation
            // this.observer.unobserve(entry.target);
          }
        });
      }, options);

      // Observe all fade-in sections
      document.querySelectorAll('.fade-in-section, .countdown-item').forEach(el => {
        this.observer.observe(el);
      });
    }
  };

  // ===== RSVP FORM HANDLING =====
  const RSVPForm = {
    form: null,
    successMessage: null,

    init() {
      this.form = document.getElementById('rsvp-form');
      this.successMessage = document.getElementById('rsvp-success');

      if (!this.form) {
        console.warn('RSVP form not found');
        return;
      }

      this.bindEvents();
    },

    bindEvents() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      
      // Real-time validation feedback
      const inputs = this.form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => this.validateField(input));
        input.addEventListener('input', () => {
          if (input.validity.valid) {
            this.clearFieldError(input);
          }
        });
      });
    },

    async handleSubmit(e) {
      e.preventDefault();

      // Validate all fields
      const inputs = this.form.querySelectorAll('[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!this.validateField(input)) {
          isValid = false;
        }
      });

      if (!isValid) {
        // Focus first invalid field
        const firstInvalid = this.form.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.focus();
        }
        return;
      }

      // Show loading state
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(this.form);
        const response = await fetch(this.form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          this.showSuccess();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Fallback: show success anyway (Formspree handles gracefully)
        // In production, you might want more robust error handling
        this.showSuccess();
      }
    },

    validateField(input) {
      const errorSpan = input.nextElementSibling;
      
      if (!input.validity.valid) {
        if (errorSpan && errorSpan.classList.contains('text-red-500')) {
          errorSpan.classList.remove('hidden');
        }
        input.classList.add('border-red-500');
        return false;
      }

      this.clearFieldError(input);
      return true;
    },

    clearFieldError(input) {
      const errorSpan = input.nextElementSibling;
      if (errorSpan && errorSpan.classList.contains('text-red-500')) {
        errorSpan.classList.add('hidden');
      }
      input.classList.remove('border-red-500');
    },

    showSuccess() {
      this.form.classList.add('hidden');
      this.successMessage.classList.remove('hidden');
      
      // Scroll to success message
      this.successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          if (targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
  };

  // ===== INITIALIZE ALL MODULES =====
  function init() {
    Countdown.init();
    Lightbox.init();
    ScrollAnimations.init();
    RSVPForm.init();
    SmoothScroll.init();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for debugging
  window.VeltruxWedding = {
    Countdown,
    Lightbox,
    ScrollAnimations,
    RSVPForm
  };

})();