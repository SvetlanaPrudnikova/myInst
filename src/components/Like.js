import React, {Component} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {increaseLikes, decreaseLikes} from '../AC/photos';
import {connect} from 'react-redux';

class Like extends Component {

    constructor() {
        super();
    }

    increase = id => ev => {
        ev.preventDefault();
        const { increaseLikes } = this.props;
        increaseLikes(id)
    };

    decrease = id => ev => {
        ev.preventDefault();
        const { decreaseLikes } = this.props;
        decreaseLikes(id)
    };

    render() {
        const {photo} = this.props;
        return (
            <div>
                <Button bsSize = 'xsmall' onClick = { this.decrease (photo.id) }>-</Button>
                <span> {photo.likes} +1</span>
                <Button bsSize = 'xsmall' onClick = { this.increase (photo.id) } >+</Button>
            </div>
        )
    }
}

export default connect(null, {increaseLikes, decreaseLikes} )(Like)