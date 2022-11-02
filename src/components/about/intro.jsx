import React from 'react'
import {Link} from "react-router-dom"
import "./intro.css"

const Intro = () => {
  return (
    <div className="intro__container">
    <div className="intro__img">
    <img src="../../images/test_photo.jpeg" width="150px" height="200px"/>
    </div>
    <div className="intro__writeup">
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
</p>
<Link to="/components/about/about"><button>Read more...</button></Link>

    </div>

    </div>
  )
}

export default Intro