// Additional JavaScript for recursos.html page
document.addEventListener('DOMContentLoaded', function() {
    // Override typing animation strings for this page
    if (typeof Typed !== 'undefined') {
      // Override main typing animation
      const mainTyping = document.querySelector('.typing');
      if (mainTyping) {
        const typed = new Typed('.typing', {
          strings: ["Educación Cripto.", "Análisis de Mercado.", "Comunidad.", "NFTs."],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
        });
      }
      
      // Override second typing animation
      const secondTyping = document.querySelector('.typing-2');
      if (secondTyping) {
        const typed2 = new Typed('.typing-2', {
          strings: ["un proceso.", "crucial.", "la base de todo.", "el camino."],
          typeSpeed: 80,
          backSpeed: 60,
          loop: true
        });
      }
    }
    
    // Animate education levels on scroll
    const educationLevels = document.querySelectorAll('.education-level');
    
    function animateEducationLevels() {
      educationLevels.forEach((level, index) => {
        if (isInViewport(level)) {
          // Add staggered animation delay based on index
          setTimeout(() => {
            level.style.opacity = '1';
            level.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }
    
    // Initialize education levels with opacity 0
    educationLevels.forEach(level => {
      level.style.opacity = '0';
      level.style.transform = 'translateY(20px)';
      level.style.transition = 'all 0.6s ease';
    });
    
    // Discord card hover effect
    const discordCard = document.querySelector('.discord-card');
    if (discordCard) {
      discordCard.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      discordCard.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    }
    
    // Report cards load animation
    const reportCards = document.querySelectorAll('.report-card');
    
    function animateReportCards() {
      reportCards.forEach((card, index) => {
        if (isInViewport(card)) {
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }
    
    // Initialize report cards with opacity 0
    reportCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
    });
    
    // NFT categories animation
    const nftCategories = document.querySelectorAll('.nft-category');
    
    function animateNftCategories() {
      nftCategories.forEach((category, index) => {
        if (isInViewport(category)) {
          setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
          }, index * 150);
        }
      });
    }
    
    // Initialize NFT categories with opacity 0
    nftCategories.forEach(category => {
      category.style.opacity = '0';
      category.style.transform = 'translateY(20px)';
      category.style.transition = 'all 0.6s ease';
    });
    
    // Add scroll event listener for animations
    window.addEventListener('scroll', function() {
      animateEducationLevels();
      animateReportCards();
      animateNftCategories();
    });
    
    // Initial animation check (in case elements are already in viewport)
    setTimeout(() => {
      animateEducationLevels();
      animateReportCards();
      animateNftCategories();
    }, 300);
    
    // Helper function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
      );
    }
  });