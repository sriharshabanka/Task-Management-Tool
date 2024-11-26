import React, { useState } from 'react';
import axios from 'axios';

function ManagerDashboard() {
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');

    const createProject = async () => {
        try {
            await axios.post('http://localhost:5000/manager/createProject', {
                name: projectName,
                description
            });
            alert('Project created successfully');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Manager Dashboard</h1>
            <input type="text" placeholder="Project Name" onChange={(e) => setProjectName(e.target.value)} />
            <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
            <button onClick={createProject}>Create Project</button>
        </div>
    );
}

export default ManagerDashboard;
