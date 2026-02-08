import { useState } from 'react'

import '../App.css'

function SearchBox({searchTerm, setSearchTerm}) {
  //const [count, setCount] = useState(name)

  return (
    <>

      <input type='text' placeholder='Enter book here...' value={searchTerm} //controlled input
      onChange={(e) => setSearchTerm(e.target.value)}
      />

    </>
  )
}

export default SearchBox