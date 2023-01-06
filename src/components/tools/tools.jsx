import React from 'react'
import Projects from "../../assets/projects/projects"
import "./tools.css"

const Tools = () => {
  return (
    <div>
        <Projects
        name="Picture-Quote Generator"
        description="A simple picture-quote app. Client have the option to choose whatever category of images they prefer , images are fetched from the pexels.com API endpoint. Client have access to a text input where a custom quote can be written and target quote will be displayed and centered on the chosen image . Code written with reactjs and designed with css"
        media="../../../videos/picture-quote-generator.mp4"
        url="https://picture-quote-generator.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Picture--Quote-generator.git"
        id="picturequotegenerator"
         />
        <Projects
        name="Video Player"
        description="Custom video player with custom controls . Control options include play, pause, skipbackward, skipforward, adjust volume,adjust speed etc. I recognize that HTML video tag has a controls feature , this project was created to experiment on adding custom controls to the video tag.Code written with pure vanilla javascript and designed with CSS"
        media="../../../videos/custom-video-player.mp4"
        url="https://custom-videoplayer3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Custom-HTML5-Video-player.git"
        id="videoplayer"
         />
        <Projects
        name="Canvas"
        description="Drawing is fun . This app coverts client screen into a canvas with 2d context . width and height of canvas fits client's screen-height and screen-width,lineCap is set to round and lineJoin is set to round, strokestyle alternates as you draw . Coded with HTML and Inline javscript"
        media="../../../videos/canvas.mp4"
        url="https://mycanvas3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/HTML5-canvas.git"
        id="canvas"
         />
        <Projects
        name="Clock"
        description="Analog clock with custom controls . Client has option to blur face of clock , client has option to change color of clock border,client has option to change size of clock border . CSS variables are used in updating these styles , inline javascript was used to acess the date method and other functionalities"
        media="../../../videos/clock.mp4"
        url="https://myclock3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Clock-with-css-variables.git"
        id="clock"
         />
        <Projects
        name="Search Engine"
        description="Local search engine app , filters through information fetched from https://gist.githubusercontent.com API endpoint which gives access to a list of countries , states and population data. regular expression is used to filter through the fetched data as client type-in the text input. Displayed details include state , country and population that matches the search regEx .  "
        media="../../../videos/search-engine.mp4"
        url="https://searchengine-app.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Ajax-type-ahead.git"
        id="searchengine"
         />
        <Projects
        name="Gallery App"
        description="An image slider. slides to next image on interval , has option to jump to a specific image,has option to skip-backward to previous image and skip-forward to next image. This app is a useful asset to display a list of photos on a user interface. Code written with reactjs and designed with css"
        media="../../../videos/Gallery-Slider.mp4"
        url="https://gallery-slider300.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Image-gallery-slider.git"
        id="galleryapp"
         />
        <Projects
        name="Digital business card"
        description = "Create a Digital business card .Fill a form and click create , the app creates a digital business card for you. Gives access to contact info and bio ,contains links to social media handles, as well as link to github repository.Code written with reactjs and designed with css"
        media="../../../videos/DigitalbusinessCard-sitereview.mp4"
        url="https://digitalcard100.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Digital-business-card.git"
        id="digitalbusinesscard"
         />
    </div>
  )
}

export default Tools