import React, {Component} from 'react';
import {Button, FormControl} from 'react-bootstrap';

export default class Like extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    increase = () => this.setState ({
            count: this.state.count + 1
        });

    decrease = () => this.setState ({
        count: this.state.count - 1
    });

    render() {

        return (
            <div>
                <Button bsSize = 'xsmall' onClick = { this.decrease } >-</Button>
                <span> {this.state.count} </span>
                <Button bsSize = 'xsmall' onClick = { this.increase } >+</Button>
            </div>
        )
    }
}