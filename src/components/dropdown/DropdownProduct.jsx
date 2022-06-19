import React, { useState } from 'react';
import "./dropdown.css";
import { Link } from 'react-router-dom';
import {face,eye,lips} from "./dropdown"

const DropdownProduct = () => {
    const [dropDown,setDropDown]=useState(false)
  return (
    <div className={dropDown?'dropmain click' :'dropmain' } onClick={()=>setDropDown(!dropDown)}>
        <div>
            <h3>FACE</h3>
        {
            face.map((f)=>(
                <Link to={f.path} className="linkdrop" onClick={()=>setDropDown(false)}>
                    <div className='d1'>{f.name}</div>
                </Link>
            
            ))
        }
        </div>
        <div className='dr1'>
        <h3>EYE</h3>
        {
            eye.map((e)=>(
                <div>{e}</div>
            ))
        }
        </div>    
      <div>
      <h3>LIPS</h3>
        {
            lips.map((e)=>(
                <div>{e}</div>
            ))
        }
      </div>
      <div>
        <img 
        src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
        alt=""
        />
      </div>
     
    </div>
  )
}

export default DropdownProduct
