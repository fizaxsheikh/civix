import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import NotificationsDropdown from './NotificationsDropdown';
import './NotificationsDropdown.css';

const MenuList = ({ 
  darkTheme, 
  isAuthenticated = false, 
  showNotifications, 
  onToggleNotifications 
}) => {
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

  const settingsItem = { key: 'settings', icon: 'weui:setting-filled', label: 'Settings' };

  const menuItems = [...baseMenuItems, authItem, settingsItem];

  const handleItemClick = (key) => {
    setActiveItem(key);

    if (key === 'notification') {
      onToggleNotifications(!showNotifications); // Notify parent to toggle
      return;
    } else {
      onToggleNotifications(false); // Collapse notifications if switching page
    }

    switch (key) {
      case 'login':
        navigate('/login');
        break;
      case 'profile':
        navigate('/profile');
        break;
      case 'home':
        navigate('/');
        break;
      case 'events':
        navigate('/events');
        break;
      case 'bookmarks':
        navigate('/bookmarks');
        break;
      case 'settings':
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  return (
    <nav className={`custom-menu ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      
  <ul className="menu-bar">
    {menuItems.map((item) => (
      <li
        key={item.key}
        data-key={item.key}
        className={`menu-item ${activeItem === item.key ? 'active' : ''} ${
          item.key === 'notification' && showNotifications ? 'notifications-active' : ''
        }`}
        onClick={() => handleItemClick(item.key)}
      >
        <div className="menu-item-content">
          <Icon
            icon={item.icon}
            width={item.key === 'bookmarks' ? '28' : '30'}
            height={item.key === 'bookmarks' ? '28' : '30'}
          />
          <span>{item.label}</span>
          {item.key === 'notification' && (
            <span className="notification-indicator"></span>
          )}
        </div>
      </li>
    ))}
  </ul>

  
</nav>

  );
};

export default MenuList;
