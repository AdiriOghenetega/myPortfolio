import React from 'react'
import Projects from "../../assets/projects/projects"
import "./websites.css"

const Websites = () => {
  return (
    <div className="websites__container">
        {/* <Projects
        name="Green Life"
        description = "This is a static website, created solely to illustrate my skills in making a website full responsive to query. Code written with HTML5 and designed with css"
        media="../../../videos/greenlife.mp4"
        url="https://mygreenlife.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Green-Life.git"
        id="greenlife"
         /> */}
        
        <Projects
        name="Hcue-Restaurant"
        description = "I built this fully responsive restaurant/e-commerce website for a well known restaurant in my state , client can add food to cart and order .i used the commercejs SDK to aid this . Code written from scratch with reactjs and designed with css"
        media="../../../videos/hcuerestaurant.mp4"
        url="https://hcuerestaurant.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Hcue.Restaurant.git"
        id="hcuerestaurant"
         />
    </div>
  )
}

export default Websites