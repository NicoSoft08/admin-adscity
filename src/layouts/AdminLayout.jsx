import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const homeURL = process.env.REACT_APP_HOME_URL;
const authURL = process.env.REACT_APP_AUTH_URL;

export default function AdminLayout() {
    const { currentUser, userRole } = useContext(AuthContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        if (!currentUser) {
            window.location.href = `${authURL}/signin`;
        } else if (userRole !== 'admin') {
            window.location.href = `${homeURL}/access-denied`;
        }
    }, [currentUser, userRole]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="account-layout">
            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

            <div className="layout-content">
                <Header toggleSidebar={toggleSidebar} />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
