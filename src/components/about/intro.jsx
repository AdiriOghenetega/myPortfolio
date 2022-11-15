import React from 'react'
import {Link} from "react-router-dom"
import "./intro.css"

const Intro = () => {
  return (
    <div className="intro__container">
    <div className="intro__img">
    <img src="../../images/myphoto.jpg" width="150px" height="200px"/>
    </div>
    <div className="intro__writeup">
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
        <br/>I'm determined to contribute to global advancement by helping to solve real-live problems one code at a time.<br/>I have skills in : <bold>HTML</bold> , <bold>JQuery</bold>, <bold>CSS</bold> , <bold>SCSS</bold>, <bold>Javascript</bold> and <bold>Reactjs</bold>. I'm also familiar with methodologies like BEM , and i have basic knowledge of cloud computing. 
</p>
<Link to="/components/about/about"><button>Read more...</button></Link>

    </div>

    </div>
  )
}

export default Intro