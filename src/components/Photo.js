import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

export default class Photo extends Component {
    static propTypes = {
        photo: PropTypes.object,
    }

    render() {
        if (!photo) return null;
        const { photo } = this.props;

        return (
            <div className = 'onePhotoContainer'>
                <h3> { photo.get('title') } + 3</h3>
                <span> { photo.get('year') } год 4 </span>
                <img src = { photo.get('src') }/>
            </div>
        )
    }
}

