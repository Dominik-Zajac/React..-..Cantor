import React, { Component } from 'react';
import Websocket from 'react-websocket';
import Header from '../../components/Header/Header';
import Currencies from '../../components/Currencies/Currencies';
import Wallet from '../../components/Wallet/Wallet';
import './Cantor.css';

class Cantor extends Component {
    state = {
        currencies: ''
    }

    handleData(data) {
        let result = JSON.parse(data);
        result.Items.forEach(item => {
            this.setState({
                currencies: [...this.state.currencies, item]
            })
        });
    };

    render() {
        return (
            <div className='cantor_container'>
                <Websocket url='ws://webtask.future-processing.com:8068/ws/currencies'
                    onMessage={this.handleData.bind(this)} />
                <Header
                    userName={this.props.userName}
                    handleLogOut={this.props.handleLogOut}
                />
                <div>
                    <Currencies />
                    <Wallet />
                </div>
            </div>
        );
    }
}

export default Cantor;