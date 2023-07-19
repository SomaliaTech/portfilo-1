import React from 'react'
import "./herosection.scss"
import {BsSendFill} from 'react-icons/bs'

function HeroSection() {
  return (
    <div className='hero'>
        <div className="container">
<h1>Hello 👋 Desingers</h1>
<h2>HI, i'm Hussein Kuneen <br/>

    <span>Web Designer</span>
</h2>
<div className="btnContainer">
<BsSendFill className='icon'/>
      <span className='btn'>Say Hello</span>
</div>
        </div>
    </div>
  )
}

export default HeroSection