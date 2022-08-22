import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
          <img 
          src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg" 
          className='admin-img'
          />
          <div className="content">
            <p>Hello,</p>
            <h1>Ajnesh</h1>
          </div>
        </div>
        <div className="center">
          <a href="#" className="sidebar-link"><i className="bi-speedometer"></i>Dashboard</a>
          <a href="#" className="sidebar-link"><i className="bi-people-fill"></i>Visitors</a>
          <a href="#" className="sidebar-link"><i className="bi-pencil-square"></i>Pastes</a>
          <a href="#" className="sidebar-link"><i className="bi-megaphone-fill"></i>Promotions</a>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Sidebar