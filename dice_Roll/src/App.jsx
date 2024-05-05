import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted,setisGameStarted ] = useState(false);

  const toggleGamePlay=()=>{
    setisGameStarted((prev) =>!prev);
  }
  
  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/> //passing props
      }
    </>
  )
}

export default App

