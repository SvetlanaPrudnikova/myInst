import React, {Component} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';

export default class Like extends Component {

    constructor() {
        super();
    }

    render() {
        const {photo, increase, decrease} = this.props;
        return (
            <div>
                <Button bsSize = 'xsmall' onClick = { decrease (photo.id) }>-</Button>
                <span> {photo.likes}</span>
                <Button bsSize = 'xsmall' onClick = { increase (photo.id) } >+</Button>
            </div>
        )
    }
}
