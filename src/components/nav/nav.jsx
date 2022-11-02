import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import Clock from "../../assets/clock/clock"
import Panels from "../../assets/panels/panels"
import { FcHome } from "react-icons/fc";
import "./nav.css"

const Navbar = () => {

  const [gameList,setGameList] = useState([
   "Quizify","Tenzies","Tic-tac-toe","DrumKit"
  ])
  const [toolList,setToolList] = useState([
   "Picture-quote Generator","Video-Player","Canvas","Clock","Search-engine","Gallery app"
  ])
  const [websiteList,setWebsiteList] = useState([
   "Loop Studio","Digital business card","Hcue-Restaurant"
  ])

  const [showGames,setShowGames]= useState(false)
  const [showTools,setShowTools]= useState(false)
  const [showWebsites,setShowWebsites]= useState(false)

  function handleShowGames(){
    setShowGames(true)
  }
  function handleHideGames(){
    setShowGames(false)
  }
  function handleShowTools(){
    setShowTools(true)
  }
  function handleHideTools(){
    setShowTools(false)
  }
  function handleShowWebsites(){
    setShowWebsites(true)
  }
  function handleHideWebsites(){
    setShowWebsites(false)
  }

  return (
    <div className="navbar__container">
        <div className="navbar__clock">
            <Clock /> 
        </div>
        <div className="navbar__links">
        <div className="navbar__links_games" onMouseOver={handleShowGames} onMouseLeave={handleHideGames}><Link to="/components/games/games">Games</Link>
        <div >{showGames && gameList.map((game,index)=>{
          return <Panels key={index} path="/components/games/games" project={game} />
        })}</div>
        </div>
        <div onMouseOver={handleShowTools} onMouseLeave={handleHideTools}><Link to="/components/tools/tools">Tools</Link>
        <div>{showTools && toolList.map((tool,index)=>{
          return <Panels key={index} path="/components/tools/tools" project={tool} />
        })}</div>
        </div>
        <div onMouseOver={handleShowWebsites} onMouseLeave={handleHideWebsites}><Link to="/components/websites/websites">Websites</Link>
        <div>{showWebsites && websiteList.map((website,index)=>{
          return <Panels key={index} path="/components/websites/websites" project={website}  />
        })}</div>
        </div>
        <div><Link to="/components/contact/contact">Contact</Link>
        </div>
        <div><Link to="/"><FcHome size="25px" /></Link>
        </div>
            
            
            
            
        </div>
    </div>
  )
}

export default Navbar