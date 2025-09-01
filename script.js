document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.querySelector('.video-placeholder');
    const modal = document.getElementById('video-modal');
    const modalContent = modal.querySelector('.video-modal-content');
    const closeBtn = modal.querySelector('.modal-close');


        // 1. Focus‐trap setup
    const FOCUSABLE_SELECTORS =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    let previousFocus, firstFocusable, lastFocusable;

    function trapTabKey(e) {
      if (e.key !== 'Tab') return;

      // Shift+Tab
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      }
      // Tab
      else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  
    // Function to open the modal and inject the iframe
    function openModal() {
      // Clear out any previous iframe
      const existing = modalContent.querySelector('iframe');
      if (existing) existing.remove();
  
      // Create the YouTube iframe
      const iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/Dk8zgM7oKh0?autoplay=1';
      iframe.title = 'Demo of RateMyPrUFessor';
      iframe.frameBorder = '0';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
  
      // Absolutely position it to fill the modal
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
  
      modalContent.appendChild(iframe);
      modal.classList.add('active');
    }
  
    // Function to close the modal and remove the iframe
    function closeModal() {
      modal.classList.remove('active');
      const iframe = modalContent.querySelector('iframe');
      if (iframe) {
        iframe.remove();
      }
    }
  
    // Open when clicking the thumbnail block
    placeholder.addEventListener('click', openModal);
  
    // Close when clicking the “×” button
    closeBtn.addEventListener('click', closeModal);
  
    // Close when clicking outside the video (on the backdrop)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  });
  