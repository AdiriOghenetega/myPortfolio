import React from 'react'
import Projects from "../../assets/projects/projects"
import "./websites.css"

const Websites = (props) => {
  return (
    <div>
        <Projects
        name="Loop Studio"
        description = "A very useful website"
        media="../../../videos/loopstudio.mp4"
        url="https://staticstudio.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Loop_studios.git"
         />
        <Projects
        name="Digital business card"
        description = "A very useful website"
        media="../../../videos/DigitalbusinessCard-sitereview.mp4"
        url="https://digitalcard100.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Digital-business-card.git"
         />
        <Projects
        name="Hcue-Restaurant"
        description = "A very useful website"
        media="../../../images/test_photo.jpeg"
        url="https/www.websites.com"
        giturl=""
         />
    </div>
  )
}

export default Websites