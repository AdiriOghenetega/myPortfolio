import React from 'react'
import Intro from "../about/intro"
import "./frontpage.css"

const Frontpage = () => {
  return (
    <div className="frontpage__container">
    
    <div className="frontpage__fading-text">
    <p id='head1' className='header'>Welcome to my portfolio website</p>
<p id='head2' className='header'>I'm Adiri Oghenetega</p>
<p id='head3' className='header'>Front-end Software Developer</p>
<p id='head4' className='header'>I put a bit of my heart into anything i do</p>
<p id='head5' className='header'>I hope you find something in here that interests you... </p></div>
        <Intro />
    </div>
  )
}

export default Frontpage