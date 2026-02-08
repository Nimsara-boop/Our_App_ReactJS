import { useState, useEffect } from 'react'

import '../App.css'

function Books({searchTerm}, {isSearchUsed}) {

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

  if (loading) return  <p>Loading...</p>
  if (error) return <p>Error {error}</p>

  const filteredBooks = books.filter((b) => 
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) //creates a new array with the books that match the search term
  );

  return (
    <>
    {filteredBooks.length === 0 ? (
      <p>No Books Found</p>) : (
        <div class="filteredBooks">
        <h2>{filteredBooks.length} Books Found</h2>
        {filteredBooks.map((b,index) => (
            <ul key={index}>
              {b.title} - {b.author}
            </ul>
        ))}
        </div>
      )
    
    };
      
    </>
  )
}

export default Books
