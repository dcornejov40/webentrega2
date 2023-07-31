import React from 'react';
import logo from '../images/logomandalamo.png';

const NavBar = () => {
    return (
   <nav>
    <img src={logo} alt="MANDALAMO" />
   <h3>SKINCARE MANDALAMO</h3>
   <div>
   <button>celulares</button>
   <button>tablet</button>
   <button>notebooks</button>
   </div>
   </nav>
   

);
};

export default NavBar