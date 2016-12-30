import React, {Component, PropTypes} from 'react';
import Photo from './Photo';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-bootstrap';
import Like from './Like';
import { increase } from '../AC/likes';
import { decrease } from '../AC/likes';

//import { Link } from 'react-router';


class PhotosList extends Component {
    static propTypes = {
        photos: PropTypes.object.isRequired
    };


    render() {
        const { photos, decrease, increase } = this.props;
        const photosArr = photos.valueSeq().toArray();

        const photosComp = photosArr.map(photo => (
            <Col xs = {12} sm = {6} md = {4} key={photo.id}>
                <li>
                    <Photo photo = { photo }/>
                    <Like photo = { photo } increase = { increase } decrease = {decrease}/>
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

export default connect( null , {increase, decrease} )(PhotosList)

