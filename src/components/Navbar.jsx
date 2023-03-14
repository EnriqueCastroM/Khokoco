import React from 'react'
import Logo from '../assets/img/Logo.png'

const Navbar = () => {
  return (
    <ul>
    
    <li><a href="/">Home</a></li>
    <li><a href="https://www.facebook.com/Cat-Clean-Jalisco-100909799076019">Facebook</a></li>
    <li><a href="https://www.instagram.com/catandcleanjalisco/">Instagram</a></li>
    <li><a href="https://wa.me/c/5213315694973">Whatsapp</a></li>
    <li><img src={Logo} alt="" className='logo'/></li>
  </ul>
  )
}

export default Navbar