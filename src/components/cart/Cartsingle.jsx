import React from 'react';
import "./cartsingle.css"

const Cartsingle = () => {
  return (
  
    <div className='cartmain'>
        <div  className='singlecart'>
        <div>
        <img
        src="https://www.beautybebo.com/pub/media/catalog/product/cache/c9615af5e5a6f27d0b9239c1928d8610/5/4/54_2.jpg"
        />
      </div>
       <div>
        <p>FACES CANADA PEACHES N CREAM TINTED MOISTURIZER - LIGHT 01</p>
        <span>rs450</span>
        <span>subtotal</span>
        </div> 

        </div>
        <button className='removebtn'>Remove</button>
    </div>
    
  
  )
}

export default Cartsingle
