import React, { useState } from 'react'
import "./navbar1.css";
import {FiSearch} from "react-icons/fi";
import {AiFillHeart} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import { Link } from 'react-router-dom';
import SmallAccount from '../products/SmallAccount';
const Navbar2=()=> {
  const [dropdown,setdropDown]=useState(false)
  return (
    <>
    <div className='navbar2'>
  
      <div className='navbar2logo'>
      <Link to="/" >
      <img
        src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png"
        alt="logo"
        />
      </Link>
       
      </div>
      <div>
      <select name="pets" id="pet-select" className='navbaroption'>
        <option value="">All Categories</option>
        <option value="dog">---Makeup</option>
        <option value="cat">----Face</option>
        <option value="hamster">-------Foundation</option>
        <option value="parrot">-------Blush</option>
        <option value="spider">-------Spider</option>
        <option value="goldfish">-------Goldfish</option>
        <option value="hamster">-------Foundation</option>
        <option value="parrot">-------Blush</option>
        <option value="spider">-------Spider</option>
        <option value="goldfish">-------Goldfish</option>
        <option value="hamster">-------Foundation</option>
        <option value="parrot">-------Blush</option>
        <option value="spider">-------Spider</option>
        <option value="goldfish">-------Goldfish</option>
      </select>
      </div>
      <div className='inputdiv'>
        <input type="text" placeholder='Enter Your Search'/>
        <button>
        <FiSearch className='searchbtn'/>
        </button>
      </div>    
      <div className='navbar2right'>
        <Link to="/wishlist">
          <div className='navbar2heart'>
            <AiFillHeart  className='heart'/>
          </div>
        </Link>

        <Link to="/wishlist" className='wishlist'>
        <div className='navbar2myaccount'>
            <MdAccountCircle className='heart'/>
        </div>
        <div className='navbar2myaccountname' onClick={()=>setdropDown(!dropdown)}>
          My Account
        </div>
        </Link>
      
      </div> 
    </div>
    {dropdown && <SmallAccount/>}
    </>
  )
}

export default Navbar2
