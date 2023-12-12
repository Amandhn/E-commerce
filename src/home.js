import React from 'react';
import './home.css';
import Product from './product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="https://m.media-amazon.com/images/I/714VlfkSB-L._SX3000_.jpg" alt="amazon"></img>                  

        <div className="home_row">
          <Product 
            id="12321341"
            title="The Lean Startup: The Million Copy Bestseller Driving 
              Entrepreneurs to Success Paperback – 1" 
            price={29.99} 
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"
            rating={5}>
          </Product>

          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking,
              Stylish, kitchen Mixer with K-beater, 
              Dough Hook and Whisk, 5 litre glass bowl"
            price={239.0}            
            image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_UF894,1000_QL80_.jpg"
            rating={4}>            
          </Product>
        </div>

        <div className="home_row">
        <Product
          id="4903850"
          title="Samsung Sm-R810Nzdaxar Bluetooth Watch- 
            Rose Gold (3 to 4 days Battery Life_Compatible 
            with bluetooth capable smartphones_Wireless)"
          price={199.99}
          image="https://m.media-amazon.com/images/I/41-zBxLIRDL.jpg"
          rating={3}>          
        </Product>

        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) |
            Smart speaker with alexa, Charcoal Fabric"
          price={98.99}
          image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6347/6347261_sd.jpg"
          rating={5}>            
        </Product>

        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-fi, 138GB)
            - Silver (4th Generation)"
          price={598.99}
          image="https://m.media-amazon.com/images/I/81hAx31maUL._SX679_.jpg"
          rating={4}>          
        </Product>
        </div>

        <div className="home_row">
        <Product
          title="Samsung LC49RG90SSUXEN 49' Curved 
            LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.99}
          image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_UF1000,1000_QL80_.jpg"
          rating={4}>          
        </Product>
        </div>
        
      </div>

    </div>
  );
};

export default Home
