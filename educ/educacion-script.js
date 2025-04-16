// JavaScript for Education Section
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const resourceCards = document.querySelectorAll('.resource-card');
    
    // Initialize resource cards with animation
    resourceCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
      
      // Staggered animation on page load
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 + (index * 100));
    });
    
    // Filter resources based on category
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
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
    
    // Animation for roadmap items
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    
    roadmapItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(20px)';
      item.style.transition = 'all 0.6s ease';
    });
    
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
    
    // Function to animate roadmap items when they come into view
    function animateRoadmapItems() {
      roadmapItems.forEach((item, index) => {
        if (isInViewport(item)) {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          }, index * 200);
        }
      });
    }
    
    // Check on scroll and on page load
    window.addEventListener('scroll', animateRoadmapItems);
    setTimeout(animateRoadmapItems, 500);
    
    // Handle form submissions
    const requestForm = document.getElementById('requestForm');
    if (requestForm) {
      requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        
        // Simulate API call
        setTimeout(() => {
          submitBtn.textContent = '¡Solicitud enviada!';
          this.reset();
          
          // Show a thank you message
          const formGroups = this.querySelectorAll('.form-group');
          formGroups.forEach(group => {
            group.style.display = 'none';
          });
          
          // Create and insert thank you message
          const thankYouMessage = document.createElement('div');
          thankYouMessage.className = 'thank-you-message';
          thankYouMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>¡Gracias por tu solicitud!</h3>
            <p>Hemos recibido tu petición y trabajaremos en crear contenido sobre el tema solicitado.</p>
          `;
          
          this.insertBefore(thankYouMessage, submitBtn);
          submitBtn.style.display = 'none';
          
          // Reset form after 5 seconds
          setTimeout(() => {
            formGroups.forEach(group => {
              group.style.display = 'block';
            });
            
            if (thankYouMessage.parentNode) {
              thankYouMessage.parentNode.removeChild(thankYouMessage);
            }
            
            submitBtn.style.display = 'inline-block';
            submitBtn.textContent = originalText;
          }, 5000);
        }, 1500);
      });
    }
    
    // Newsletter form functionality
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
    
    // Add PDF viewer modal functionality
    document.querySelectorAll('.resource-link').forEach(link => {
      // Skip if it's a coming soon resource
      if (link.closest('.coming-soon')) return;
      
      link.addEventListener('click', function(e) {
        // Only if it's a PDF link
        if (this.href.endsWith('.pdf')) {
          e.preventDefault();
          
          // Create modal for PDF viewer
          const modal = document.createElement('div');
          modal.className = 'pdf-modal';
          modal.innerHTML = `
            <div class="pdf-modal-content">
              <div class="pdf-modal-header">
                <h3>${this.closest('.resource-card').querySelector('h3').textContent}</h3>
                <button class="close-modal">&times;</button>
              </div>
              <div class="pdf-modal-body">
                <iframe src="${this.href}" width="100%" height="100%"></iframe>
              </div>
            </div>
          `;
          
          document.body.appendChild(modal);
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          
          // Close modal on click
          modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
            document.body.style.overflow = '';
          });
          
          // Close modal when clicking outside
          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              document.body.removeChild(modal);
              document.body.style.overflow = '';
            }
          });
        }
      });
    });
    
    // Add styles for PDF modal
    const style = document.createElement('style');
    style.textContent = `
      .pdf-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      
      .pdf-modal-content {
        background-color: white;
        width: 90%;
        max-width: 900px;
        height: 90vh;
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      
      .pdf-modal-header {
        padding: 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
      }
      
      .pdf-modal-header h3 {
        margin: 0;
      }
      
      .close-modal {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
      }
      
      .pdf-modal-body {
        flex-grow: 1;
        overflow: hidden;
      }
      
      .pdf-modal-body iframe {
        border: none;
      }
      
      .thank-you-message {
        text-align: center;
        padding: 30px 0;
      }
      
      .thank-you-message i {
        font-size: 48px;
        color: #45B36B;
        margin-bottom: 15px;
      }
    `;
    
    document.head.appendChild(style);
  });