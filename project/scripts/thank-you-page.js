  // Thank-you page 

  document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
  
    // Get and display the values from the URL query parameters
    document.getElementById('thank-name').textContent = params.get('fullName');
    document.getElementById('thank-email').textContent = params.get('email');
    document.getElementById('thank-phone').textContent = params.get('phone');
    document.getElementById('thank-Sponsorship').textContent = params.get('tier');
    document.getElementById('thank-timestamp').textContent = params.get('timestamp');
  });
  