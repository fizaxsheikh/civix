// MenuList.jsx with state management
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const MenuList = ({ darkTheme, isAuthenticated = false }) => {
  const [activeItem, setActiveItem] = useState('home');
  const navigate = useNavigate();
  
  const baseMenuItems = [
    { key: 'home', icon: 'material-symbols:home-rounded', label: 'Home' },
    { key: 'events', icon: 'mingcute:calendar-fill', label: 'Events' },
    { key: 'notification', icon: 'mingcute:notification-fill', label: 'Notification' },
    { key: 'bookmarks', icon: 'mingcute:bookmark-fill', label: 'Bookmarks' },
  ];

  const authItem = isAuthenticated
    ? { key: 'profile', icon: 'fluent:person-24-filled', label: 'Profile' }
    : { key: 'login', icon: 'fluent:person-24-filled', label: 'Log in' };
    
  const settingsItem = 
    { key: 'settings', icon: 'weui:setting-filled', label: 'Settings' };

  const menuItems = [ ...baseMenuItems, authItem, settingsItem ];

  const handleItemClick = (key) => {
    setActiveItem(key);

    switch(key) {
      case 'login':
        navigate('/login'); // Navigate to the login page
        break;
      case 'profile':
        navigate('/profile'); // Navigate to the profile page
        break;
      case 'home':
        navigate('/'); // Navigate to the home page
        break;
      case 'events':
        navigate('/events'); // Navigate to the events page
        break;
      case 'notification':
        navigate('/notifications'); // Navigate to the notifications page
        break;
      case 'bookmarks':
        navigate('/bookmarks'); // Navigate to the bookmarks page
        break;
      case 'settings':
        navigate('/settings'); // Navigate to the settings page
        break;
      default:
        break;
    }
  };

  return (
    <nav className={`custom-menu ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <ul className="menu-bar">
        {menuItems.map(item => (
          <li 
            key={item.key}
            data-key={item.key}
            className={`menu-item ${activeItem === item.key ? 'active' : ''}`}
            onClick={() => handleItemClick(item.key)}
          >
            <Icon 
              icon={item.icon} 
              width={item.key === 'bookmarks' ? '28' : '30'} 
              height={item.key === 'bookmarks' ? '28' : '30'} 
            />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuList;