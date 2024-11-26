import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemberDashboard() {
    const [memberId, setMemberId] = useState('');
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [status, setStatus] = useState('');

    // Fetch tasks assigned to the current member
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/member/tasks?memberId=${memberId}`);
                setTasks(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        if (memberId) fetchTasks();
    }, [memberId]);

    const updateTaskStatus = async () => {
        try {
            await axios.post('http://localhost:5000/member/updateTask', {
                taskId: selectedTaskId,
                status,
            });
            alert('Task status updated successfully');
        } catch (err) {
            console.error(err);
            alert('Failed to update task status');
        }
    };

    return (
        <div>
            <h1>Member Dashboard</h1>
            <input
                type="text"
                placeholder="Your Member ID"
                onChange={(e) => setMemberId(e.target.value)}
            />

            <h2>Your Tasks</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.description}</td>
                            <td>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Update Task Status</h2>
            <input
                type="text"
                placeholder="Task ID"
                onChange={(e) => setSelectedTaskId(e.target.value)}
            />
            <select onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button onClick={updateTaskStatus}>Update Status</button>
        </div>
    );
}

export default MemberDashboard;
