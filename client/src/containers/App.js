import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

/* Components */
import Login from './Login/Login';
import Cantor from './Cantor/Cantor';

/* Apollo client */
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
    state = {
        login: false,
        loginName: '',
        // login: true,
        // loginName: 'Dominik'
    };

    handleLoginTrue = (name) => {
        const { login } = this.state;
        // const regex = /[0-9]/g;
        // const verificationName = regex.exec(loginName);

        this.setState({
            login: !login,
            loginName: name
        });
        //     if (!verificationName) {
        //         if (loginName.length >= 4) {
        //             this.setState({
        //                 login: !login,
        //                 loginName: name

        //             });
        //         } else {
        //             alert('The name is too short!');
        //         }
        //     } else {
        //         alert('In name cannot be numbers!');
        //     }
    };

    // handleChangeInput = event => {
    //     const name = event.target.name;

    //     this.setState({
    //         [name]: event.target.value
    //     });
    // };

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
                <ApolloProvider client={client}>
                    <Cantor
                        userName={loginName}
                        amountMoney={amountMoney}
                        handleLogOut={this.handleLogOut}
                    />
                </ApolloProvider>
                :
                <ApolloProvider client={client}>

                    <Login
                        handleLogin={this.handleLoginTrue}
                    />
                </ApolloProvider>

        );
    };
};

export default App;
