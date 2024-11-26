import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const login = () => {
        if (role === 'manager') {
            navigate('/manager');
        } else if (role === 'team_lead') {
            navigate('/teamLead');
        } else if (role === 'member') {
            navigate('/member');
        } else {
            alert('Invalid role selected');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <select onChange={(e) => setRole(e.target.value)}>
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="team_lead">Team Lead</option>
                <option value="member">Member</option>