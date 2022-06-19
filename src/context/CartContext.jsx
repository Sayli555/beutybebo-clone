import React,{ createContext, useState ,useEffect} from "react";
import axios from "axios";

export const CartContext=createContext();


export const CartContextProvider=({children})=>{

    // const[data,setData]=useState([]);
    const [count,setCount]=useState(0)

    useEffect(()=>{
       
        getCount()
        console.log("count",count)
    },[])
const getCount=()=>{
    axios.get(" http://localhost:8080/cart")
    .then((res)=>setCount(res.data.length));
}
return   <CartContext.Provider value={{count,setCount,getCount}} >{children}</CartContext.Provider>
}