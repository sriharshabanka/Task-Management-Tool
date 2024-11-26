const express = require('express');
const db = require('../config');
const router = express.Router();

// Assign Task to Team Member
router.post('/assignTask', (req, res) => {
    const { projectId, memberId, taskDescription } = req.body;
    const query = 'INSERT INTO tasks (projectId, memberId, description, status) VALUES (?, ?, ?, "Pending")';
    db.query(query, [projectId, memberId, taskDescription], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: 'Task assigned successfully' });
    });
});

module.exports = router;
