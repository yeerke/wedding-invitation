document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvpForm');
    const responseMessage = document.getElementById('responseMessage');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission
  
      // Convert form fields to a JSON object
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      // Replace this URL with your deployed Google Apps Script web app URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyJrSteZBstiZwuq2M1zTTZg5X5DmdmLegqZ-EuMRvURcwXla8qDlebOVAiJ3QrM9bT/exec';
  
      // Send the JSON data via fetch
      fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // Using 'no-cors' to avoid CORS issues for a simple submission.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() => {
        responseMessage.textContent = 'Thanks for your RSVP!';
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        responseMessage.textContent = 'There was an error submitting your RSVP. Please try again later.';
      });
    });
  });