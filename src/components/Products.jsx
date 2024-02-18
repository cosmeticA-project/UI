import React from "react";
import './style/products.css'
import product1 from './products/product1.jpg'
import product2 from './products/product2.jpg'
import product3 from './products/product3.jpg'
import product4 from './products/product4.jpg'
import product5 from './products/product5.jpg'
import product6 from './products/product6.jpg'
import product7 from './products/product7.jpg'
import product8 from './products/product8.jpg'
import product9 from './products/product9.jpg'
import { Link } from "react-router-dom";
import cart from './icons/cart.png'

function Products(){
    return(
  <div className="all">

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

    <main className="other">
      <div>
        <h1>Featured Products</h1>
      </div>
      <div className="product-container">
          <div className="product">
            <img src={product1} alt="" className="pic" />
            <p className="description">Kylie Skin Detox Face Mask</p>
            <p>40$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product2} alt="" />
            <p className="description">Skin Whitening Cream </p>
            <p>22,50$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product3} alt="" />
            <p className="description">Alya Skin Products</p>
            <p>42$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product4} alt="" />
            <p className="description">Facial lotion </p>
            <p>15$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product5} alt="" />
            <p className="description">Face Blush</p>
            <p>27$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product6} alt="" />
            <p className="description">Lip Glow Oil</p>
            <p>32$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product7} alt="" />
            <p className="description">Lip Gloss Oil Kit</p>
            <p>90$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product8} alt="" />
            <p className="description">Set of make-up Brushes</p>
            <p>21,99$</p>
            <button>Add to Chart</button>
          </div>

          <div className="product">
            <img src={product9} alt="" />
            <p className="description">Make-up Remover</p>
            <p>16,17$</p>
            <button>Add to Chart</button>
          </div>
      </div>
    </main>

  </div>
    );
}

export default Products; 