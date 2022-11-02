import React from 'react'
import Projects from "../../assets/projects/projects"
import "./games.css"

const Games = () => {
  return (
    <div className="games__container">
        <Projects 
        name="Quizify"
        media="../../../images/test_photo.jpeg" description="enjoy this game"
        url="https/www.games.com"
        giturl=""
         />
        <Projects 
        name="Tenzies"
        media="../../../videos/Tenzies.mp4" description="enjoy this game"
        url="https://mytenzies-game.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Tenzies_Game.git"
         />
        <Projects 
        name="Tic-tac-toe"
        media="../../../images/test_photo.jpeg" description="enjoy this game"
        url="https/www.games.com"
        giturl=""
         />
        <Projects 
        name="DrumKit"
        media="../../../videos/drumkit.mp4" description="enjoy this game"
        url="https://drumkit3000.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Drumkit.git"
         />
    </div>
  )
}

export default Games