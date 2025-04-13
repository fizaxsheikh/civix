import { useState } from 'react';
import { Layout } from 'antd';

import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import Policies from './policies-KS/policies';

const { Header, Sider } = Layout;
function App() {
    return (
      <Policies></Policies>
    );

  // const [count, setCount] = useState(0)
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout>
      <Sider theme={darkTheme ? 'dark' : 'light'}
      className="sidebar">
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme}
        toggleTheme={toggleTheme}/>
      </Sider>
    </Layout>
    
  );
};

export default App
