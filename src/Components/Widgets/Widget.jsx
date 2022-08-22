import React from 'react';
import './widget.scss';

const Widget = () => {
  return (
    <div className='widget'>
        <div className="top">
            <i className="bi-people-fill"></i>
            <div className="data-column">
                <p>Visitors</p>
                <h2>6893</h2>
            </div>
        </div>
        <div className="bottom"></div>
    </div>
  )
}

export default Widget