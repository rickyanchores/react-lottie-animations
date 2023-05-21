import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'

//IMPORTS
import nintendoSwitch from "./animations/nintendo-switch.json"
import ps5 from "./animations/ps5.json";
import guitarist from "./animations/guitarist.json";
import webdev from "./animations/webdev.json";
import dataanalysis from "./animations/dataanalysis.json";
import profile from "./animations/profile.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3 className="font-bold text-blue-400 text-lg">
        React + Vite + Lottie animation
      </h3>
      <div className="container flex flex-wrap justify-around">
        <Card className="profile-card" title={"Profile"} text={"My personal portofolio"} animationData={profile}/>
        <Card title={"Web Dev"} text={"Web Development"} animationData={webdev}/>
        <Card title={"Data Analysis"} text={"Data Analyisis"} animationData={dataanalysis}/>
        <Card title={"Nintendo Switch."} text={"Test with Lottie"} animationData={nintendoSwitch}/>
        <Card title={"Playstation 5."} text={"Test with Lottie"} animationData={ps5}/>
        <Card title={"Guitarist."} text={"Test with Lottie"} animationData={guitarist}/>
      </div>
      <p className='font-bold'>dev by Ricky A.</p>
    </div>
  )
}

export default App
  