// ===== STRICT MODE =====
'use strict';

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const typedEl = document.getElementById('typed');
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');
const scrollTopBtn = document.getElementById('scroll-top');
const themeToggle = document.getElementById('theme-toggle');

// ===== THEME TOGGLE =====
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
};

const updateThemeIcon = (theme) => {
  const icon = themeToggle.querySelector('i');
  icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
});

initTheme();

// ===== NAVBAR SCROLL & SCROLL TOP BUTTON =====
const handleScroll = () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 50);
  scrollTopBtn.classList.toggle('visible', scrollY > 400);
  
  // Active nav link on scroll
  updateActiveNavLink();
};

window.addEventListener('scroll', handleScroll);

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = hamburger.querySelector('i');
  icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
});

// Close menu when clicking nav links
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.className = 'fas fa-bars';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.className = 'fas fa-bars';
  }
});

// ===== TYPED TEXT EFFECT =====
const roles = [
  'Front-End Developer',
  'UI/UX Enthusiast',
  'JavaScript Developer',
  'Python Programmer',
  'Creative Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const current = roles[roleIndex];
  
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex--);
  } else {
    typedEl.textContent = current.substring(0, charIndex++);
  }
  
  let speed = isDeleting ? 60 : 110;
  
  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }
  
  setTimeout(type, speed);
};

// Start typing effect
type();

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Animate skill bars when skills section is visible
      if (entry.target.classList.contains('skill-card')) {
        const fill = entry.target.querySelector('.skill-fill');
        if (fill && !fill.style.width) {
          fill.style.width = fill.dataset.width;
        }
      }
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
const observeElements = () => {
  const elements = document.querySelectorAll(
    '.skill-card, .project-card, .service-card, .about-text, .contact-item, .stat'
  );
  
  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
};

observeElements();

// ===== PROJECT FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    // Filter projects with animation
    projectCards.forEach((card, index) => {
      const match = filter === 'all' || card.dataset.category === filter;
      
      if (match) {
        setTimeout(() => {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 100);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== CONTACT FORM =====
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Disable submit button
  submitBtn.disabled = true;
  const originalText = submitBtn.querySelector('.btn-text').textContent;
  submitBtn.querySelector('.btn-text').textContent = 'Sending...';
  
  // Get form data
  const formData = new FormData(form);
  
  try {
    // Submit to Formspree
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      // Success
      formMessage.textContent = 'Message sent successfully! I\'ll get back to you soon.';
      formMessage.className = 'form-message success';
      form.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        formMessage.className = 'form-message';
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Error
    formMessage.textContent = 'Oops! Something went wrong. Please try again or email me directly.';
    formMessage.className = 'form-message error';
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 5000);
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-text').textContent = originalText;
  }
});

// ===== SCROLL TO TOP =====
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');

const updateActiveNavLink = () => {
  const scrollY = window.scrollY + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    
    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
};

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Only prevent default for internal links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ===== LAZY LOADING IMAGES =====
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src; // Trigger load
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== PERFORMANCE: DEBOUNCE SCROLL =====
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(handleScroll);
}, { passive: true });

// ===== ACCESSIBILITY: KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
  // ESC key closes mobile menu
  if (e.key === 'Escape' && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    const icon = hamburger.querySelector('i');
    icon.className = 'fas fa-bars';
  }
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6c63ff; font-size: 16px; font-weight: bold;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #9090b0; font-size: 14px;');
console.log('%cEmail: medesetbefkad5@gmail.com', 'color: #6c63ff; font-size: 14px;');

// ===== ANIMATION KEYFRAMES (Added via JS for better performance) =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
