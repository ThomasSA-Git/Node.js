
import { showToast } from '../../assets/js/toast.js';

// Event listener for the button click
document.getElementById('submitButton').addEventListener('click', (evt) => {
  evt.preventDefault();
  // Get form data
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
      console.log("success")
    // Show success toast
    showToast(data.message, 'success');
    document.getElementById('contactForm').reset();
  })
  .catch(error => {
    // Show error toast
    showToast(`Message not submitted. Error: ${error.message}`, 'error');
  });
});