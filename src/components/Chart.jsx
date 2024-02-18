import React from "react";
import { Link } from "react-router-dom";
import product9 from './products/product9.jpg';
import './style/chart.css'

function Chart() {
    return(
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

       <div className="container">
            <div className="chart-container">
             <div className="product-image">
                <img src={product9} alt="" />
             </div>

             <div className="product-description">
             <h2>Product Title</h2>
                 <p className="product-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit architecto quae harum asperiores cum mollitia nihil. 
                    Distinctio, tempora. Exercitationem dolorem facere, quos neque
                    omnis animi perferendis eius vitae placeat in.
                 </p>

                <button>Order Now</button>
             </div>
            </div>

            <div className="chart-container">
             <div className="product-image">
                <img src={product9} alt="" />
             </div>

             <div className="product-description">
             <h2>Product Title</h2>
                 <p className="product-bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Impedit architecto quae harum asperiores cum mollitia nihil. 
                    Distinctio, tempora. Exercitationem dolorem facere, quos neque
                    omnis animi perferendis eius vitae placeat in.
                 </p>

                <button>Order Now</button>
             </div>
            </div>
       </div>

        </>
    );
}

export default Chart;