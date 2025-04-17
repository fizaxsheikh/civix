// MenuList.jsx with state management
import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const MenuList = ({ darkTheme }) => {
  const [activeItem, setActiveItem] = useState('home');
  
  const menuItems = [
    { key: 'home', icon: 'material-symbols:home-rounded', label: 'Home' },
    { key: 'events', icon: 'mingcute:calendar-fill', label: 'Events' },
    { key: 'notification', icon: 'mingcute:notification-fill', label: 'Notification' },
    { key: 'bookmarks', icon: 'mingcute:bookmark-fill', label: 'Bookmarks' },
    { key: 'profile', icon: 'fluent:person-24-filled', label: 'Profile' },
    { key: 'settings', icon: 'weui:setting-filled', label: 'Settings' }
  ];

  const handleItemClick = (key) => {
    setActiveItem(key);
    // You can add navigation or other functionality here
  };

  return (
    <nav className={`custom-menu ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <ul className="menu-bar">
        {menuItems.map(item => (
          <li 
            key={item.key}
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