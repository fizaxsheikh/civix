import React from 'react';
import { Button } from 'antd';
import { Icon } from '@iconify/react';
const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
  return (
    <div className="toggle-theme-btn">
        <Button onClick={toggleTheme}>
            <Icon icon={darkTheme ? "mdi:white-balance-sunny" : "mdi:moon-waning-crescent"} />
        </Button>
    </div>
  );
};

export default ToggleThemeButton
