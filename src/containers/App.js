import React, { Component } from 'react';

import Login from '../components/Login/Login';
import Cantor from './cantor/Cantor';

class App extends Component {
    state = {
        // login: false,
        // loginName: '',
        amountMoney: '',
        login: true,
        loginName: 'Dominik'
    };

    handleLoginTrue = () => {
        const { login, loginName, amountMoney } = this.state;
        const regex = /[0-9]/g;
        const verificationName = regex.exec(loginName);

        if (!verificationName) {
            if (loginName.length >= 4 && amountMoney < 100000) {
                this.setState({
                    login: !login
                });
            } else if (amountMoney > 100000) {
                alert('The number is too big (max:100000)!');
            }
            else {
                alert('The name is too short!');
            }
        } else {
            alert('In name cannot be numbers!');
        }
    };

    handleChangeInput = event => {
        const name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    };

    handleLogOut = () => {
        this.setState({
            login: !this.state.login
        });
    };

    render() {
        const { login, loginName, amountMoney } = this.state;
        const loginData = login;

        return (
            loginData ?
                <Cantor
                    userName={loginName}
                    amountMoney={amountMoney}
                    handleLogOut={this.handleLogOut}
                />
                :
                <Login
                    loginName={loginName}
                    amountMoney={amountMoney}
                    handleButton={this.handleLoginTrue}
                    handleInput={this.handleChangeInput}
                />
        );
    };
};

export default App;
