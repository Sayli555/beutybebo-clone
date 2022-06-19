import React from 'react'
import "./login.css";
import { Link, useNavigate ,Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const {auth,setAuth}=useContext(AuthContext);
  const navigate=useNavigate()
  
  const handlelogin=()=>{
      // setAuth(true);
      // console.log("navigatecheck")
      navigate("/wishlist");
     
  }
  const creataccbtn=()=>{
    navigate("/")
  }
  return (
   
    
    <div className='login'>
      <div>
        <h3>CUSTOMER LOGIN</h3>
      </div>
      <div className='loginRegister'>
        <div className='registeruser'>
            <h3>REGISTERED CUSTOMERS</h3>
            <hr/>
            <p>If you have an account, sign in with your email address.</p>
            <div className="rinput">
        <lable className="lable">Email</lable>
                <br/>
        <input 
        type="email" 
        name="email"
        placeholder="email" 
        // value={email}
       // onChange={handlechange}       
        />
        </div>
        <div className="rinput">
        <lable className="lable">Password</lable>
                <br/>
        <input 
        //   ref={passref}
        type="pasword" 
        name="password"
        placeholder="pasword" 
       // value={password}
        // onChange={handlechange}       
        />
        </div>
        <button className='signbtn' onClick={creataccbtn}>SIGN IN</button>
        <Link to="/forgetPassword" className='signforgetlink'>
        <span className='signforgetpass'>Forgot Your Password?</span>
        </Link>
       
        </div>
        <div className='registeruser'>
            <h3>NEW CUSTOMERS</h3>
            <hr/>
            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more..</p>
           
       
        <button className='creattn' onClick={creataccbtn}>CREATE AN ACCOUNT</button>
        
       
        </div>
      </div>
    </div>
 
  )
}

export default Login
