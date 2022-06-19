import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
const [prod,setProduct]=useState([]);

useEffect(()=>{
   const getData=async()=>{
       let data=await fetch("http://localhost:3011/products");
       let r=await data.json();
       console.log(r);
         setProduct(r);
   }
   getData()
},[])
 
  return (
    <div style={{"display":"flex"}}>
        <div>

        {prod.map((e)=>(
         <div key={e.id}>
             <Link to={`/products/${e.id}`}>{e.name}</Link>
             <Link to={`/products/create`}>Create</Link>
         </div>
     ))}
        </div>
    <div>
    <Outlet/>
    </div>
     
    </div>
  )
}

export default Products;








