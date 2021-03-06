import React from 'react';
import { hashHistory } from 'react-router';
import validCookieExists from '../lib/validCookieExists.js';
import Banner from './general/banner.jsx';

class Login extends React.Component {

    constructor (props) {

        super(props);
    }

    componentWillMount () {

        if (validCookieExists()) {

            hashHistory.push('/feed');
            return false;
        }
    }

    render () {

        return (
            <div>

                <div className="container login">
                    <div className="row">

                        <img className="twelve columns" src="https://cloud.githubusercontent.com/assets/2305591/16362624/f05404f6-3bab-11e6-8b3a-0844c9b98589.png"/>
                    </div>

                    <div className="row">
                        <h4 className="text-snippet">
                            The easy way to organise parties, events, share pictures and memories with friends, family and groups.
                        </h4>
                    </div>

                    <div className="row">
                        <button className="twelve columns facebook" onClick={ (e) => this.props.login() }>
                            Login with Facebook
                        </button>
                    </div>

                    <div className="row save-to-homescreen">
                        <h5>
                            Save the web-app to homescreen for the best experience
                        </h5>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;
