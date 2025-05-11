import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function LoginPage({ setIsAuthenticated }) { // Accept setIsAuthenticated as a prop
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch("http://localhost:5001/civix-4f64a/us-central1/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            localStorage.setItem('authToken', result.token);
            localStorage.setItem('userData', JSON.stringify(result.user));

            console.log("Logged in successfully:", result);

            setIsAuthenticated(true); // Update authentication state
            navigate('/');
        } catch (error) {
            console.error("Error logging in:", error);
            setError(error.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch("http://localhost:5001/civix-4f64a/us-central1/api/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Signup failed');
            }

            localStorage.setItem('authToken', result.token);
            localStorage.setItem('userData', JSON.stringify(result.user));

            console.log("Signed up successfully:", result);

            setIsAuthenticated(true); // Update authentication state
            navigate('/');
        } catch (error) {
            console.error("Error signing up:", error);
            setError(error.message || 'Failed to create account. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`loginContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form onSubmit={handleSignIn} className="sign-in-form loginForm">
                        <h2 className="title">Sign in</h2>
                        {error && <div className="error-message">{error}</div>}

                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
                            <input
                                className='LoginInput'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
                            <input
                                className='LoginInput'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='btn' disabled={isLoading}>
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>

                        <p className="social-text loginp">Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto' />
                            </a>
                        </div>
                    </form>
                    <form onSubmit={handleSignUp} className="sign-up-form loginForm">
                        <h2 className="title">Sign up</h2>
                        {error && <div className="error-message">{error}</div>}

                        <div className="input-field">
                            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto' />
                            <input
                                className='LoginInput'
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faEnvelope} className='my-auto mx-auto' />
                            <input
                                className='LoginInput'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field">
                            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto' />
                            <input
                                className='LoginInput'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='btn' disabled={isLoading}>
                            {isLoading ? 'Signing up...' : 'Sign Up'}
                        </button>

                        <p className="social-text loginp">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto' />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto' />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3 className='loginh3'>New here?</h3>
                        <p className='loginp'>
                            Create an account to access all features and start connecting with your community.
                        </p>
                        <button className="btn transparent" onClick={handleSignUpClick}>
                            Sign up
                        </button>
                    </div>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3 className='loginh3'>One of us?</h3>
                        <p className='loginp'>
                            Welcome back! Sign in to continue your journey and stay connected.
                        </p>
                        <button onClick={handleSignInClick} className="btn transparent" id="sign-in-btn">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;