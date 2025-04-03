// JavaScript for Trading Analysis Section
document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const reportCards = document.querySelectorAll('.report-card');
    
    // Year tabs functionality
    const yearTabs = document.querySelectorAll('.year-tab');
    const yearReports = document.querySelectorAll('.year-reports');
    
    // Initialize animations for report cards
    reportCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.5s ease';
    });
    
    // Animate cards on page load
    setTimeout(() => {
      animateReportCards();
    }, 300);
    
    // Filter reports based on category
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Filter reports
        reportCards.forEach(card => {
          // Get card categories (could be multiple)
          const cardCategories = card.getAttribute('data-category').split(' ');
          
          if (filterValue === 'all' || cardCategories.includes(filterValue)) {
            card.style.display = 'block';
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
    
    // Year tabs switching
    yearTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs
        yearTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        const yearValue = this.getAttribute('data-year');
        
        // Hide all year reports sections
        yearReports.forEach(section => {
          section.classList.remove('active');
        });
        
        // Show selected year reports
        document.getElementById(`reports-${yearValue}`).classList.add('active');
        
        // Animate cards in the visible section
        setTimeout(() => {
          animateReportCards();
        }, 100);
      });
    });
    
    // Animate report cards when they come into view
    function animateReportCards() {
      const visibleCards = document.querySelectorAll('.year-reports.active .report-card');
      
      visibleCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
    
    // Scroll event to animate elements when they come into view
    window.addEventListener('scroll', function() {
      animateOnScroll();
    });
    
    // Function to animate elements on scroll
    function animateOnScroll() {
      const insightSection = document.querySelector('.market-insight');
      const notificationSection = document.querySelector('.notification-signup');
      
      if (insightSection && isInViewport(insightSection)) {
        insightSection.style.opacity = '1';
        insightSection.style.transform = 'translateY(0)';
      }
      
      if (notificationSection && isInViewport(notificationSection)) {
        notificationSection.style.opacity = '1';
        notificationSection.style.transform = 'translateY(0)';
      }
    }
    
    // Initialize opacity for sections to be animated
    const insightSection = document.querySelector('.market-insight');
    const notificationSection = document.querySelector('.notification-signup');
    
    if (insightSection) {
      insightSection.style.opacity = '0';
      insightSection.style.transform = 'translateY(30px)';
      insightSection.style.transition = 'all 0.6s ease';
    }
    
    if (notificationSection) {
      notificationSection.style.opacity = '0';
      notificationSection.style.transform = 'translateY(30px)';
      notificationSection.style.transition = 'all 0.6s ease';
    }
    
    // Initial check for elements in viewport
    setTimeout(() => {
      animateOnScroll();
    }, 500);
    
    // Live ticker price simulation
    function updateTickerPrices() {
      const prices = {
        bitcoin: Math.floor(Math.random() * 5000) + 35000,
        ethereum: Math.floor(Math.random() * 300) + 2000,
        solana: Math.floor(Math.random() * 30) + 80
      };
      
      const changes = {
        bitcoin: (Math.random() * 5 - 2.5).toFixed(2),
        ethereum: (Math.random() * 5 - 2.5).toFixed(2),
        solana: (Math.random() * 5 - 2.5).toFixed(2)
      };
      
      document.querySelectorAll('[data-crypto]').forEach(el => {
        const crypto = el.getAttribute('data-crypto');
        if (prices[crypto]) {
          el.textContent = '$' + prices[crypto].toLocaleString();
        }
      });
      
      document.querySelectorAll('[data-crypto-change]').forEach(el => {
        const crypto = el.getAttribute('data-crypto-change');
        if (changes[crypto]) {
          const change = parseFloat(changes[crypto]);
          el.textContent = (change >= 0 ? '+' : '') + change + '%';
          el.className = change >= 0 ? 'change positive' : 'change negative';
        }
      });
    }
    
    // Update ticker prices initially and then every 30 seconds
    updateTickerPrices();
    setInterval(updateTickerPrices, 30000);
    
    // PDF viewer functionality
    document.querySelectorAll('.view-report').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create modal for PDF viewer
        const modal = document.createElement('div');
        modal.className = 'pdf-modal';
        modal.innerHTML = `
          <div class="pdf-modal-content">
            <div class="pdf-modal-header">
              <h3>${this.closest('.report-card').querySelector('h3').textContent}</h3>
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
      });
    });
    
    // Notification form submission
    const notificationForm = document.getElementById('notificationForm');
    if (notificationForm) {
      notificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('button');
        const input = this.querySelector('input');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Enviando...';
        
        // Simulate API call
        setTimeout(() => {
          submitBtn.textContent = '¡Suscrito!';
          input.value = '';
          submitBtn.disabled = true;
          
          // Reset button after 3 seconds
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 3000);
        }, 1500);
      });
    }
  });