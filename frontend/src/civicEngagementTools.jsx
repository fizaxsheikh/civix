import { useState } from 'react';
import { Layout } from 'antd';

import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import CivicEngagementTools from './components/CivicEngagementTools';


function App() {
    const [darkTheme, setDarkTheme] = useState(true);
  
    const toggleTheme = () => {
      setDarkTheme(!darkTheme);
    };
  
    return (
      <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
        <Policies />
        <p> what </p>
      </Layout>
    );
  }

