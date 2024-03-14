
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title} = bookmark
    return (
        <div className='m-3 p-2 bg-gray-100 rounded-lg'>
            <h1 className='font-bold'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {

    bookmark:PropTypes.object
}

export default Bookmark;