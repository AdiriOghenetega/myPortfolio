import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineHtml5 } from "react-icons/ai";
import {IoLogoCss3,IoLogoJavascript,IoLogoReact } from "react-icons/io5";
import { SiRedux, SiChakraui } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro__container">
    {/* <div className="intro__img">
    <img src="../../images/myphoto.jpg" width="150px" height="200px"/>
    </div> */}
    <div className="intro__writeup">
        <h2>MY SKILLS</h2>
        <div className="intro__writeup_skills-logo">
          <div className="html">
          <AiOutlineHtml5  size="25" />
          <h3>HTML5</h3>
          </div>
          <div className="css">
          <IoLogoCss3 size="25" />
          <h3>CSS</h3>
          </div>
          <div className="chakra">
          <SiChakraui size="25" />
          <h3>Chakra UI</h3>
          </div>
          <div className="js">
          <IoLogoJavascript size="25" />
          <h3>JAVASCRIPT</h3>
          </div>
          <div className="react">
          <IoLogoReact size="25" />
          <h3>REACTJS</h3>
          </div>
          <div className="redux">
          <SiRedux size="25" />
          <h3>REDUX</h3>
          </div>
          <div className="next">
          <TbBrandNextjs size="25" />
          <h3>NEXTJS</h3>
          </div>
        </div>
<Link to="/components/about/about"><button title="get to know me">More about me...</button></Link>

    </div>

    </div>
  )
}

export default Intro