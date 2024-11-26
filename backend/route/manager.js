const express = require('express');
const db = require('../config');
const router = express.Router();

// Create Project
router.post('/createProject', (req, res) => {
    const { name, description } = req.body;
    const query = 'INSERT INTO projects (name, description) VALUES (?, ?)';
    db.query(query, [name, description], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: 'Project created successfully' });
    });
});

// Assign Team Lead to Project
router.post('/assignTeamLead', (req, res) => {
    const { projectId, teamLeadId } = req.body;
    const query = 'UPDATE projects SET teamLeadId = ? WHERE id = ?';
    db.query(query, [teamLeadId, projectId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(200).json({ message: 'Team lead assigned successfully' });
    });
});

module.exports = router;
