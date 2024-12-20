import React from "react";
 import { Link } from "react-router-dom";

 function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
         <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About Us</Link>
         <Link to="/sign-up">Sign Up</Link>
         <Link to="/feedback">Feedback</Link>
       </nav>
     </header>
   );
 }

 export default Header;
