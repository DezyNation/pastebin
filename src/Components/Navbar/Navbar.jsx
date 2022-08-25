import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <input type='text' name='title' id='title' className='logo' value='Your Paste Title' />
                <a href="#" className='nav-icon'><i className="bi-cloud-check-fill"></i></a>
                <a href="#" className='nav-icon'><i className="bi-telegram"></i></a>
                <a href="#" className='nav-icon'><i className="bi-shield-lock-fill"></i></a>
                <a href="#" className='nav-icon'><i className="bi-clock-history"></i></a>
            </div>
            <div className="right">
                <div className="ad">Space for advertisement 1</div>
                <div className="ad">Space for advertisement 2</div>
            </div>
        </div>
    </div>
  )
}

export default Navbar