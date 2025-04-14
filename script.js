// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  
  // DOM Elements
  const navbar = document.querySelector('.navbar');
  const scrollUpBtn = document.querySelector('.scroll-up-btn');
  const navToggle = document.getElementById('navToggle');
  const menu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.menu-btn');
  const progressBar = document.getElementById('progressBar');
  const sections = document.querySelectorAll('section');
  const themeSwitch = document.getElementById('checkbox');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');
  const skillBars = document.querySelectorAll('.skill-progress');
  
  // Dropdown elements (new navigation)
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');
  const langToggle = document.querySelector('.lang-toggle');
  const langSwitch = document.querySelector('.language-switch');
  
  // Initialize animations
  initializeFadeInElements();
  initializeSkillBars();
  
  // Scroll event listeners
  window.addEventListener('scroll', function() {
    // Sticky navbar
    if (window.scrollY > 20) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
    
    // Scroll-up button visibility
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add('show');
    } else {
      scrollUpBtn.classList.remove('show');
    }
    
    // Update progress bar
    updateProgressBar();
    
    // Animate elements on scroll
    animateOnScroll();
    
    // Highlight active nav item
    highlightNavItem();
  });
  
  // Mobile menu functionality - IMPROVED VERSION
  if (navToggle && menu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }
  
  // Close menu when clicking menu items
  if (menuLinks.length) {
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Only prevent default for dropdown toggle on desktop
        if (this.classList.contains('dropdown-toggle') && window.innerWidth > 991) {
          // Don't prevent default on desktop - let hover work
        } else if (this.classList.contains('dropdown-toggle')) {
          e.preventDefault();
        }
        
        // Always close the main mobile menu when clicking a regular link
        if (!this.classList.contains('dropdown-toggle') && !this.classList.contains('lang-toggle')) {
          menu.classList.remove('active');
          if (navToggle) navToggle.classList.remove('active');
        }
      });
    });
  }
  
  // Dropdown toggle for mobile
  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        dropdown.classList.toggle('active');
        
        // Close other dropdowns when opening this one
        if (langSwitch && langSwitch.classList.contains('active')) {
          langSwitch.classList.remove('active');
        }
      }
    });
  }
  
  // Language toggle for mobile
  if (langToggle && langSwitch) {
    langToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        langSwitch.classList.toggle('active');
        
        // Close other dropdowns when opening this one
        if (dropdown && dropdown.classList.contains('active')) {
          dropdown.classList.remove('active');
        }
      }
    });
  }
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 991) {
      // Check if click is outside dropdown elements
      if (dropdown && dropdownToggle && !dropdown.contains(e.target) && !dropdownToggle.contains(e.target)) {
        dropdown.classList.remove('active');
      }
      
      // Check if click is outside language switch elements
      if (langSwitch && langToggle && !langSwitch.contains(e.target) && !langToggle.contains(e.target)) {
        langSwitch.classList.remove('active');
      }
    }
  });
  
  // Handle window resize - reset mobile menus when switching to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 991) {
      if (dropdown && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
      }
      
      if (langSwitch && langSwitch.classList.contains('active')) {
        langSwitch.classList.remove('active');
      }
    }
  });
  
  // Scroll to top button
  if (scrollUpBtn) {
    scrollUpBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Theme switcher
  if (themeSwitch) {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
  
  // Resource filter
  if (filterBtns.length && resourceCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter resources
        resourceCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Typing animation using Typed.js
  if (typeof Typed !== 'undefined') {
    const options = {
      strings: ["Criptomonedas", "Web3", "Inversiones", "Trading", "NFTs"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    
    const typed = document.querySelector('.typing');
    if (typed) new Typed('.typing', options);
    
    const typed2 = document.querySelector('.typing-2');
    if (typed2) {
      new Typed('.typing-2', {
        strings: ["Ingeniero de sistemas.", "Inversionista.", "Trader.", "NFT Lover."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }
  }
  
  // Initialize particles.js if available
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false
        },
        size: {
          value: 3,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }
  
  // Podcast player functionality
  const featuredPodcast = document.querySelector('.featured-podcast');
  if (featuredPodcast) {
    featuredPodcast.addEventListener('click', function() {
      // Aquí puedes añadir lógica para reproducir el podcast
      // o redirigir a la página del podcast
      console.log('Podcast clicked');
      
      // Para demo, podemos mostrar un mensaje
      const playIcon = this.querySelector('.fa-play-circle');
      if (playIcon) {
        playIcon.classList.remove('fa-play-circle');
        playIcon.classList.add('fa-pause-circle');
        
        setTimeout(() => {
          playIcon.classList.remove('fa-pause-circle');
          playIcon.classList.add('fa-play-circle');
        }, 2000);
      }
    });
  }
  
  // Fetch crypto prices if price elements exist
  const cryptoPrices = document.querySelectorAll('[data-crypto]');
  const cryptoChanges = document.querySelectorAll('[data-crypto-change]');
  
  if (cryptoPrices.length > 0) {
    fetchCryptoPrices();
    // Update prices every 60 seconds
    setInterval(fetchCryptoPrices, 60000);
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitBtn = this.querySelector('.submit-btn');
      submitBtn.textContent = 'Enviando...';
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = 'Mensaje enviado!';
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = 'Enviar mensaje';
        }, 3000);
      }, 1500);
    });
  }
  
  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitBtn = this.querySelector('.newsletter-btn');
      const input = this.querySelector('input');
      submitBtn.textContent = 'Suscribiendo...';
      
      // Simulate API call
      setTimeout(() => {
        submitBtn.textContent = '¡Suscrito!';
        input.value = '';
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitBtn.textContent = 'Suscribirse';
        }, 3000);
      }, 1500);
    });
  }
  
  // Helper Functions
  
  // Update scroll progress bar
  function updateProgressBar() {
    if (!progressBar) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    progressBar.style.width = scrolled + '%';
  }
  
  // Initialize fade-in elements
  function initializeFadeInElements() {
    const fadeElements = document.querySelectorAll('.home-content, .section-title, .card, .column, .skill-item, .resource-card, .info-item');
    
    fadeElements.forEach(element => {
      element.classList.add('fadeIn');
      element.style.opacity = '0';
    });
  }
  
  // Initialize skill bars with zero width
  function initializeSkillBars() {
    if (!skillBars.length) return;
    
    skillBars.forEach(bar => {
      bar.style.width = '0';
    });
  }
  
  // Animate elements when they come into view
  function animateOnScroll() {
    const fadeElements = document.querySelectorAll('.fadeIn');
    
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.8;
      
      if (elementTop < triggerPoint) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
    
    // Animate skill bars
    if (isInViewport(document.querySelector('.skills'))) {
      skillBars.forEach(bar => {
        bar.style.width = bar.classList.contains('nft-progress') ? '90%' :
                          bar.classList.contains('trading-progress') ? '70%' :
                          bar.classList.contains('education-progress') ? '60%' : '50%';
      });
    }
  }
  
  // Check if element is in viewport
  function isInViewport(element) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Active menu item highlighting based on scroll
  function highlightNavItem() {
    const scrollPos = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.menu-btn');
    
    // Find which section is currently in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Remove active class from all menu items
        navItems.forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to corresponding menu item
        const correspondingItem = document.querySelector(`.menu-btn[href="#${sectionId}"]`);
        if (correspondingItem) {
          correspondingItem.classList.add('active');
        }
      }
    });
  }
  
  // Fetch crypto prices from a public API
  async function fetchCryptoPrices() {
    try {
      // In a real implementation, you would use a real API
      // This is a simulation for demonstration purposes
      const mockData = {
        bitcoin: {
          price: Math.floor(Math.random() * 10000) + 30000,
          change: (Math.random() * 10 - 5).toFixed(2)
        },
        ethereum: {
          price: Math.floor(Math.random() * 1000) + 2000,
          change: (Math.random() * 10 - 5).toFixed(2)
        },
        solana: {
          price: Math.floor(Math.random() * 50) + 100,
          change: (Math.random() * 10 - 5).toFixed(2)
        }
      };
      
      // Update price elements
      cryptoPrices.forEach(element => {
        const crypto = element.getAttribute('data-crypto');
        if (mockData[crypto]) {
          element.textContent = '$' + mockData[crypto].price.toLocaleString();
        }
      });
      
      // Update change elements
      cryptoChanges.forEach(element => {
        const crypto = element.getAttribute('data-crypto-change');
        if (mockData[crypto]) {
          const change = parseFloat(mockData[crypto].change);
          element.textContent = (change >= 0 ? '+' : '') + change + '%';
          element.className = change >= 0 ? 'ticker-change positive' : 'ticker-change negative';
        }
      });
    } catch (error) {
      console.error('Error fetching crypto prices:', error);
    }
  }
});