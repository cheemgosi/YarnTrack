const express = require('express');
const { getMessage } = require('../controllers/messageController'); // Import controller

const router = express.Router();

// GET /api/message
router.get('/', getMessage);

module.exports = router;  // Export the router
