import React, {Component} from 'react';
import {Button, FormControl} from 'react-bootstrap';

export default class Like extends Component {

    constructor() {
        super();

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
        const {photo} = this.props;
        return (
            <div>
                <Button bsSize = 'xsmall' onClick = { this.increaseLikes (photo.id) } >-</Button>
                <span> {photo.likes} </span>
                <Button bsSize = 'xsmall' onClick = { this.decreaseLikes(photo.id) } >+</Button>
            </div>
        )
    }
}