import React from 'react'
import {Link} from "react-router-dom"
import "./panels.css"

const Panels = (props) => {
  return (
    <div className="panels__container" >
        <ul>
            <Link to={props.path} ><li className='rotate-center' >{props.project}</li></Link>
        </ul>
    </div>
  )
}

export default Panels