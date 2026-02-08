import { useState, useEffect } from 'react'

import '../App.css'

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetch('/books.json')
    .then((res)=>{
      if (!res.ok) throw new Error("Couldnt load Books data ");
      return res.json()
    })
    .then((data)=>{
      setBooks(data.books)
      setLoading(false)
    })
    .catch((err)=>{
      setError(err.message)
      setLoading(false)
    })
  }, [])
  

  return (
    <>

      <h2>Book Component</h2>

    </>
  )
}

export default Books
