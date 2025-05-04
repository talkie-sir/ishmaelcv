document.addEventListener('DOMContentLoaded', function() {
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Get the elements we want to apply the effect to
  const fadeElements = [
    document.querySelector('.icons-container'),
    document.querySelector('#my_pic')
  ];

  // Get the education items
  const educationItems = document.querySelectorAll('.education-item');

  // Add these to fadeElements array
  educationItems.forEach(item => {
    fadeElements.push(item);
  });

  // Select all text elements to fade
  const textElements = document.querySelectorAll('h1, h2, p, strong');

  // Add fade class to all text elements
  textElements.forEach(function(element) {
    if (!element.closest('#header')) { // Don't apply to header elements
      element.classList.add('fade-text');
      // Check initial visibility
      if (isInViewport(element)) {
        element.classList.add('visible');
      }
    }
  });

  // Initial check on page load for main elements
  fadeElements.forEach(function(element) {
    if (element && isInViewport(element)) {
      element.classList.add('visible');
    }
  });

  // Listen for scroll events
  window.addEventListener('scroll', function() {
    // Check main elements
    fadeElements.forEach(function(element) {
      if (element) {
        if (isInViewport(element)) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
    });

    // Check text elements
    textElements.forEach(function(element) {
      if (!element.closest('#header')) { // Don't apply to header elements
        if (isInViewport(element)) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
    });
  });
});
