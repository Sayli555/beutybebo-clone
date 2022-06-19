import React, { useState } from 'react';
import "./product.css";
import {BsCartPlusFill} from "react-icons/bs";
import {AiTwotoneHeart} from "react-icons/ai"
import axios from 'axios';

const Product = ({img,title,price,discount,id,collectid}) => {
// const handleaddcart=(id)=>{
//   collectid(id)
// }

  return (
    <div className='product'>
      <div>
        <img className='productimg'
        src={img}
        />
      </div>
      <div className='productdescribe'>
        <span className='pd1'>{title}</span>
        <br/>
        
        <span className='pd2'>`Rs ${price}`</span>
        <span className='pd3'>{discount}</span>
      </div>
      <div className='productbtn'>
        <button className='prbtn1' onClick={()=>collectid(id)}>
            <BsCartPlusFill/>
            <span>Add To Cart</span>
        </button>
        <button className='prbtn2'>
            <AiTwotoneHeart/>
        </button>
      </div>
    </div>
  )
}

export default Product
