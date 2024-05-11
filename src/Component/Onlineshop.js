import React from 'react';
import './Onlineshop.css'; // Assuming you have a separate CSS file for styles
import eyeImage from './images/eye.png'; 
import spImage from './images/sp.png'; 
import sp2Image from './images/sp2.pnh.webp'; 
import sp4Image from './images/sp4 copy.png'; 
import sp5Image from './images/sp5.png';
import sp6Image from './images/sp6.png'; 
import sp8Image from './images/sp8.png'; 

// Import other product images as needed

function Onlineshop() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Shopping</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <nav>
          <img src={eyeImage} alt="" />
          <ul><b>
            <li><strong>SALINAKA SHOP </strong></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Features</a></li>
            <li><i className="fa-solid fa-filter"></i><a href="#">Filter</a></li>
            <input type="text" id="lname" name="lname" value=" " placeholder="Search" />
            <i className="fa-solid fa-bag-shopping"></i>
            </b>
          </ul>
        </nav>
        <main>
          <section className="products">
            <div className="product">
            <img src={spImage} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp2Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>
            <div className="product">
            <img src={sp4Image} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp5Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>
            <div className="product">
            <img src={sp6Image} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp5Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>
            <div className="product">
            <img src={sp2Image} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp5Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>
            <div className="product">
            <img src={sp4Image} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp5Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>
            <div className="product">
            <img src={sp6Image} alt="Product 2" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <p>$50.00</p>
            </div>
            <div className="product">
              <img src={sp5Image} alt="Product 2" />
              <h3>Product 2</h3>
              <p>Description of Product 2</p>
              <p>$45.00</p>
            </div>

          
          </section>
        </main>
      </body>
    </html>
  );
}

export default Onlineshop;
