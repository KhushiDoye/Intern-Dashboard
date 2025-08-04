fetch('http://localhost:3000/api/intern')
  .then(response => response.json())
  .then(data => {
    document.getElementById('name').textContent = data.name;
    document.getElementById('referral').textContent = data.referralCode;
    document.getElementById('donations').textContent = data.totalDonations;
  })
  .catch(error => console.error('Error fetching data:', error));
