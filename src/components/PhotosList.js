import React, {Component, PropTypes} from 'react';
import Photo from './Photo';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import Like from './Like';
import {increaseLikes, decreaseLikes} from '../AC/photos';

class PhotosList extends Component {
    static propTypes = {
        photos: PropTypes.object
    };

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
        const {photos} = this.props;
        const photosArr = photos.valueSeq().toArray();
        const photosComp = photosArr.map(photo => (
            <Col xs = {12} sm = {6} md = {4} key={photo.id}>
                <li>
                    <Photo photo = { photo }/>
                    <Like photo = { photo } increase = {this.increase} decrease = {this.decrease} />
                </li>
            </Col>))

        return (
            <Grid>
                <Row className = 'show-grid'>
                    <ul className='photosContainer'>
                        {photosComp}
                    </ul>
                </Row>
            </Grid>
        )
    }
}

export default connect(state => {
    const {photos} = state;
    return {
        photos: photos.get('entities')
    }
}, {increaseLikes, decreaseLikes} )(PhotosList)
