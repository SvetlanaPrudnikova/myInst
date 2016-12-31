import React, { PropTypes } from 'react';
import {Button} from 'react-bootstrap';

function Like(props) {

    const { photo, increase, decrease } = props;
    return (
        <div>
            <Button bsSize = 'xsmall' bsStyle = 'link' className = 'likeChange' onClick = { decrease(photo.id) }> &ndash; </Button>
            <span> { photo.likes }</span>
            <Button bsSize='xsmall' bsStyle = 'link' className = 'likeChange' onClick = { increase(photo.id) }> &#43; </Button>
        </div>
    )
}

Like.propTypes = {
    photo: PropTypes.object.isRequired,
    increase: PropTypes.func,
    decrease: PropTypes.func
}

export default Like;
