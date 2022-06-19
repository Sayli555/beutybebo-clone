import React from 'react';
import "./allcategories.css";
import {AiOutlineBars} from "react-icons/ai";
import {categories} from "./categori"
import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from "react-icons/md"

const AllCategories = () => {
  return (
    <div className='AllCat'>
      <div className='allLeft'>
      <div className='categoriesTitle'>
        <AiOutlineBars className='optionlogo' />
        <span>ALL CATEGORIES</span>
      </div>
     
        {categories.map((el)=>(
             <div className='categories'>
                <Link to={el.path} className='categorieslink'>
                <div>{el.title}</div>
                <MdKeyboardArrowRight/>
                </Link>
            </div>
        ))}
      
      </div>  
     
      <div>
        <img 
        src="https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg"
        />
      </div>
    </div>
  )
}

export default AllCategories
