import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MenuList from './components/MenuList';
import LoginPage from './pages/LoginPage';

import Layout from './components/Layout';
import Policies from './policies-KS/policies';
import RightSidebar from './components/RightSidebar'; // Import the RightSidebar component

import Following from './pages/Following';

const Home = () => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '75%' }}>
      <Policies />
    </div>
    <div style={{ width: '25%' }}>
      <RightSidebar />
    </div>
  </div>
);

const Events = () => <h1>Events Page</h1>;
const Notifications = () => <h1>Notifications Page</h1>;
const Bookmarks = () => <h1>Bookmarks Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Set to true if token exists
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <Routes>
        {/* Fullscreen pages without Layout (e.g., Login) */}
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Redirect to login if not authenticated */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
                <Home />
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Other Routes */}
        <Route
          path="/events"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Events />
            </Layout>
          }
        />
        <Route
          path="/notifications"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Notifications />
            </Layout>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Bookmarks />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Settings />
            </Layout>
          }
        />
        <Route
          path="/following"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Following />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;