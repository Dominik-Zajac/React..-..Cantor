import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import './Cantor.css';

/* Components */
import Header from '../../components/Header/Header';
import Currencies from '../../components/Currencies/Currencies';
import Wallet from '../../components/Wallet/Wallet';

const getWalletQuery = gql`
    {
        wallets {
            id
            name
            valueUSD
            valueEUR
            valueCHF
            valueRUB
            valueCZK
            valueGBP
            amountMoney
        }
    }
`

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
        console.log(currency)
    };

    handleSellCurrency = (currency) => {
        console.log(currency)
    };

    render() {
        console.log(this.props)
        const { userName, handleLogOut, amountMoney } = this.props;
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
                        amountMoney={amountMoney}
                        sellCurrency={this.handleSellCurrency}
                    />
                </div>
            </div>
        );
    };
};

export default graphql(getWalletQuery)(Cantor);