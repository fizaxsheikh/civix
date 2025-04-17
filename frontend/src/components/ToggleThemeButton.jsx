import React from 'react';
import { Icon } from '@iconify/react';

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <button className="custom-btn" onClick={toggleTheme}>
        <Icon icon={darkTheme ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"} />
      </button>
    </div>
  );
};

export default ToggleThemeButton;