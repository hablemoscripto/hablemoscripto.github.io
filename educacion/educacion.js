// Education Portal Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Education Navigation Active State
    const eduNavItems = document.querySelectorAll('.edu-nav-item');
    const eduSections = document.querySelectorAll('.education-level');
    
    // Update active nav item based on scroll position
    function updateNavActive() {
      let current = '';
      
      eduSections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });
      
      eduNavItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        
        if (href === `#${current}`) {
          item.classList.add('active');
        }
      });
    }
    
    // Smooth scroll to section when nav item is clicked
    eduNavItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
          });
          
          // Update active state
          eduNavItems.forEach(navItem => navItem.classList.remove('active'));
          this.classList.add('active');
        }
      });
    });
    
    // Handle sticky education navigation
    const eduNav = document.querySelector('.education-nav');
    let navOffset = eduNav ? eduNav.offsetTop : 0;
    
    function handleStickyNav() {
      if (window.scrollY > navOffset) {
        eduNav.classList.add('sticky');
        document.body.style.paddingTop = eduNav.offsetHeight + 'px';
      } else {
        eduNav.classList.remove('sticky');
        document.body.style.paddingTop = 0;
      }
    }
    
    // Track progress through topics
    const topicLinks = document.querySelectorAll('.topic-link');
    
    topicLinks.forEach(link => {
      // Check if this topic has been viewed before
      const topicUrl = link.getAttribute('href');
      if (localStorage.getItem('viewedTopic_' + topicUrl)) {
        // Mark as viewed
        const topicCard = link.closest('.topic-card');
        if (topicCard) {
          topicCard.classList.add('topic-viewed');
        }
      }
      
      // Set topic as viewed when clicked
      link.addEventListener('click', function() {
        const topicUrl = this.getAttribute('href');
        localStorage.setItem('viewedTopic_' + topicUrl, 'true');
      });
    });
    
    // Learning path hover effects
    const pathSteps = document.querySelectorAll('.path-step');
    
    pathSteps.forEach(step => {
      step.addEventListener('mouseenter', function() {
        this.classList.add('path-step-active');
      });
      
      step.addEventListener('mouseleave', function() {
        this.classList.remove('path-step-active');
      });
    });
    
    // Event listeners
    window.addEventListener('scroll', function() {
      updateNavActive();
      if (eduNav) handleStickyNav();
    });
    
    // Initialize
    updateNavActive();
    if (eduNav) handleStickyNav();
    
    // Optional: Animate elements on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.topic-card, .resource-card, .path-step');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('animate-in');
        }
      });
    }
    
    // Enable animations on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
  });