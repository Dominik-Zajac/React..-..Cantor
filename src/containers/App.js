import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Cantor from './cantor/Cantor';

class App extends Component {
    state = {
        login: false,
        loginName: '',
    }

    handleLoginTrue = () => {
        const regex = /[0-9]/g;
        const verificationName = regex.exec(this.state.loginName);

        if (!verificationName) {
            if (this.state.loginName.length >= 4) {
                this.setState({
                    login: !this.state.login
                });
            } else {
                alert('The name is too short!');
            }
        } else {
            alert('It can not be numbers!');
        }
    };

    handleChangeInput = event => {
        this.setState({
            loginName: event.target.value
        });
    };

    render() {
        const { login, loginName } = this.state;
        const loginData = login;

        return (
            loginData ?
                <Cantor />
                :
                <Login
                    loginName={loginName}
                    handleButton={this.handleLoginTrue}
                    handleInput={this.handleChangeInput}
                />
        );
    };
};

export default App;
