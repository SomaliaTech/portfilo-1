import React from 'react'
import './header.scss'
function HeaderSection() {
  return (
    <div className='header'>
<div className="left">
    <span className="logo">Hussein Kuneen</span>
</div>
<div className="right">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
        </ul>
</div>
    </div>
  )
}

export default HeaderSection