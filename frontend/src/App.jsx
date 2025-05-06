import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserProfile from ".pages/userProfile";

import MenuList from './components/MenuList';
import LoginPage from './pages/LoginPage'

import Layout from './components/Layout';
import Policies from './policies-KS/policies';

const Home = () => <Policies />;
const Events = () => <h1>Events Page</h1>;
const Notifications = () => <h1>Notifications Page</h1>;
const Bookmarks = () => <h1>Bookmarks Page</h1>;
const Profile = () => <h1>Profile Page</h1>;
const Settings = () => <h1>Settings Page</h1>;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Router>
      <Routes>
        {/* Fullscreen pages without Layout (e.g., Login) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Routes with sidebar and layout */}
        <Route
          path="/"
          element={
            <Layout darkTheme={darkTheme} toggleTheme={toggleTheme}>
              <Home />
            </Layout>
          }
        />
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
      </Routes>
    </Router>
  );
}

export default App;