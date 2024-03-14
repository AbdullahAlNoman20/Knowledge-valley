

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'


function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog =>{
    console.log('Bookmark')
  }

  return (
    <>
     
     <Header></Header>
     

     <div className='md:flex md:px-20'>
     <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
     <Bookmarks></Bookmarks>
     </div>


    </>
  )
}

export default App
