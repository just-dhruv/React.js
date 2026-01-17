// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import ConditionRendering from "./ConditionalRendering";
import Hello from "./Hello"

function App() {

  // return (
  //   <>
  //     {/* <img src={reactLogo} width={200} /> */}
  //     <h1>App Component</h1>
  //     <Hello />

  //   </>
  // )

  const isLoged = false;
  if (isLoged) {
    return <Hello />
  }else{
    return <ConditionRendering />
  }
}

export default App
