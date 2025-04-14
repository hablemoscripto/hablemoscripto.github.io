// Improved animation script with performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Helper function to check if element is in viewport with threshold
  function isInViewport(element, threshold = 0) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    return (
      rect.top <= windowHeight - threshold &&
      rect.bottom >= threshold
    );
  }

  // Navbar scroll transition effect
  function setupNavbarTransition() {
    const navbar = document.querySelector('.navbar');
    let ticking = false;
    
    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add 'sticky' class when scrolled beyond 50px
          if (window.scrollY > 50) {
            navbar.classList.add('sticky');
          } else {
            navbar.classList.remove('sticky');
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    
    // Initial check on page load
    handleScroll();
    
    // Listen for scroll events with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Animate expertise bars with optimized performance
  function setupExpertiseAnimations() {
    const expertiseBars = document.querySelectorAll('.expertise-fill');
    let ticking = false;
    
    // Initialize all bars to zero width but store target width
    expertiseBars.forEach(bar => {
      const fillWidth = bar.style.getPropertyValue('--fill-width');
      bar.setAttribute('data-target-width', fillWidth);
      bar.style.width = '0';
      
      // Animate immediately if already in viewport on page load
      if (isInViewport(bar, 100)) {
        bar.style.width = fillWidth;
      }
    });
    
    // Optimize scroll event with requestAnimationFrame
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          expertiseBars.forEach(bar => {
            if (bar.style.width === '0px' && isInViewport(bar, 100)) {
              const targetWidth = bar.getAttribute('data-target-width');
              bar.style.width = targetWidth;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  
  // Add subtle entrance animations for journey items
  function setupJourneyAnimations() {
    const journeyItems = document.querySelectorAll('.journey-item');
    let ticking = false;
    
    // Add CSS classes for animation states
    journeyItems.forEach(item => {
      if (!isInViewport(item, 150)) {
        item.classList.add('journey-hidden');
      }
    });
    
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          journeyItems.forEach(item => {
            if (item.classList.contains('journey-hidden') && isInViewport(item, 150)) {
              item.classList.remove('journey-hidden');
              item.classList.add('journey-visible');
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }
    
    // Initial check
    onScroll();
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  
  // Initialize all animations
  setupNavbarTransition(); // Add the navbar transition first
  setupExpertiseAnimations();
  setupJourneyAnimations();
});