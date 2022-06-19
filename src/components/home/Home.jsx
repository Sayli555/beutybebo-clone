import React from 'react';



import "./home.css";
import AllCategories from "../AllCategories/AllCategories"
import {productData1,productData2,productData3} from "./productdata"
import Product from '../products/Product';
import ProductOptions from '../products/ProductOptions';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
     
      <AllCategories/>
      <div className='longimg'>
        <img 
        src="https://www.beautybebo.com/pub/media/blue_heaven.jpg"
        />
      </div>
      <div className='product1'>
        {productData1.map((el)=>(
          <Product img={el.img} title={el.title} price={el.price} discount={el.discount}/>
        ))}
      </div>
      <div className='Bannermaindiv'>
      <img 
      src="https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"
      />
       <img 
      src="https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"
      />
    </div>
    <div className='homeproductoption'>
      {productData2.map((pr)=>(
        <Link to={pr.path} className="prlink">
                  <ProductOptions title={pr.title} img={pr.img} />

        </Link>
      ))}
    </div>
    <div className='product1'>
        {productData3.map((el)=>(
          <Product img={el.img} title={el.title} price={el.price} discount={el.discount}/>
        ))}
      </div>
      <div className='longimg'>
        <img 
        src="https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg"
        />
      </div>
      <div className='landingDescribe'>
        <h2>Beautybebo offer
Welcome to Beauty Products Online Shopping India- Beauty Bebo</h2>
        <span className='d1'>
        Beautybebo offer
Welcome to Beauty Products Online Shopping India- Beauty Bebo
If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.


        </span>
        <span className='d1'>Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!</span>
        <span className='d1'>
        Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.
        </span>
        <span className='d1'>
        Next, you need a moisturizer in your makeup kit. Moisturizers keep your face glowing regardless of the mood of the day. Most essentially, moisturizers will keep your skin hydrated from the outside, while your constant hydration by taking fluids enhance the efforts.

Our moisturizers range from matte, ponds, creams and gels, all to ensure that your specific need is met. Just go through the list for a better selection, which will aid you through your cosmetic online shopping. With the best moisturizer, it will also work as a primer. Hence, you don’t have to buy an extra product, which saves you some cost.
        </span>
      </div>

   
     
    </div>
  )
}

export default Home
