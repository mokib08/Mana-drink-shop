import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.png'
import './Navbar.scss'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className='navbar'>
      <img className='logo-image' src={logo} alt="" />

      {/* Overlay background (outside click করলে close হবে) */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className={`linkTag ${menuOpen ? 'open' : ''}`}>
        <i className="ri-close-line closeIcon" onClick={closeMenu}></i>
        <NavLink to='/' onClick={closeMenu}>Home</NavLink>
        <NavLink to='/shop' onClick={closeMenu}>Shop</NavLink>
        <NavLink to='/story' onClick={closeMenu}>Story</NavLink>
        <NavLink to='/blog' onClick={closeMenu}>Blog</NavLink>
        <NavLink to='/community' onClick={closeMenu}>Community</NavLink>
        {/* cross icon */}
        
      </div>

      <div className='cartMenu'>
        <p>Cart(2)</p>
        <i className="ri-menu-3-line" onClick={toggleMenu}></i>
      </div>
    </div>
  );
}

export default Navbar