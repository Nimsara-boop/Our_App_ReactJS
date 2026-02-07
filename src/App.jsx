import { useState } from 'react'
import SearchBox from './components/SearchBox'
import  Bookss   from './components/Books'
import './App.css'

function App({name}) {
  const [count, setCount] = useState(name)

  return (
    <>

      <h1>Hello World  {count}</h1>
      <SearchBox/>
      <Bookss/>
    </>
  )
}

export default App
