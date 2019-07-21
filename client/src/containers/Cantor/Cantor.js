import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWalletQuery } from '../../queries/queries';
import './Cantor.css';

/* Components */
import Header from '../../components/Header/Header';
import Currencies from '../../components/Currencies/Currencies';
import Wallet from '../../components/Wallet/Wallet';

class Cantor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: [],
            publicationDate: ''
        };
    };

    componentDidMount() {
        const connect = new WebSocket('ws://webtask.future-processing.com:8068/ws/currencies');

        connect.onmessage = (e) => {
            const jsonData = JSON.parse(e.data);
            const data = jsonData;

            this.setState({
                currencies: data.Items,
                publicationDate: data.PublicationDate,
            });
        };
    };

    handleBuyCurrency = (currency) => {
        alert(currency);
    };

    handleSellCurrency = (currency) => {
        alert(currency);
    };

    render() {

        const { userName, handleLogOut } = this.props;
        const { currencies, publicationDate } = this.state;

        return (
            <div className='cantor_container'>
                <Header
                    userName={userName}
                    handleLogOut={handleLogOut}
                />
                <div className='information_box'>
                    <Currencies
                        currencies={currencies}
                        publicationDate={publicationDate}
                        buyCurrency={this.handleBuyCurrency}
                    />
                    <Wallet
                        currencies={currencies}
                        currenciesDB={this.props.data.loading ? 'Loading...' : this.props.data.wallets}
                        amountMoney={this.props.data.loading ? 'Loading...' : this.props.data.wallets[0].amountMoney}
                        sellCurrency={this.handleSellCurrency}
                    />
                </div>
            </div>
        );
    };
};

export default graphql(getWalletQuery)(Cantor);