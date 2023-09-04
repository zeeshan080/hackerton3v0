/* 
Create a server with the following specifications:

1. Use express node module and import it
2. Create a server with express and name it app
3. Get the port from the environment variable PORT or use 8080
4. enable body parser to accept json data
5. state which port the server is listening to
*/ 

const express = require('express');
const dotenv = require('dotenv').config();
const PORT = 8080;
const cors = require('cors'); // Import the cors package

const app = express();

// enable body parser to accept json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add CORS middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST'],
};
app.use('/openai', cors(corsOptions));

// Add OPTIONS method handler for CORS preflight requests
app.options('*', cors(corsOptions));

// Add your router
app.use('/openai', require('./router'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));