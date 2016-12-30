import React, {Component} from 'react';
import LoginForm from './LoginForm';
import store from '../store';
import { Provider } from 'react-redux';
import PhotosList from './PhotosList'

class Container extends Component {

    render() {
        return (
            <Provider store = {store}>
                <div>
                {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Container;
