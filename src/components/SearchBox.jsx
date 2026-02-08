import { useState } from 'react'

import '../App.css'

function SearchBox({searchTerm, setSearchTerm}) {
  //const [count, setCount] = useState(name)
  const [isSearchUsed, setIsSearchUsed]= useState(false);

  return (
    <>

      <input type='text' placeholder='Enter book here...' value={searchTerm} //controlled input
      onChange={(e) => {setSearchTerm(e.target.value)
        setIsSearchUsed(true)}
      }
      />

    </>
  )
}

export default SearchBox