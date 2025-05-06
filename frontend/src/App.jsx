import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from "./pages/userProfile";


import Layout from './components/Layout';
import Policies from './policies-KS/policies';
import CreateAccount from './pages/createAccount'; 

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Policies />
              <p> what the </p>
            </Layout>
          }
        />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;