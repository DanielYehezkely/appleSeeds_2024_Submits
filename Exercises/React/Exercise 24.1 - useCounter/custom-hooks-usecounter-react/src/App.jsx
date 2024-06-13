import { useState } from 'react'
import CounterComponent from './components/CounterComponent'


function App() {
  

  return (
    <>
  <div className="hero-container">
    <h1>useCounter - custom hook</h1>
    <div className="container">
      <CounterComponent id={'1'} />
      <CounterComponent id={'2'} />
          
    </div>
  </div>
    </>
  )
}

export default App
