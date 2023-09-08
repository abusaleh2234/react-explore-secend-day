import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Users from './users'
import Friends from './Friends'

function App() {
  function showAlart(){alert("CLicked Button")}
  const buttonClick2 = () => alert("button Click 2")

  function addClick (num){
    alert (num + 5)
  }

  return (
    <>
      <h3>React Explore</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={showAlart}>Click Me</button>
      <button onClick={buttonClick2}>Button 2</button>
      <button onClick={() => alert("button clicked 3")}>Button 3</button>
      <button onClick={() => addClick(10)}>Button 4</button>
    </>
  )
}

export default App
