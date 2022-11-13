import React from 'react'
import Projects from "../../assets/projects/projects"
import "./games.css"

const Games = () => {
  return (
    <div className="games__container">
        <Projects 
        name="Quizify"
        media="../../../videos/Quiz-App.mp4" 
        description="Fun quiz game , music genre based, row of 10 questions per game session, correct answers provided at the end of each game session. Code written with reactjs and designed with css, quiz data fetched from https://opentdb.com/ "
        url="https://myquizapp3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Quiz-App.git"
        id="quizify"
         />
        <Projects 
        name="Tenzies"
        media="../../../videos/Tenzies.mp4" 
        description="Generic tenzies game . Roll until all dice are the same, click each die to freeze it as its current value between rolls. Time duration and number of rolls are displayed at the end after a game session is won. Code written with reactjs and designed with css  "
        url="https://mytenzies-game.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Tenzies_Game.git"
        id="tenzies"
       
         />
        
        <Projects 
        name="DrumKit"
        media="../../../videos/drumkit.mp4" description="Entertaining musical game , use your keys from A through L on your keyboard to play a drumset, get creative with it , practice your drumming skills . Each key has a unique drumset sound. Code written with purely HTML and SCSS"
        url="https://drumkit3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Drumkit.git"
        id="drumkit"
         />
    </div>
  )
}

export default Games