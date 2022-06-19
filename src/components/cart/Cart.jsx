import React, { useContext } from 'react';
import { useEffect,useState } from 'react';
import "./cart.css";
import axios from "axios"
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const {getCount}=useContext(CartContext);
    const[data,setData]=useState([])
    useEffect(()=>{
      getData();
    },[])
    
    const getData=()=>{
  axios.get(" http://localhost:8080/cart")
  .then((res)=>setData(res.data));

}
    const removecartitem=(id)=>{
        axios.delete(`http://localhost:8080/cart/${id}`)
        .then((res)=>{getData();getCount()});
    }
   
  return (
    <div className='cartmain'>
        {data.map((cart)=>
    <div>
        <h1>{cart.title}</h1>
        <button onClick={()=>removecartitem(cart.id)}>Remove</button>
    </div>)}
      {/* <h2>SHOPPING CART</h2>
      <div className='cart'>
        <div className='cartbag'>

        </div>
        <div  className='cartsummary'>
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
        <button className='proceedbtn'>PROCEED TO CHECKOUT</button>
        </div>
      </div> */}

    </div>
  )
}

export default Cart
