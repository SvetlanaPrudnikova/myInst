import React, {Component} from 'react';
import store from '../store';
import { Provider } from 'react-redux';


class Container extends Component {

    render() {
        return (
            <Provider store = {store} >
                <div>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Container;
