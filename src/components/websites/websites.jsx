import React from 'react'
import Projects from "../../assets/projects/projects"
import "./websites.css"

const Websites = (props) => {
  return (
    <div>
        <Projects
        name="Airbnb Experiences page"
        description = "A very useful website"
        media="../../../videos/Digitalbusinesscard_site-preview.mp4"
        url="https://digitalcard100.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Digital-business-card.git"
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