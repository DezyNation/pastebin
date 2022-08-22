import React from 'react'
import './textbox.scss'

const Textbox = () => {
  return (
    <div>
        <textarea name="text" id="text" cols="30" rows="10" placeholder='Write your text here...'></textarea>
    </div>
  )
}

export default Textbox