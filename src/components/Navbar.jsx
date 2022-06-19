import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate()
  const handlechange=(id)=>{
    if(id==1){
      navigate(`/products/1`)
    }
    if(id==2){
      navigate(`/products/2`)
    }
 
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <br/>
      <button onClick={()=>{
        handlechange(1)
      }}>go to 1</button>
       <button onClick={()=>{
        handlechange(2)
      }}>go to 2</button>
    </div>
  )
}

export default Navbar
