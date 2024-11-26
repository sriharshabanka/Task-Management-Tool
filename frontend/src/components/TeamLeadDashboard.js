import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeamLeadDashboard() {
    const [projectId, setProjectId] = useState('');
    const [memberId, setMemberId] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [tasks, setTasks] = useState([]);

    // Fetch tasks for the current team lead's project
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/teamLead/tasks?projectId=${projectId}`);
                setTasks(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        if (projectId) fetchTasks();
    }, [projectId]);

    const assignTask = async () => {
        try {
            await axios.post('http://localhost:5000/teamLead/assignTask', {
                projectId,
                memberId,
                taskDescription,
            });
            alert('Task assigned successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to assign task');
        }
    };

    return (
        <div>
            <h1>Team Lead Dashboard</h1>
            <input
                type="text"
                placeholder="Project ID"
                onChange={(e) => setProjectId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Team Member ID"
                onChange={(e) => setMemberId(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                onChange={(e) => setTaskDescription(e.target.value)}
            ></textarea>
            <button onClick={assignTask}>Assign Task</button>

            <h2>Assigned Tasks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Member ID</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                            <td>{task.memberId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeamLeadDashboard;
