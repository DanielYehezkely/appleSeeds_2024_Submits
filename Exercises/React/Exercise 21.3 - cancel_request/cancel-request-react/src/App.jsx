import { useState } from "react";

import DataContainer from "./components/DataContainer/DataContainer"
import ToggleButton from "./components/ToggleButton/ToggleButton"

function App() {
  
  const [showData, setShowData] = useState(false);

  const handleToggleClick = () => {
    setShowData((prev) => !prev)
  }

  return (
    <>
   <div className="hero-container">
   <h1>React - Cancel Request</h1>
    <ToggleButton handleToggleClick={handleToggleClick} showData={showData}/>
    <DataContainer showData={showData}/>
   </div>
    </>
  )

}

export default App
