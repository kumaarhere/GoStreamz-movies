

import React from 'react'
import logo from './assets/logo.png';
import './App.css'

const Footer = () => {
  return (
    <footer className='mt-2 p-1'>
      <div className=' d-flex flex-column flex-lg-row justify-content-lg-between p-lg-5 bg-dark'>
        <ul style={{listStyle:'none'}}>
            <li>Product</li>
            <li>Home</li>
            <li>Movies</li>
            <li>Series</li>
            <li>Tv-Shows</li>
        </ul>
        <ul style={{listStyle:'none'}}>
            <li>Useful links</li>
            <li>Genre</li>
            <li>Term & policy</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
        <ul style={{listStyle:'none'}}>
            <li>Contact</li>
            <li>GoStreamz@gmail.com</li>
            <li>+91 7993467747</li>
            <li>Warangal</li>
            <li><a href="https://wa.me/+917993467747"><i class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;</a><a href='https://www.linkedin.com/in/kumar-kandugula/'><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;< a href="<Mr.Doc/>"><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;</a><a href='https://github.com/kumaarhere'><i class="fa-brands fa-github"></i></a></li>
        </ul>
        </div>
        <div className='bg-dark mt-1'>
        <a className="navbar-brand" id="footer" href="#"><img src={logo} alt="" width="200"></img></a>
        <p className='text-white text-center p-2'>&copy;2024 <a href='#'>GoStreamz.</a> All Rights Reserved.</p>
        </div>
      
    </footer>
  )
}

export default Footer
