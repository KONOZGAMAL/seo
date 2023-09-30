import React from 'react';
import { NavLink } from 'react-router-dom';
 import  './Header.css';
import logo from '../../assets/images/logo-icon.png'
export default function Header() {
  return (
   <header class="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" class="logo">
              <h4>SEO Dream <img src={logo} alt="logo"/></h4>
            </a>
            {/* <!-- ***** Logo End ***** --> */}
            {/* <!-- ***** Menu Start ***** --> */}
            <ul class="nav">
              <li class="scroll-to-section"><NavLink  to="/"  class="active">Home</NavLink></li>
              <li class="scroll-to-section"><NavLink  to="/about">About Us</NavLink></li>
              <li class="scroll-to-section"><NavLink  to="/services">Services</NavLink></li>
              <li class="scroll-to-section"><NavLink  to="/contact">Contact Us</NavLink></li> 
              <li class="scroll-to-section"><div class="main-blue-button"><NavLink to="/contact">Get Your Quote</NavLink></div></li> 
            </ul>        
            <a class='menu-trigger' href='/'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}
