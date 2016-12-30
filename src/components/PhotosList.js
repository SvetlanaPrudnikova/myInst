import React, {Component, PropTypes} from 'react';
import Photo from './Photo';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import Like from './Like';


//import { Link } from 'react-router';


class PhotosList extends Component {
    static propTypes = {
        photos: PropTypes.array
    };

    render() {
        const {photos} = this.props;

        const photosComp = photos.map(photo => (
            <Col xs = {12} sm = {6} md = {4} key={photo.id}>
                <li>
                    <Photo photo = { photo }/>
                    <Like photo = { photo } />
                </li>
            </Col>))

        return (
            <Grid>
                <Row className="show-grid">
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
        photos: photos.get('entities').valueSeq().toArray(),
    }
} )(PhotosList)
