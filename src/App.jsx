import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({name}) {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Hello World - {name}</h1>

    </>
  )
}

export default App
