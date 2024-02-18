import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style/products.css';
import cart from './icons/cart.png';
import product1 from './products/product1.jpg';
import product2 from './products/product2.jpg';
import product3 from './products/product3.jpg';
import product4 from './products/product4.jpg';
import product5 from './products/product5.jpg';
import product6 from './products/product6.jpg';
import product7 from './products/product7.jpg';
import product8 from './products/product8.jpg';
import product9 from './products/product9.jpg';
import axios from "axios";

function Products() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      axios.post('/api/cart/add', product)
      .then(response=>{
        console.log(response.data);
        setCartItems([...cartItems, product]);
      })
      .catch(error=>{
        console.log("Error addind to cart: ", error );
      })
    };
    
  
  
    return (
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
                  <Link to='/login'><button className='a'>Sign in</button></Link>
                  <Link to='/signup'><button className='b'>Sign Up</button></Link>
                  <Link to='/chart'><img src={cart} alt="" className='cart' /></Link>
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
                  <button onClick={() => addToCart({ id: 1, name: "Kylie Skin Detox Face Mask", price: 40 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product2} alt="" />
                  <p className="description">Skin Whitening Cream </p>
                  <p>22,50$</p>
                  <button onClick={() => addToCart({ id: 2, name: "Skin Whitening Cream", price: 22.50 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product3} alt="" />
                  <p className="description">Alya Skin Products</p>
                  <p>42$</p>
                  <button onClick={() => addToCart({ id: 3, name: "Alya Skin Products", price: 42 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product4} alt="" />
                  <p className="description">Facial lotion </p>
                  <p>15$</p>
                  <button onClick={() => addToCart({ id: 4, name: "Facial lotion", price: 15 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product5} alt="" />
                  <p className="description">Face Blush</p>
                  <p>27$</p>
                  <button onClick={() => addToCart({ id: 5, name: "Face Blush", price: 27 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product6} alt="" />
                  <p className="description">Lip Glow Oil</p>
                  <p>32$</p>
                  <button onClick={() => addToCart({ id: 6, name: "Lip Glow Oil", price: 32 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product7} alt="" />
                  <p className="description">Lip Gloss Oil Kit</p>
                  <p>90$</p>
                  <button onClick={() => addToCart({ id: 7, name: "Lip Gloss Oil Kit", price: 90 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product8} alt="" />
                  <p className="description">Set of make-up Brushes</p>
                  <p>21,99$</p>
                  <button onClick={() => addToCart({ id: 8, name: "Set of make-up Brushes", price: 21.99 })}>Add to Cart</button>
              </div>

              <div className="product">
                  <img src={product9} alt="" />
                  <p className="description">Make-up Remover</p>
                  <p>16,17$</p>
                  <button onClick={() => addToCart({ id: 9, name: "Make-up Remover", price: 16.7 })}>Add to Cart</button>
              </div>
          </div>
      </main>
  </div>
);
}

export default Products;
