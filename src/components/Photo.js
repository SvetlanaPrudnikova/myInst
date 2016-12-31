import React, {PropTypes} from 'react';

function Photo(props) {

    const {photo} = props;
    if (!photo) return null;

    return (
        <div className='onePhotoContainer'>
            <h3> { photo.title } </h3>
            <span> { photo.year } год </span>
            <img src = { photo.src }/>
        </div>
    )

}

Photo.propTypes = {
    photo: PropTypes.object
};

export default Photo;

