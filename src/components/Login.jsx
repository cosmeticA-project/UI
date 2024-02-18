import React, { useState } from 'react';
import './style/styles.css';
import sideImage from './images/side.jpg'
import logo from './images/google.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
    
        try {
            const response = await axios.post("http://localhost:8080/api/user/login", {
                email: email,
                passwordHash: password
            });
    
            if (response.data.success) {
                alert("Login Successful");
                console.log(response.data.message);
                navigate('/')
            } else {
                alert("Login : " + response.data.message);
                navigate('/')
            }
        } catch (error) {
            setErrorMessage("Login failed: " + error.response.data);
        }
    }
    
    
    return (
    <div>

    <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          </ul>

        </nav>
      </header>
    <div className='bg'>
        <main className='main'>
            <div className="container1">
                <form className="signin-form" onSubmit={handleLogin}>
                    <h1 className='welcome'>Welcome back</h1>
                    <p className='wback'>Welcome back! Please enter your details</p>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Sign In</button>

                    <div className="google">
                        <div>
                            <img src={logo} alt="" className='logo-google' />
                        </div>
                        <div>
                            <p className='signup'>Sign In with google</p>
                        </div>
                    </div>

                    <p>Don't have an account ? <Link to="/signup">Click here to Sign up</Link></p>
                </form>
            </div>

            <div className="side">
                <img src={sideImage} alt="" className='side-image' />
            </div>
        </main>
    </div>
    </div>
    );
}

export default LoginForm;