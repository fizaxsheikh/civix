import React, { useState } from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';
import { useNavigate } from 'react-router-dom';
import NotificationsDropdown from './NotificationsDropdown';
import './NotificationsDropdown.css';


const Layout = ({ children, darkTheme, toggleTheme }) => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className={`layout ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <aside className={`sidebar ${darkTheme ? 'dark-theme' : 'light-theme'} ${showNotifications ? 'collapsed' : ''}`}>
        {/* NotificationsDropdown rendered independently */}
          {showNotifications && (
          <div className="notification-dropdown-container">
            <NotificationsDropdown
              darkTheme={darkTheme}
              onClose={() => setShowNotifications(false)} // ✅ use correct function
            />
          </div>
        )}

        <Logo />
        <MenuList 
          darkTheme={darkTheme} 
          showNotifications={showNotifications} 
          onToggleNotifications={setShowNotifications}
        />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </aside>
      <main className={`content ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;