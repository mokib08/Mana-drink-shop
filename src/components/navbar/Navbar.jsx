import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo (2).png'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo-image' src={logo} alt="" />
        <div className='linkTag'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/shop' >Shop</NavLink>
            <NavLink to='/story' >Story</NavLink>
            <NavLink to='/blog' >Blog</NavLink>
            <NavLink to='/community'>Community</NavLink>
        </div>
      <p>Cart(2)</p>
    </div>
  )
}

export default Navbar