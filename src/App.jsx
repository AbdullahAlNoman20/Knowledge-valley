

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Footer from './Components/Footer/Footer'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time, id) =>{
    // console.log('marking button connected',time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);


    // remove the read blog from bookmark
    // console.log('remove bookmark', id)

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }


  return (
    <>
     
     <Header></Header>
     

     <div className='md:flex md:px-20'>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
     </div>

      <Footer></Footer>

    </>
  )
}

export default App
