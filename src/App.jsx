import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import {Routes,Route} from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar1";
import Navbar2 from './components/navbar/Navbar2';
import Navbar3 from "./components/navbar/Navbar3";
import Login from './components/login/Login';
import Resister from './components/resister/Resister';
import Foundation from "./components/productsitem/Foundation";
import Cart from "./components/cart/Cart"
function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Resister/>}/>
        <Route path="/foundation" element={<Foundation/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {/* <Route path="/products/:id" element={<Product/>}/> */}
      </Routes> 
    </div>
  );
}

export default App;
