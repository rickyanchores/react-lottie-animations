import React from 'react'
//IMPORTS
import Lottie from "lottie-react"
//import animation from "../../animations/nintendo-switch.json"
const Card = ({title,text,animationData}) => {
  return (
    <div className='Card bg-slate-700 p-5 w-100 rounded-lg text-start m-5'>
        <Lottie animationData={animationData}/>
        <div className="bg-slate-600 p-5 rounded-md">
            <h3 className='font-bold'>{title}</h3>
            <p>{text}</p>
            <button>Read More</button>
        </div>
    </div>
  )
}

export default Card