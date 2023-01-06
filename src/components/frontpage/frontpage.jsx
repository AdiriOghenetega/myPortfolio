import React from 'react'
import Intro from "../about/intro"
import "./frontpage.css"

const Frontpage = () => {
  return (
    <>
<div style={{width: "100%",padding:"0.5em",color:"gold",border:"1px solid",borderLeft:"none",borderRight:"none"}}><marquee direction="right" behavior="scroll">Nice to meet you</marquee></div>
    <div className="frontpage__container">
    <div className="frontpage__fading-text">
    <p id='head1' className='header'>Hi</p>
<p id='head2' className='header'>I'm Adiri Oghenetega</p>
<p id='head3' className='header'>Front-end Software Developer</p>
<p id='head4' className='header'>I design and build functional and responsive user interfaces</p>
<p id='head5' className='header'>Here are a few of the past projects I've worked on... </p></div>
        <Intro />
    </div>
    </>
  )
}

export default Frontpage