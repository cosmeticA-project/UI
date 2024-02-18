import React from 'react';
import './style/homepage.css';
import { Link } from 'react-router-dom';
import cart from './icons/cart.png'

function Homepage() {

  return (
  <div className='body'>
      <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
          </ul>
          <ul className='other-buttons'>
            <Link to= '/login'><button className='a'>Sign in</button></Link>
            <Link to='/signup'><button className='b'>Sign Up</button></Link>
            <Link to= '/'><img src={cart} alt="" className='cart' /></Link>
          </ul>
        </nav>
      </header>
    
        <div className='content'>
           <p className='tittle'>Welcome to <span>Cosmetica</span></p> 
            <p className='bio'> From vibrant lip shades to nourishing skincare formulations,
                 our collection embraces diversity and empowers you to express 
                 your unique style. Discover the art of enhancing your beauty 
                 and confidence with our thoughtfully curated products.
            </p>
            <Link to="/login"><button className='submit'>Sign In</button></Link>
        </div>

   </div>
  );
}

export default Homepage;
