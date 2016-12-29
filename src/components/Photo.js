import React, { Component, PropTypes } from 'react';
import Like from './Like';

export default class Photo extends Component {
    static propTypes = {
        photo: PropTypes.object,
    }

    render() {
        const {photo} = this.props;
        if (!photo) return null;

        return (
            <div className='onePhotoContainer'>
                <h3> { photo.title } </h3>
                <span> { photo.year } год </span>
                <img src={ photo.src }/>
                <Like />
            </div>
        )
    }
}

