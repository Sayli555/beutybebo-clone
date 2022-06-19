import React from 'react';
import "./cartbutton.css";
import {GiShoppingBag} from "react-icons/gi"

const Cartbutton = () => {
  return (
    <div className='cartbutton'>
      <GiShoppingBag/>
      <span>MY CART</span>
    </div>
  )
}

export default Cartbutton
