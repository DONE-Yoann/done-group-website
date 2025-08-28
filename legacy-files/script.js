/**
 * DONE Group - Script principal
 * Gestion de l'interface utilisateur et des interactions
 */

// Configuration
const CONFIG = {
  counterDuration: 1100,
  revealThreshold: 0.22,
  counterThreshold: 0.4
};

/**
 * Gestion du menu mobile
 */
class MobileMenu {
  constructor() {
    this.toggle = document.querySelector('.menu-toggle');
    this.menu = document.getElementById('menu');
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    // Toggle du menu
    this.toggle.addEventListener('click', () => {
      const isOpen = this.menu.classList.toggle('open');
      this.toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fermer le menu en cliquant sur un lien
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.menu.classList.remove('open');
        this.toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * Gestion du scroll fluide
 */
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        
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
}

/**
 * Animation du compteur
 */
class CounterAnimation {
  constructor() {
    this.counterEl = document.querySelector('.num[data-count-to]');
    this.init();
  }

  init() {
    if (!this.counterEl || !('IntersectionObserver' in window)) return;

    const target = parseInt(this.counterEl.dataset.countTo, 10);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(target);
          observer.disconnect();
        }
      });
    }, { threshold: CONFIG.counterThreshold });
    
    observer.observe(this.counterEl);
  }

  animateCounter(target) {
    let current = 0;
    const start = performance.now();
    
    const ease = t => t * t * (3 - 2 * t);
    
    const step = timestamp => {
      const progress = Math.min(1, (timestamp - start) / CONFIG.counterDuration);
      current = Math.floor(target * ease(progress));
      this.counterEl.textContent = current.toLocaleString('fr-FR');
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }
}

/**
 * Effets de révélation au scroll
 */
class ScrollReveal {
  constructor() {
    this.reveals = document.querySelectorAll('.reveal');
    this.init();
  }

  init() {
    if (!this.reveals.length) return;

    if ('IntersectionObserver' in window) {
      this.setupObserver();
    } else {
      // Fallback pour les navigateurs sans IntersectionObserver
      this.reveals.forEach(el => el.classList.add('is-visible'));
    }
  }

  setupObserver() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: CONFIG.revealThreshold });
    
    this.reveals.forEach(el => observer.observe(el));
  }
}

/**
 * Gestion des préférences utilisateur
 */
class UserPreferences {
  constructor() {
    this.init();
  }

  init() {
    // Mise à jour de l'année
    this.updateYear();
    
    // Écouter les changements de préférences
    if ('matchMedia' in window) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', this.handleMotionPreference.bind(this));
    }
  }

  updateYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  handleMotionPreference(event) {
    const prefersReducedMotion = event.matches;
    document.documentElement.classList.toggle('reduced-motion', prefersReducedMotion);
  }
}

/**
 * Gestion des performances
 */
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    // Lazy loading des images (si ajoutées plus tard)
    this.setupLazyLoading();
    
    // Optimisation des animations
    this.optimizeAnimations();
  }

  setupLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    }
  }

  optimizeAnimations() {
    // Désactiver les animations si l'utilisateur préfère
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion');
    }
  }
}

/**
 * Gestion des erreurs
 */
class ErrorHandler {
  constructor() {
    this.init();
  }

  init() {
    window.addEventListener('error', this.handleError.bind(this));
    window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
  }

  handleError(event) {
    console.error('Erreur JavaScript:', event.error);
    // Ici vous pourriez envoyer l'erreur à un service de monitoring
  }

  handlePromiseRejection(event) {
    console.error('Promesse rejetée:', event.reason);
    event.preventDefault();
  }
}

/**
 * Classe principale de l'application
 */
class DONEApp {
  constructor() {
    this.modules = {};
    this.init();
  }

  init() {
    // Attendre que le DOM soit chargé
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', this.start.bind(this));
    } else {
      this.start();
    }
  }

  start() {
    try {
      // Initialiser tous les modules
      this.modules.mobileMenu = new MobileMenu();
      this.modules.smoothScroll = new SmoothScroll();
      this.modules.counterAnimation = new CounterAnimation();
      this.modules.scrollReveal = new ScrollReveal();
      this.modules.userPreferences = new UserPreferences();
      this.modules.performanceOptimizer = new PerformanceOptimizer();
      this.modules.errorHandler = new ErrorHandler();

      console.log('DONE Group - Application initialisée avec succès');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation:', error);
    }
  }

  // Méthode pour accéder aux modules depuis la console
  getModule(name) {
    return this.modules[name];
  }
}

// Initialiser l'application
const app = new DONEApp();

// Exposer l'app globalement pour le débogage
window.DONEApp = app;
