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
        <p>As a little kid, I was beyond fascinated with tech, of course, I only saw It on television considering
that I grew up In a not-so-privileged home in a third-world country, regardless I fell In-love with tech
and dreamt of a life where I can become one of the world's greatest Innovators in tech. I started by
attempting to build little robots</p>
<Link to="/components/about/about"><button>Read more...</button></Link>

    </div>

    </div>
  )
}

export default Intro