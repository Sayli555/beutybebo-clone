import React, { useContext } from 'react';
import { useEffect,useState } from 'react';
import "./cart.css";
import axios from "axios";
import CartSingle from "./Cartsingle"
import { CartContext } from '../../context/CartContext';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const {getCount}=useContext(CartContext);
  const navigate=useNavigate()
    const[data,setData]=useState([])
    useEffect(()=>{
      getData();
    },[])
    
    const getData=()=>{
  axios.get(" https://beauty-bebo424.herokuapp.com/api/cart")
  .then((res)=>setData(res.data));

}
    const removecartitem=(id)=>{
        axios.delete(`https://beauty-bebo424.herokuapp.com/api/cart/${id}`)
        .then((res)=>{getData();getCount()});
    }
  


    const gotocheckout=()=>{
      navigate("/checkout")
    }
  return (
    // <div className='cartmain'>
    //     {data.map((cart)=>
    // <div>
    //     <h1>{cart.title}</h1>
    //     <button onClick={()=>removecartitem(cart.id)}>Remove</button>
    // </div>)}    
    // </div>


    <div className='cartmain'>
        <div className='cartitem'>
          {data.map((cart)=>(
            <div className='product'>
            <div>
              <img className='productimg'
              src={cart.img}
              />
            </div>
            <div className='productdescribe'>
              <span className='pd1'>{cart.title}</span>
              <br/>
              
              <span className='pd2'>`Rs ${cart.price}`</span>
              <span className='pd3'>{cart.discount}</span>
            </div>
            <div className='productbtn'>
            <button   className='prbtn1' onClick={()=>removecartitem(cart.id)}>Remove</button>
              <button className='prbtn2'>
                  Exit
              </button>
            </div>
          </div>
          ))}
        </div>
        <div className='cartinfo'>
        {/* <div  className='cartsummary'> */}
        <h3>SUMMARY</h3>
        <input type="text" placeholder='ESTIMATE SHIPPING AND TEXT' />
        <hr/>
        <div className='titleprice'>
            <p>Subtitle</p>
            <p>price</p>
        </div>
        <hr/>
        <div className='titleprice'>
            <p>Order Total</p>
            <p>price</p>
        </div>
        <hr/>
        <button  className='prbtn3' onClick={gotocheckout}>PROCEED TO CHECKOUT</button>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Cart
