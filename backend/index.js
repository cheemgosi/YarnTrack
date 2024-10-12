require('dotenv').config();  // Load environment variables from .env

const app = require('./src/config/server'); // Import the app from server.js

const PORT = process.env.PORT || 5000;  // Read from .env or use default

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
