const express = require('express');
const db = require('../config');
const router = express.Router();

// Update Task Status
router.post('/updateTask', (req, res) => {
    const { taskId, status } = req.body;
    const query = 'UPDATE tasks SET status = ? WHERE id = ?';
    db.query(query, [status, taskId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: 'Task status updated successfully' });
    });
});

module.exports = router;
