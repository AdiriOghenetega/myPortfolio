import Navbar from "./components/nav/nav";
import Frontpage from "./components/frontpage/frontpage";
import Footer from "./components/footer/footer"
import Games from "./components/games/games"
import Tools from "./components/tools/tools"
import Websites from "./components/websites/websites"
import Contact from "./components/contact/contact"
import About from "./components/about/about"
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/components/games/games" element={<Games />} />
        <Route path="/components/tools/tools" element={<Tools />} />
        <Route path="/components/websites/websites" element={<Websites />} />
        <Route path="/components/contact/contact" element={<Contact />} />
        <Route path="/components/about/about" element={<About />} />
      </Routes>
      
  <div className='light x3'></div>
  <div className='light x2'></div>
  <div className='light x1'></div>
  <div className='light x4'></div>
  <div className='light x5'></div>
  <div className='light x6'></div>
  <div className='light x7'></div>
  <div className='light x8'></div>
  <div className='light x9'></div>
  
  <Footer />
    </div>
  );
}

export default App;
