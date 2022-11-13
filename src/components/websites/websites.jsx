import React from 'react'
import Projects from "../../assets/projects/projects"
import "./websites.css"

const Websites = () => {
  return (
    <div>
        <Projects
        name="Green Life"
        description = "This is a static website, created solely to illustrate my skills in making a website full responsive to query. Code written with HTML5 and designed with css"
        media="../../../videos/greenlife.mp4"
        url="https://mygreenlife.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Green-Life.git"
        id="greenlife"
         />
        <Projects
        name="Digital business card"
        description = "Digital business card . Gives access to contact info and bio ,contains links to social media handles, as well as link to github repository.Code written with reactjs and designed with css"
        media="../../../videos/DigitalbusinessCard-sitereview.mp4"
        url="https://digitalcard100.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Digital-business-card.git"
        id="digitalbusinesscard"
         />
        <Projects
        name="Hcue-Restaurant"
        description = "A fully responsive restaurant website , client can add food to cart and order .i used the commercejs SDK to aid this . This website is still undergoing development, as such not all the food options will go through when you order . only food items without variants can be ordered for now .Here is the list of food items without variants(for the sake of testing) : boiled potato, porridge, juice, water and the Salads . Code written with reactjs and designed with css"
        media="../../../videos/hcuerestaurant.mp4"
        url="https://hcuerestaurant.netlify.app/"
        giturl="https://github.com/AdiriOghenetega/Hcue.Restaurant.git"
        id="hcuerestaurant"
         />
    </div>
  )
}

export default Websites