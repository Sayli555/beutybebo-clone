
import "./register.css";
import {React ,useRef,useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../footer/Footer";

const Resister = () => {
  const navigate=useNavigate()
    const [formdata,setform]=useState({});

    const [data,setdata]=useState([]);

    const ref=useRef();
    
    const passref=useRef()
  
    const creataccbtn=()=>{
      navigate("/")
    }
    const handlechange=()=>{

    }
  return (
    <>
    <h3 className="regh2">CREATE NEW CUSTOMER ACCOUNT</h3>
    <div className='registermain'>
        <h2>PERSONAL INFORMATION</h2>
      <form>
        <div className="fd1">
            <div className="fname">
                <lable>First Name</lable>
                <br/>
            <input 
                ref={ref}
                type="text" 
                name="username"
                placeholder="First Name" 
                // value={username}
                onChange={handlechange}       
                />
            </div>
            <div className="fname">
            <lable>Last Name</lable>
                <br/>
            <input 
                ref={ref}
                type="text" 
                name="username"
                placeholder="Last Name" 
                // value={username}
                onChange={handlechange}       
                />
            </div>
        </div>
        <div className="inputCheck">
       
        <input 
        type="checkbox" 
        name="IsChecked"
      
     //   checked={IsChecked}
        onChange={handlechange}       
        />
        <span>Sign Up for Newsletter</span>
        </div>
        <div className="Linput">
        <lable>Email</lable>
                <br/>
        <input 
        type="email" 
        name="email"
        placeholder="email" 
        // value={email}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Contact Number</lable>
                <br/>
        <input 
        type="number" 
        name="age"
        placeholder="contact Number" 
        // value={age}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Password</lable>
                <br/>
        <input 
          ref={passref}
        type="pasword" 
        name="password"
        placeholder="pasword" 
       // value={password}
        onChange={handlechange}       
        />
        </div>
        <div className="Linput">
        <lable>Confirm Password</lable>
                <br/>
        <input 
          ref={passref}
        type="pasword" 
        name="password"
        placeholder="pasword" 
       // value={password}
        onChange={handlechange}       
        />
        </div>
        <button onClick={creataccbtn} className="creataccbtn">CREATE AN ACCOUNT</button>
      </form>

    </div>
    <Footer/>
    </>
  )
}

export default Resister
