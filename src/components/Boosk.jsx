import { useState } from 'react'

import './App.css'

function App({name}) {
  const [count, setCount] = useState(name)

  return (
    <>

      <h1>Hello World  {count}</h1>

    </>
  )
}

export default App
