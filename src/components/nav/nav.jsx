import React from "react";
import { useState,useRef } from "react";
import { Link } from "react-router-dom";
import Clock from "../../assets/clock/clock";
import { FcHome,FcMenu } from "react-icons/fc";
import "./nav.css";

const Navbar = () => {
  const [gameList, setGameList] = useState([{
    name:"Quizify",
  src: "quizify" 
  },
  { name:"Tenzies",
 src:"tenzies"
},
   {name: "DrumKit",
  src: "drumkit"
  }]);
  const [toolList, setToolList] = useState([
    {name:"Picture-quote Generator",
  src:"picturequotegenerator"
},
    {name:"Video-Player",
    src:"videoplayer"
  },
    {name:"Canvas",
  src:"canvas"
  },
   {name: "Clock",
  src: "clock"
  },
   { name:"Search-engine",
  src: "searchengine"
  },
   { name:"Gallery app",
  src: "galleryapp"
  }
  ]);
  const [websiteList, setWebsiteList] = useState([
    {name:"Green Life",
  src:"greenlife"
  },
    {name:"Digital business card",
  src: "digitalbusinesscard"
  },
    {name:"Hcue-Restaurant",
  src:"hcuerestaurant"
  },
  ]);
  const [showNavDropDown,setShowNavDropDown]= useState({
    games: false,
    tools: false,
    websites: false
  })

  function handleShowNavDropdown(e){
    const {name} = e.target
  setShowNavDropDown(prev=>{
    return {
      ...prev,
      [name]: !prev[name]
    }
  })
  }

  function handleExitDropDownGames(){
    setShowNavDropDown(prev=>{
      return {
        ...prev,
       games: false
      }
    })
    setShowNestedDropdown(prev=>{
      return {
        ...prev,
       games: false
      }
    })
  }
  function handleExitDropDownTools(){
    setShowNavDropDown(prev=>{
      return {
        ...prev,
       tools: false
      }
    })
    setShowNestedDropdown(prev=>{
      return {
        ...prev,
       tools: false
      }
    })
  }
  function handleExitDropDownWebsites(){
    setShowNavDropDown(prev=>{
      return {
        ...prev,
       websites: false
      }
    })
    setShowNestedDropdown(prev=>{
      return {
        ...prev,
       websites: false
      }
    })
  }

  const [showDropdown,setShowDropdown]=useState(false)
const [showNestedDropdown, setShowNestedDropdown]= useState({
  games: false,
  tools: false,
  websites: false
})
function showMyDropdown(){
  setShowDropdown(prev=>!prev)
}
function hideDropdown(){
  setShowDropdown(false)
}
function showMyNestedDropDown(e){
  const {name} = e.target
  setShowNestedDropdown(prev=>{
    return {
      ...prev,
      [name]: !prev[name]
    }
  })
}

  return (
    <nav>
      <div className="navbar__container">
      <div className="navbar__clock">
        <Clock />
      </div>
      <div className="navbar__links">
        <div onMouseDown={handleShowNavDropdown} onMouseLeave={ handleExitDropDownGames} className="dropdown">
          <Link name="games" to="/components/games/games">Games</Link>
          <div className={`dropdown-content rotate-center ${showNavDropDown.games && "shownavdropdown"}`}>
            <div>
              {gameList.map((game, index) => {
                return <a href={`/components/games/games#${game.src}`} key={index}>{game.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div onMouseDown={handleShowNavDropdown} onMouseLeave={ handleExitDropDownTools} className="dropdown">
          <Link name="tools" to="/components/tools/tools">Tools</Link>
          <div className={`dropdown-content rotate-center ${showNavDropDown.tools && "shownavdropdown"}`}>
            <div>
              {toolList.map((tool, index) => {
                return <a href={`/components/tools/tools#${tool.src}`} key={index}>{tool.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div onMouseDown={handleShowNavDropdown} onMouseLeave={ handleExitDropDownWebsites} className="dropdown">
          <Link name="websites" to="/components/websites/websites">Websites</Link>
          <div className={`dropdown-content rotate-center ${showNavDropDown.websites && "shownavdropdown"}`}>
            <div>
              {websiteList.map((website, index) => {
                return <a href={`/components/websites/websites#${website.src}`} key={index}>{website.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/components/contact/contact">Contact</Link>
        </div>
        <div className="dropdown">
          <Link to="/components/about/about">About</Link>
        </div>
        <div className="dropdown">
          <Link to="/">
            <FcHome size="25px" />
          </Link>
        </div>
        <div className="navbar__links_bars-dropdown">
       <FcMenu size="25px" onMouseDown={showMyDropdown} onMouseLeave={hideDropdown} />
       <div className={`navbar__links_bars-dropdown-content ${showDropdown && "showdropdown"}`}>
       <div >
          <Link to="/">
            <FcHome size="25px" />
          </Link>
        </div>
       <div className="navbar__links_bars_nested-dropdown">
          <div onClick={showMyNestedDropDown} onMouseLeave={ handleExitDropDownGames}><Link name="games" to="/components/games/games">Games</Link></div>
          <div className={`navbar__links_bars_nested-dropdown-content ${showNestedDropdown.games && "shownesteddropdown"}`}>
            <div>
              {gameList.map((game, index) => {
                return <a href={`#${game.src}`} key={index}>{game.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div className="navbar__links_bars_nested-dropdown">
          <div onClick={showMyNestedDropDown} onMouseLeave={ handleExitDropDownTools}><Link name="tools" to="/components/tools/tools">Tools</Link></div>
          <div className={`navbar__links_bars_nested-dropdown-content ${showNestedDropdown.tools && "shownesteddropdown"}`}>
            <div>
              {toolList.map((tool, index) => {
                return <a href={`#${tool.src}`} key={index}>{tool.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div className="navbar__links_bars_nested-dropdown">
          <div onClick={showMyNestedDropDown} onMouseLeave={ handleExitDropDownWebsites}><Link name="websites" to="/components/websites/websites">Websites</Link></div>
          <div className={`navbar__links_bars_nested-dropdown-content ${showNestedDropdown.websites && "shownesteddropdown"}`}>
            <div>
              {websiteList.map((website, index) => {
                return <a href={`#${website.src}`} key={index}>{website.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div >
          <Link to="/components/contact/contact">Contact</Link>
        </div>
        <div>
          <Link to="/components/about/about">About</Link>
        </div>
       </div>
      </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
