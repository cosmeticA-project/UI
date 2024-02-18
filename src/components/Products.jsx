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
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>

          <div className="product">
            <img src={product1} alt="" />
            <p>Description</p>
            <p>Price</p>
            <button>Order now</button>
          </div>
      </div>
    </main>
  </div>
    );
}

export default Products; 