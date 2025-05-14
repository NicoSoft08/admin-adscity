import { ExternalLink, X } from 'lucide-react';
import React, { useContext } from 'react';
import { adminSidebarData } from '../../data';
import { LanguageContext } from '../../contexts/LanguageContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconAvatar } from '../../config/images';
import '../../styles/Sidebar.scss';
import { AuthContext } from '../../contexts/AuthContext';

export default function Sidebar({ isOpen, closeSidebar }) {
    const { language } = useContext(LanguageContext);
    const { userData } = useContext(AuthContext);


    const profileImage = userData?.profilURL || IconAvatar;
    
    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div className="overlay" onClick={closeSidebar} />
            )}

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-content">

                    {/* LOGO */}
                    <div className="logo-section">
                        <div className="logo">AdsCity</div>
                        <button className="close-button" onClick={closeSidebar}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* NAV ITEMS */}
                    <nav className="nav">
                        {adminSidebarData(language).map(({ id, name, icon, path }) => (
                            <NavLink
                                key={id}
                                to={path}
                                onClick={closeSidebar}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <FontAwesomeIcon icon={icon} className="nav-icon" />
                                <span className="nav-label">{name}</span>
                                {id === 'profile' && <ExternalLink className='external-link' size={16} />}
                            </NavLink>
                        ))}
                    </nav>

                    {/* USER INFO */}
                    <div className="user-info">
                        <div className="user-details">
                            {/* AVATAR */}
                            <img
                                src={profileImage}
                                alt="User Avatar"
                                className="avatar"
                            />
                            <div className="user-text">
                                <p className="user-name">{userData?.firstName} {userData?.lastName}</p>
                                <p className="user-email">{userData?.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};
