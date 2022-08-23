import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Textbox from '../Components/Textbox/Textbox';
import './frontend.scss';

const Frontend = () => {
  return (
    <div className='main-container'>
        <Navbar />
        <Textbox />
    </div>
  )
}

export default Frontend