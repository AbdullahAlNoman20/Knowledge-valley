
import { BsBookmarkPlus } from "react-icons/bs";
import PropTypes from 'prop-types';


const Blog = ({blog, handleAddToBookmark}) => {

    const {title,cover,author, author_img, reading_time,posted_date, hashtags} = blog;


    return (
        <div className='border-2 m-5 p-5 rounded-lg lg:px-10'>
            <img className='w-full rounded-3xl' src={cover} alt="" />

                <div className="flex justify-between items-center">
                    <div className=" flex items-center gap-5 mt-5">
                        <img className='w-14' src={author_img} alt={`${title}`} />
                        <div className="">
                            <h4>{author}</h4>
                            <p>{posted_date}</p>

                        </div>
                    </div>
                    <div className="">
                        <p>
                            <span>{reading_time}</span> min read  
                            <button onClick={handleAddToBookmark} className="ml-3"> <BsBookmarkPlus></BsBookmarkPlus></button>
                        </p>
                    </div>
                </div>


                <h1 className='text-3xl font-bold'>{title}</h1>

                <p>
                    {
                        hashtags.map((hash,idx) => <span key={idx}><a href=""> #{hash}</a></span>)
                    }
                </p>

                <button className='btn btn-link '>M</button>

        </div>
    );
};

Blog.propTypes = {

    blog: PropTypes.object.isRequired
}


export default Blog;