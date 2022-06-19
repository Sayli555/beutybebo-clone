import React from 'react';
import "./cartbutton.css";
import {GiShoppingBag} from "react-icons/gi"

const Cartbutton = ({gotocartpage}) => {
  return (
    <div className='cartbutton' onClick={gotocartpage}>
      <GiShoppingBag/>
      <span>MY CART</span>
    </div>
  )
}

export default Cartbutton
