import React, {Component, PropTypes} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {loadAllPhotos} from '../AC/loadPhotos';
import {connect} from 'react-redux';
import Loader from './Loader';
import PhotosList from './PhotosList';

class LoginForm extends Component {
    static propTypes = {
        loaded: PropTypes.bool,
        loading: PropTypes.bool,
        photos: PropTypes.object,
        loadAllPhotos: PropTypes.func
     };

    state = {
        login: '',
        password: ''
    };

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    });

    handleSubmit = ev => {
        ev.preventDefault();
        const {loadAllPhotos} = this.props;
        loadAllPhotos(this.state);

        this.setState({
            login: '',
            password: ''
        })
    };

    render() {
        const { loaded, photos, loading} = this.props;
        const body = loaded ? <PhotosList photos = { photos }/>: null;

        if (loading) return <Loader />

        return (
            <div>
                <form onSubmit = {this.handleSubmit} className = 'loginForm'>
                    <h3>Логин</h3>
                    <FormControl
                        type='text'
                        value = { this.state.login }
                        placeholder='Enter login'
                        onChange = {this.handleChange('login')}
                    />

                    <h3>Пароль</h3>
                    <FormControl
                        type='text'
                        value={ this.state.password }
                        placeholder = 'Enter password'
                        onChange = {this.handleChange('password')}
                    />

                    <Button onClick = { this.handleSubmit } bsStyle='primary' className='enterButton'> Войти </Button>
                </form>

                {body}

            </div>
        )
    }
}

export default connect(state => {
    const {photos} = state;
    return {
        photos: photos.get('entities'),
        loading: photos.get('loading'),
        loaded: photos.get('loaded')
    }
}, { loadAllPhotos } ) (LoginForm)


