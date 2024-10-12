// Controller function for GET /api/message
exports.getMessage = (req, res) => {
    res.json({ message: 'Hello from the Node.js API!' });
};
