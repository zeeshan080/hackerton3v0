const express = require('express');
const router = express.Router();
const { generateInfo } = require('./generateInfo');
const cors = require('cors'); // Import the cors package

// Enable CORS for this specific route
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the origin you want to allow
  methods: ['POST'], // Define the HTTP methods you want to allow
};

router.post('/generateInfo', cors(corsOptions), generateInfo);

module.exports = router;
