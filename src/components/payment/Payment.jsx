import React from 'react';
import "./payment.css"
import { Link, useNavigate } from 'react-router-dom';

function Payment() {
    const navigate=useNavigate()

    const creataccbtn=()=>{
        alert("payment succesfull")
        navigate("/")
      }
  return (
    <div className='paymentmain'>
      <div className='payment'>
        <h2>Card Details</h2>
        <div className="Linput">
        <lable>Name on Card</lable>
                <br/>
        <input 
        type="text" 
        name="card"
        placeholder="name on card" 
        // value={email}
        // onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Card Number</lable>
                <br/>
        <input 
        type="number" 
        name="card number"
        placeholder="Card Number" 
        // value={age}
        // onChange={handlechange}       
        />
        </div>
        <button onClick={creataccbtn} className="creataccbtn">Payment</button>
      </div>
      <div className='paymentdetail'>
        <img style={{height:"90%" ,width:"90%" }}
        src="https://www.beautybebo.com/pub/media/free-delivery.jpg" />
      </div>


    </div>
  )
}

export default Payment
