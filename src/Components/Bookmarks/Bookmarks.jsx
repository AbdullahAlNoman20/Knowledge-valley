
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
    
        <div className="md:w-1/3 m-5 p-5 border-2 rounded-lg">
            
            <div className="">
            <h1 className="text-2xl font-extrabold bg-red-100 my-3 p-2 rounded-lg">Spend Time on read:{readingTime} </h1>
            </div>


            <h1 className="text-2xl font-extrabold p-2">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>

    );
};


Bookmarks.propTypes = {

    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}


export default Bookmarks;