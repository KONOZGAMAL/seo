import {React , useState } from 'react';
import { NavLink } from 'react-router-dom';
 import  './Header.css';
import logo from '../../assets/images/logo-icon.png';
export default function Header() {
  const activeElement = ({isActive})=>{
    return {
      color:isActive ? '#A201FF':'#000000' ,
   }
  }
  const [show , setShow] = useState(true);
  return (
   <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <h4>SEO Dream <img src={logo} alt="logo"/></h4>
            </a>
            {/* <!-- ***** Logo End ***** --> */}
            {/* <!-- ***** Menu Start ***** --> */}
               <ul className="nav" style={show? { display: "block" } : { display: "none" }}>
              <li className="scroll-to-section"><NavLink style={activeElement} to="/" >Home</NavLink></li>
              <li className="scroll-to-section"><NavLink style={activeElement} to="/about">About Us</NavLink></li>
              <li className="scroll-to-section"><NavLink style={activeElement} to="/services">Services</NavLink></li>
              <li className="scroll-to-section"><NavLink style={activeElement} to="/contact">Contact Us</NavLink></li> 
              <li className="scroll-to-section"><div class="main-blue-button"><NavLink to="/contact">Get Your Quote</NavLink></div></li> 
            </ul> 
            {show ? (
                <a href='/' className="menu-trigger active"
                  onClick={() => setShow(false)}
                >
                  <span>Menu</span>
                </a>
              ) : (
                <a href='/' className="menu-trigger" onClick={() => setShow(true)}>
                  <span>Menu</span>
                </a>
              )}
            {/* <!-- ***** Menu End ***** --> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}


