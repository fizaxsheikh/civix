// App.jsx
import { useState } from 'react';
import Layout from './components/Layout'; // Import your custom Layout component
import Policies from './policies-KS/policies';

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
      <Policies />
      <p> what the </p>
    </Layout>
  );
}

export default App;