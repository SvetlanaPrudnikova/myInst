import React, {Component, PropTypes} from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {loadAllPhotos} from '../AC/loadPhotos';
import {connect} from 'react-redux';
import Loader from './Loader';


class LoginForm extends Component {
    static propTypes = {
        loaded: PropTypes.bool,
        loading: PropTypes.bool,
        loadAllPhotos: PropTypes.func,
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
        const { loading } = this.props;

        if (loading) return <Loader />;

        return (
            <div>
                <form onSubmit = {this.handleSubmit} className = 'loginForm'>
                    <h3>Логи</h3>
                    <FormControl
                        type='text'
                        value = { this.state.login }
                        placeholder = 'Enter login'
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

            </div>
        )
    }
}

export default connect( state => {
    const { photos } = state;
    return {
        loading: photos.get('loading'),
        loaded: photos.get('loaded')
    }
}, { loadAllPhotos } ) (LoginForm)


