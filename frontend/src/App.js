import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ManagerDashboard from './components/ManagerDashboard';
import TeamLeadDashboard from './components/TeamLeadDashboard';
import MemberDashboard from './components/MemberDashboard';
import Login from './components/Login';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/manager" element={<ManagerDashboard />} />
                <Route path="/teamLead" element={<TeamLeadDashboard />} />
                <Route path="/member" element={<MemberDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
