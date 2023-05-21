import React from 'react'
//IMPORTS
import Lottie from "lottie-react"
//import animation from "../../animations/nintendo-switch.json"
const Card = ({title,text,animationData}) => {
  return (
    <div className='Card bg-slate-700 p-5 w-120 rounded-lg text-start m-5 xl:flex'>
        <Lottie animationData={animationData}/>
        <div className="bg-slate-600 text-center p-5 rounded-md xl:ml-5">
            <h3 className='font-bold'>{title}</h3>
            <p>{text}</p>
            <button className="bg-slate-900 mt-2">Read More</button>
        </div>
    </div>
  )
}

export default Card