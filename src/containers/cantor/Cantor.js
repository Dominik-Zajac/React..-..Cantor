import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Currencies from '../../components/Currencies/Currencies';
import Wallet from '../../components/Wallet/Wallet';
import './Cantor.css';

class Cantor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: []
        }
    }

    componentDidMount() {
        const connect = new WebSocket('ws://webtask.future-processing.com:8068/ws/currencies');

        connect.onmessage = (e) => {
            const jsonData = JSON.parse(e.data);
            const data = jsonData;

            this.setState({
                currencies: data.Items
            });
        };
    };

    handleBuyCurrency = (currency) => {
        console.log(currency)
    };

    handleSellCurrency = (currency) => {
        console.log(currency)
    };

    render() {
        return (
            <div className='cantor_container'>
                <Header
                    userName={this.props.userName}
                    handleLogOut={this.props.handleLogOut}
                />
                <div className='information_box'>
                    <Currencies
                        currencies={this.state.currencies}
                        buyCurrency={this.handleBuyCurrency}
                    />
                    <Wallet
                        amountMoney={this.props.amountMoney}
                        currencies={this.state.currencies}
                        sellCurrency={this.handleSellCurrency}
                    />
                </div>
            </div>
        );
    }
}

export default Cantor;