// import React, { useState } from 'react';
// import "./cartsingle.css";
// import {BsCartPlusFill} from "react-icons/bs";
// import {AiTwotoneHeart} from "react-icons/ai"
// import axios from 'axios';

// const CartSingle = ({img,title,price,discount,id,collectid}) => {
// // const handleaddcart=(id)=>{
// //   collectid(id)
// // }


// const removecartitem=(id)=>{
//   axios.delete(`http://localhost:8080/cart/${id}`)
//   .then((res)=>{getData();getCount()});
// }


//   return (
//     <div className='product'>
//       <div>
//         <img className='productimg'
//         src={img}
//         />
//       </div>
//       <div className='productdescribe'>
//         <span className='pd1'>{title}</span>
//         <br/>
        
//         <span className='pd2'>`Rs ${price}`</span>
//         <span className='pd3'>{discount}</span>
//       </div>
//       <div className='productbtn'>
//         <button className='prbtn1' onClick={()=>removecartitem(cart.id)}>
            
//             <span>Remove</span>
//         </button>
//         <button className='prbtn2'>
//             Exit
//         </button>
//       </div>
//     </div>
//   )
// }


// export default CartSingle
