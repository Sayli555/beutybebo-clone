import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./navbar1.css";
import {MdKeyboardArrowDown} from "react-icons/md";
import {navitem} from "./navdata"
import Cartbutton from '../cartbtn/Cartbutton';
import DropdownProduct from '../dropdown/DropdownProduct';
import Footer from '../footer/Footer';

const Navbar3 = () => {
const [dropdown,setdropDown]=useState(false);
const navigate=useNavigate()

const gotocartpage=()=>{
  console.log("cartpage")
navigate("/cart")
}

  return (
    <>
   
    <div className='navbar3'>
     {navitem.map((el)=>{
      if(el.title=="MAKEUP"){
        return (
        
          <div className='navitem3'>
            <Link to={el.path} className="navitemlink" onMouseOver={()=>setdropDown(!dropdown)}>
            <span>{el.title}</span>
            <MdKeyboardArrowDown/>   
            </Link> 
            
                 
          </div> 
        )
      }
      return (
        <Link to={el.path} className="navitemlink">
        <div className='navitem3'>
          <span>{el.title}</span>
          <MdKeyboardArrowDown/>
        </div>

      </Link>
      )   
     }  
     )}  
     <Cartbutton gotocartpage={gotocartpage}/>  
    </div>
    
    {dropdown && <DropdownProduct/>}
    {/* <Footer/> */}
    </>
  )
}

export default Navbar3;


