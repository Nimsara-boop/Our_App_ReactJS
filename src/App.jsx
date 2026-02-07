import { useState } from 'react'
import {seachBox} from './components/SearchBox'
import './App.css'

function App({name}) {
  const [count, setCount] = useState(name)

  return (
    <>

      <h1>Hello World  {count}</h1>
      <seachBox/>
    </>
  )
}

export default App
