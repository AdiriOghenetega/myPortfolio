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
        media="../../../images/test_photo.jpeg" description="enjoy this game"
        url="https/www.games.com"
        giturl=""
         />
        <Projects 
        name="Tic-tac-toe"
        media="../../../images/test_photo.jpeg" description="enjoy this game"
        url="https/www.games.com"
        giturl=""
         />
        <Projects 
        name="DrumKit"
        media="../../../images/test_photo.jpeg" description="enjoy this game"
        url="https/www.games.com"
        giturl=""
         />
    </div>
  )
}

export default Games