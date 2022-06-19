import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
   
      <>
      <div id="foot1">
      <div className="support">
          <div className="header">SUPPORT</div>
          <div>Our calling hours are</div>
          <div>Monday-Sunday</div>
          <div>09:00 am-07:00 pm IST</div>
          <div id="sptext">
            <div>
              <i className="fas fa-phone-volume"></i>
            </div>
            <div>
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
          <div>Follow Us</div>
          <div id="sptext">
            <div>
              <i className="fab fa-facebook"></i>
            </div>
            <div>
              <i className="fab fa-twitter-square"></i>
            </div>
            <div>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div>
          <div className="header" >OUICK LINK</div>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms & Condition</li>
            <li>Privacy Policy</li>
            <li>return and Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
        <div>
          <div className="header">COSTOMER INFO</div>
        <ul>
            <li>My Account</li>
            <li>Tarck Your Order</li>
            <li>Order Return</li>
            <li>Whislist</li>
            <li>FAQ</li>
        </ul>
        </div>
        <div>
          <div className="header">CATEGORISE</div>
          <ul>
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Personal Care</li>
            <li>Mom ANd Baby Care</li>
            <li>Ayurueda</li>
          </ul>
        </div>
      
      </div>
    </>

  )
}

export default Footer
