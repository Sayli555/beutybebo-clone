import React,{useEffect,useState} from 'react';
import AllCategories from '../AllCategories/AllCategories';
import Product from '../products/Product';
import "./foundation.css";
import {Link} from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai"
import { categories } from '../AllCategories/categori';
import axios from "axios"



const Foundation = () => {
  const [products,setProduct]=useState([]);

  const [data,setData]=useState([]);

const [prod,setProd]=useState();

  const handleaddcart=(id)=>{
    axios.get(" http://localhost:8080/foundation")
    .then((res)=>setData(res.data));
    for(let i=0;i<data.length;i++){
      if(data[i].id==id){  
        setProd(data[i]);
        axios.post("http://localhost:8080/cart",data[i]).then((res)=>{
          console.log("cart",res.data)
        })
        break;
      }
    }  
  }
  useEffect(()=>{
    const getData=async()=>{
        let data=await fetch("http://localhost:8080/foundation");
        let r=await data.json();
        // console.log(r);
          setProduct(r);
    }
    getData()
 },[])
 const HL=()=>{
  products.sort((a,b)=>a.price-b.price);
  setProduct(products);
  
 }
 const LH=()=>{
   products.sort((a,b)=>b.price-a.price);
   setProduct(products);
   
  }


console.log("pr",products)

  return (
    <div className='foundationmain'>
      <div className='foundationleft1'>
      {categories.map((el)=>(
             <div className='categories'>
                <Link to={el.path} className='categorieslink'>
                <div>{el.title}</div>
                <AiOutlinePlus className='plusicon' />
               
                </Link>
                <hr/>
            </div>
        ))}
        <img 
        src="https://www.beautybebo.com/pub/media/free-delivery.jpg"
        />
      </div>
      <div  className='foundationright1'>
        <div>
            <h3>BB CREAM</h3>
        </div>
        <div className='sortingbtn'>
          <button onClick={HL}>High To Low</button>
          <button onClick={LH}>Low To High</button>
        </div>
        <hr/>
        <div className='fondationproducts'>
          {products.map((pr)=>(
            <Product img={pr.img} title={pr.title} price={pr.price} discount={pr.discount} id={pr.id} collectid={handleaddcart}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Foundation
