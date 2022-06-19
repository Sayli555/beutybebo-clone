import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { axios } from 'axios';


const Product = () => {
    const [product,setProduct]=useState({});
    const {id}=useParams()

    useEffect(()=>{
      const getData=async()=>{
          let data=await fetch(`http://localhost:3011/products/${id}`);
          let r=await data.json();
          console.log(r);
          setProduct(r)      
      }
      getData()
   },[]);
  
  return (
    <div>
      Products Id: {id}
     <div>{product.name}</div>
    </div>
  )
}

export default Product
