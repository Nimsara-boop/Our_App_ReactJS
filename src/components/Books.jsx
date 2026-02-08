import { useState, useEffect } from 'react'
import bookmark from '../assets/bookmark.png'
import addedBookmark from '../assets/addedBookmark.png'
import '../App.css'

function Books({searchTerm}) {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState({});
  const isSearchUsed = (searchTerm.trim() !== ""); //if the search term is not empty, then the search is used

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
    
    {!isSearchUsed && <h2>{books.length} Books in Library</h2>}
    
    {isSearchUsed && filteredBooks.length === 0 &&
      <p>No Books Found</p> }
      
    {isSearchUsed && filteredBooks.length > 0 && (
            <div class="filteredBooks">
        <h2>{filteredBooks.length} Books Found</h2>
        {filteredBooks.map((b,index) => (
            <ul key={index}>
              <div style={{display: 'flex', alignItems: 'center', gap:'0.5rem'}}>
                <img src={bookmarks[index] ? addedBookmark : bookmark} alt="bookmark" className="bookmark-icon" style={{width:'15px'}}
                     onClick={()=>setBookmarks(prev => ({...prev, [index] : !prev[index] }))}/>
                {b.title} - {b.author}
              </div>
            </ul>
        ))}
        </div>
      )
    
    }

      
    </>
  )
}

export default Books
