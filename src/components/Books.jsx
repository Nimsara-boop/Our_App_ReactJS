import { useState } from 'react'

import './App.css'

function Books({name}) {
  const [count, setCount] = useState(name)

  return (
    <>

      <h1>Book Component</h1>

    </>
  )
}

export default Books
