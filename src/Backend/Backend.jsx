import React from 'react';
import './backend.scss';
import Sidebar from '../Components/Sidebar/Sidebar';
import Widget from '../Components/Widgets/Widget';

const Backend = () => {
  return (
    <div className='backend-container'>
        <Sidebar />
        <div className="wrapper">
            <div className="backend-navbar">
                <h1 className="logo">Pastebin</h1>
                <a href="https://dezynation.com" target='_blank' className="branding">
                    <p>Developed By</p>
                    <h3>DezyNation</h3>
                </a>
            </div>
            <div className="widgets-wrapper">
                <Widget />
                <Widget />
                <Widget />
                <Widget />
            </div>
        </div>
    </div>
  )
}

export default Backend