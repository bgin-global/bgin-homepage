/* Block 13 JavaScript - Interactive Functionality */
/* Handles tab switching, toggles, accordion behavior, and scroll animations */

document.addEventListener('DOMContentLoaded', function () {
  
  // Tab switching for Program section (October 15, 16, 17)
  function initTabSwitching() {
    const tabs = document.querySelectorAll('.block14-tab');
    const tabContents = document.querySelectorAll('.block14-tab-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const targetDay = this.dataset.day;
        
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        tabContents.forEach(content => {
          content.style.display = 'none';
          content.classList.remove('active');
        });
        
        // Show target content
        const targetContent = document.querySelector(`[data-day-content="${targetDay}"]`);
        if (targetContent) {
          targetContent.style.display = 'block';
          targetContent.classList.add('active');
        }
        
        // Load agenda for the selected day
        loadAgenda(targetDay);
      });
    });
    
    // Initialize first tab as active if none are selected
    if (!document.querySelector('.block14-tab.active')) {
      const firstTab = document.querySelector('.block14-tab');
      if (firstTab) {
        firstTab.click();
      }
    }
  }
  
  // Toggle views for "By Time" and "By Room"
  function initViewToggle() {
    const timeToggle = document.getElementById('view-time') || document.querySelector('[data-view="time"]');
    const roomToggle = document.getElementById('view-room') || document.querySelector('[data-view="room"]');
    
    function switchView(viewType) {
      // Update toggle states
      document.querySelectorAll('.block14-toggle').forEach(toggle => {
        toggle.classList.remove('active');
      });
      
      if (viewType === 'time') {
        timeToggle?.classList.add('active');
        showTimeLayout();
      } else if (viewType === 'room') {
        roomToggle?.classList.add('active');
        showRoomLayout();
      }
    }
    
    // Event listeners
    timeToggle?.addEventListener('click', () => switchView('time'));
    roomToggle?.addEventListener('click', () => switchView('room'));
    
    // Initialize with time view
    switchView('time');
  }
  
  // Show time-based layout
  function showTimeLayout() {
    const timeView = document.querySelector('.time-view');
    const roomView = document.querySelector('.room-view');
    
    if (timeView) timeView.style.display = 'block';
    if (roomView) roomView.style.display = 'none';
    
    console.log('Switched to time layout');
  }
  
  // Show room-based layout
  function showRoomLayout() {
    const timeView = document.querySelector('.time-view');
    const roomView = document.querySelector('.room-view');
    
    if (roomView) roomView.style.display = 'block';
    if (timeView) timeView.style.display = 'none';
    
    console.log('Switched to room layout');
  }
  
  // Accordion behavior with smooth transitions
  function initAccordion() {
    const accordions = document.querySelectorAll('.block14-accordion');
    
    accordions.forEach(accordion => {
      const header = accordion.querySelector('.block14-accordion-header');
      const content = accordion.querySelector('.block14-accordion-content');
      const icon = accordion.querySelector('.block14-accordion-icon');
      
      if (!header || !content) return;
      
      header.addEventListener('click', function() {
        const isOpen = content.classList.contains('open');
        
        // Toggle current accordion
        if (isOpen) {
          content.classList.remove('open');
          icon?.classList.remove('open');
          content.style.maxHeight = '0px';
        } else {
          content.classList.add('open');
          icon?.classList.add('open');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
    
    // Also handle simple accordion toggles
    const toggles = document.querySelectorAll('.accordion-toggle');
    const contents = document.querySelectorAll('.accordion-content');
    
    toggles.forEach((toggle, index) => {
      toggle.addEventListener('click', () => {
        const content = contents[index] || document.querySelector('.accordion-content');
        if (content) {
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }
  
  // Fade-in effects on scroll for project cards and sections
  function initScrollAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .fade-in-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .fade-in-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      @media (prefers-reduced-motion: reduce) {
        .fade-in-on-scroll {
          opacity: 1;
          transform: none;
          transition: none;
        }
      }
    `;
    document.head.appendChild(style);
    
    // Set up intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    // Observe cards and sections
    const elementsToAnimate = document.querySelectorAll(`
      .block14-card,
      .project-card,
      .block14-publication-card,
      .block14-session-card,
      .block14-sponsor-card,
      .block14-section
    `);
    
    elementsToAnimate.forEach(el => {
      el.classList.add('fade-in-on-scroll');
      observer.observe(el);
    });
  }
  
  // Load agenda for specific day
  function loadAgenda(day) {
    console.log(`Loading agenda for ${day}`);
    
    // Here you would typically fetch data from an API
    // fetch(`/api/agenda/${day}`)
    //   .then(response => response.json())
    //   .then(data => renderAgenda(data))
    //   .catch(error => console.error('Error loading agenda:', error));
    
    // For now, just update the display
    const agendaContainer = document.querySelector('.agenda-container');
    if (agendaContainer) {
      agendaContainer.innerHTML = `<p>Loading agenda for ${day}...</p>`;
    }
  }
  
  // Initialize all functionality
  function init() {
    try {
      initTabSwitching();
      initViewToggle();
      initAccordion();
      initScrollAnimations();
      
      console.log('Block 13 JavaScript initialized successfully');
    } catch (error) {
      console.error('Error initializing Block 13 JavaScript:', error);
    }
  }
  
  // Run initialization
  init();
  
  // Make functions available globally for debugging
  window.block14 = {
    loadAgenda,
    showTimeLayout,
    showRoomLayout,
    init
  };
});

// Utility functions
function loadAgenda(day) {
  console.log(`Loading agenda for ${day}`);
  // Add your fetch/render logic here
}

function renderAgenda(agendaData) {
  console.log('Rendering agenda:', agendaData);
  // Add your rendering logic here
}
