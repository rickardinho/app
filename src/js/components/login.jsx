import React from 'react';

class Login extends React.Component {

    constructor(props) {

        super(props);
    }

    componentWillMount () {

        if (document.cookie.indexOf("sparkToken") !== -1) {

            this.context.router.push('/feed');
            return false;
        }
    }

    render () {

        return (
            <div>
                <h1>This is the Login Container</h1>
                <button onClick={ (e) => this.props.login() }>
                    LOGIN
                </button>
                <a href="/bell/door" >Sohil  </a>
            </div>
        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default Login;
