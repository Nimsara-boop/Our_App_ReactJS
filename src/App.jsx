import { useState } from 'react'
import SearchBox from './components/SearchBox'
import  Books   from './components/Books'
import './App.css'
import logo from './assets/bb.png'
import allBookMarks from './assets/allBookmarks.png'

function App({name}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarks, setBookmarks] = useState({});
  return (
    <>
      <img src={logo} alt="Logo" className="logo" style={{paddingBottom: '0rem'}}/>

      <div style={{backgroundColor: '#fff', paddingTop: '0.4rem', paddingLeft: '20rem', paddingRight: '20rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}}>
      <div style={{flexDirection: 'row', display:'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        
        <h1 style={{color: '#1a1a1a', textAlign: 'center'}}>Browse Books</h1>
        
        <div style={{display: 'flex', alignItems: 'center', gap:'0.5rem'}}>
         <img src={allBookMarks} alt="All Bookmarks" className="all-bookmarks" style={{paddingLeft:'5rem', width:'20px'}}/>
          <a href='/bookmarks' style={{color: '#195a46', textDecoration: 'none'}}>View Bookmarks</a>
        </div>

      </div>
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Books searchTerm={searchTerm} />
      </div>
    </>
  )
}

export default App
