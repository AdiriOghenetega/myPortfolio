import React from 'react'
import Projects from "../../assets/projects/projects"
import "./tools.css"

const Tools = () => {
  return (
    <div>
        <Projects
        name="Picture-Quote Generator"
        description="A very useful tool"
        media="../../../videos/picture-quote-generator.mp4"
        url="https://picture-quote-generator.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Picture--Quote-generator.git"
         />
        <Projects
        name="Video Player"
        description="A very useful tool"
        media="../../../videos/custom-video-player.mp4"
        url="https://custom-videoplayer3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Custom-HTML5-Video-player.git"
         />
        <Projects
        name="Canvas"
        description="A very useful tool"
        media="../../../videos/canvas.mp4"
        url="https://mycanvas3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Custom-HTML5-Video-player.git"
         />
        <Projects
        name="Clock"
        description="A very useful tool"
        media="../../../videos/clock.mp4"
        url="https://myclock3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Clock-with-css-variables.git"
         />
        <Projects
        name="Search Engine"
        description="A very useful tool"
        media="../../../videos/search-engine.mp4"
        url="https://searchengine-app.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Ajax-type-ahead.git"
         />
        <Projects
        name="Gallery App"
        description="A very useful tool"
        media="../../../videos/Gallery-Slider.mp4"
        url="https://gallery-slider300.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Image-gallery-slider.git"
         />
        
    </div>
  )
}

export default Tools