import React ,{useState}from 'react'
import { Link } from 'react-router-dom';
import "./smallproduct.css"

const SmallAccount = () => {
    const [dropDown,setDropDown]=useState(false);
    
  return (
    <div className={dropDown?'smallAccount click' :'smallAccount' } onClick={()=>setDropDown(!dropDown)}>
    <div className='c1'>
    <Link to="/login" className='smallaccountlink1'>
      Login
      </Link>
    </div>
    <div className='c1'>
    <Link to="/register" className='smallaccountlink1'>
      Register
      </Link>
    </div> 
    </div>
  )
}

export default SmallAccount
