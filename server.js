// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Dummy data
const internData = {
  name: "Khushi Doye",
  referralCode: "khushi2025",
  totalDonations: 2500
};

// API endpoint
app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

