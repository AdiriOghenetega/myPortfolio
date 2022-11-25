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



window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("navbar__links_bars-dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showdropdown')) {
        openDropdown.classList.remove('showdropdown');
      }
    }
  }
}

  return (
    <nav>
      <div className="navbar__container">
      <div className="navbar__clock">
        <Clock />
      </div>
      <div className="navbar__links">
        <div  className="dropdown">
          <button className="dropdown__button" name="games" onMouseDown={handleShowNavDropdown} >Projects</button>
          <div className={`dropdown-content rotate-center `}>
          <Link name="games" to="/components/games/games">Games</Link>
          <Link name="tools" to="/components/tools/tools">Tools</Link>
          <Link name="websites" to="/components/websites/websites">Websites</Link>
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
        <div className="navbar__links_bars-dropdown-btn" onPointerDown={showMyDropdown}>
        <FcMenu size="30px" />
        <h4>PROJECTS</h4>
        </div>
       <div className={`navbar__links_bars-dropdown-content ${showDropdown && "showdropdown"}`}>
       <div>
          <Link to="/">
            <FcHome size="25px" />
          </Link>
        </div>
        <div><Link name="games" to="/components/games/games">Games</Link></div>
        <div><Link name="tools" to="/components/tools/tools">Tools</Link></div>
        <div><Link name="websites" to="/components/websites/websites">Websites</Link></div>
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
