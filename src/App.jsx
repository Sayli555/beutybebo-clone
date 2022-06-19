import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import {Routes,Route} from "react-router-dom";
import Navbar1 from "./components/navbar/Navbar1";
import Navbar2 from './components/navbar/Navbar2';
import Navbar3 from "./components/navbar/Navbar3";
import Login from './components/login/Login';
import Resister from './components/resister/Resister';
import Foundation from "./components/productsitem/Foundation";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import Payment from './components/payment/Payment';
import Footer from "./components/footer/Footer"
function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Navbar1/>
        <Navbar2/>
        <Navbar3/>
        {/* <Payment/> */}
        {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Resister/>}/>
        <Route path="/foundation" element={<Foundation/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/payment" element={<Payment/>} />
        {/* <Route path="/products/:id" element={<Product/>}/> */}
      </Routes> 
     
    </div>
  );
}

export default App;
