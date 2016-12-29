import React, { Component, PropTypes } from 'react';
import Like from './Like';
import {connect} from 'react-redux';

 class Photo extends Component {
    static propTypes = {
        photo: PropTypes.object,
    }

    increaseLikes = (id) => {
        const { increase } = this.props;
        increase (id);
    };

    decreaseLikes = (id) => {
        const { decrease } = this.props;
        decrease (id);
    };

    render() {
        const {photo, increase, decrease} = this.props;
        if (!photo) return null;

        return (
            <div className = 'onePhotoContainer'>
                <h3> { photo.title } </h3>
                <span> { photo.year } год </span>
                <img src = { photo.src }/>
                <Like photo = { photo } increase = { this.decreaseLikes } decrease = {this.increaseLikes}/>
            </div>
        )
    }
}

export default connect(state => {
    const {photos} = state;
    return {
        photos: photos,
    }
}, {increase, decrease}, null, {pure: false})(Photo)

