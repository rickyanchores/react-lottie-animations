import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card/Card'

//IMPORTS
import nintendoSwitch from "./animations/nintendo-switch.json"
import ps5 from "./animations/ps5.json";
import guitarist from "./animations/guitarist.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h3 className="font-bold text-red-400">
        React + Vite + Lottie animation
      </h3>
      <div className="container flex flex-wrap justify-around">
        <Card title={"Nintendo Switch."} text={"Test with Lottie"} animationData={nintendoSwitch}/>
        <Card title={"Playstation 5."} text={"Test with Lottie"} animationData={ps5}/>
        <Card title={"Guitarist."} text={"Test with Lottie"} animationData={guitarist}/>
      </div>
    </div>
  )
}

export default App
