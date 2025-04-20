document.addEventListener('DOMContentLoaded', () => {
  // Grab your form by its class name
  const form = document.querySelector('.rsvp-form');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default page‐reload submission

    // Serialize the form into a JS object
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Your deployed Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyJrSteZBstiZwuq2M1zTTZg5X5DmdmLegqZ-EuMRvURcwXla8qDlebOVAiJ3QrM9bT/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(() => {
      responseMessage.textContent = 'Рахмет! RSVP жіберілді.';
      responseMessage.style.color = 'green';
      form.reset();
    })
    .catch((err) => {
      console.error('Submission error:', err);
      responseMessage.textContent = 'Қате пайда болды. Қайтадан көріңіз.';
      responseMessage.style.color = 'red';
    });
  });
});