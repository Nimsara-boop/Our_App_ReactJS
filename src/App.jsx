import { useState } from 'react'
import SearchBox from './components/SearchBox'
import  Books   from './components/Books'
import './App.css'

function App({name}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>

      <h1>Browse Books</h1>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Books searchTerm={searchTerm} />
    </>
  )
}

export default App
