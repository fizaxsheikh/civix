// Layout.jsx
import React from 'react';
import Logo from './Logo';
import MenuList from './MenuList';
import ToggleThemeButton from './ToggleThemeButton';

const Layout = ({ children, darkTheme, toggleTheme }) => {
  return (
    <div className={`layout ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <aside className={`sidebar ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <Logo />
        <MenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </aside>
      <main className={`content ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;