import React, { Component } from 'react';
import Websocket from 'react-websocket';
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

    render() {
        return (
            <div className='cantor_container'>
                <Header
                    userName={this.props.userName}
                    handleLogOut={this.props.handleLogOut}
                />
                <div>
                    <Currencies currencies={this.state.currencies} />
                    <Wallet />
                </div>
            </div>
        );
    }
}

export default Cantor;