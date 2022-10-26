import React from 'react'
import {useRef,useEffect,useState} from "react"
import "./clock.css"

const Clock = () => {

    const [hour,setHour]= useState()
    const [min,setMin] = useState()
    const [sec,setSec] = useState()
    const [switchcolor,setSwithcolor] = useState(true)

const hourHand = useRef()
const minHand = useRef()
const secHand = useRef()

let hourHandStyle,minHandStyle,secHandStyle,myColor; 

 if(switchcolor){
    myColor= "white"
} else{
myColor = "gold"
}


hourHandStyle = {transform: `rotate(${hour}deg)`}
minHandStyle = {transform: `rotate(${min}deg)`}
secHandStyle = {transform: `rotate(${sec}deg)` , backgroundColor: myColor }



const activeClock=()=>{
    const now = new Date();
    const myHour= now.getHours();
    const myHourInDegree=((myHour/12) * 360) + 90  ;
    
    setHour(myHourInDegree)

   const myMin= now.getMinutes();
   const myMinInDegree= (360/60 * `${myMin}`) + 90 ;
   
   setMin(myMinInDegree)

   const mySec= now.getSeconds();
   const mySecInDegree= (360/60 * `${mySec}`) + 90 ;

   setSec(mySecInDegree)
   setSwithcolor(prev=>!prev)
}

useEffect(()=>{
    const timeStart= setInterval(activeClock, 1000);

    return ()=>clearInterval(timeStart)
},[])


  return (
    <div className="clock__container">
<div className="clock" style={switchcolor === true ? {boxShadow : "2px 2px 2px 2px white"} : { boxShadow : "2px 2px 2px 2px gold"}} > 
        <div className="clock-face" >
            <div className="hand hour-hand" style={hourHandStyle} ></div>
            <div className="hand min-hand"  style={minHandStyle} ></div>
            <div className="hand sec-hand" style={secHandStyle} ></div>
        </div>

    </div>
    </div>
    
  )
}

export default Clock