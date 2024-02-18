import React, { useState } from 'react';
import './style/styles.css'; 
import image from './images/signup.jpg'
import logo from './images/google.jpg'
import './style/signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style/styles.css'

function SignupForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function save(event) {
        event.preventDefault(); 
    
        // Vérification que les mots de passe correspondent
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
    
        // Vérification du format de l'adresse e-mail
        const emailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("Please enter a valid Gmail address");
            return;
        }
    
        try {
            await axios.post("http://localhost:8080/api/user/signup", {
                email: email,
                name: name,
                passwordHash: password
            });
            alert("Registration successful");
        } catch (error) {
            alert("Registration failed: " + error.response.data); // Afficher le message d'erreur renvoyé par le serveur
        }
    }

    return (
        <>
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

    <div className="bg">
        <main className='main'>
            <div className="left">
                <form className="signin-form" onSubmit={save}>
                    <h1 className='welcome'>Create an Account</h1>
                    <p className='wback'>Please complete the information below</p>
                    <div className="form-group">
                        <label htmlFor="name">Enter your name :</label><br />
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className='input' 
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br />
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className='input' 
                            value={email} 
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label><br/>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required 
                            className='input' 
                            value={password} 
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label><br/>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            required 
                            className='input' 
                            value={confirmPassword} 
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Sign Up</button>
                    
                    <div className="google">
                        <div>
                            <img src={logo} alt="" className='logo-google' />
                        </div>
                        <div>
                            <p className='signup' onClick={save}>Sign Up with google</p>
                        </div>
                    </div> 

                    <p>Already have an account ? <Link to='/login'> Click here to Sign In</Link></p>
                </form>
            </div>

            <div className="side">
                <img src={image} alt="" />
            </div>
        </main>
    </div>
</>
    );
}

export default SignupForm;