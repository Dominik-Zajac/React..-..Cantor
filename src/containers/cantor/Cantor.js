import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import './Cantor.css';

class Cantor extends Component {
    state = {}
    render() {
        return (
            <div className='cantor_container'>
                <Header userName={this.props.userName} handleLogOut={this.props.handleLogOut} />
            </div>
        );
    }
}

export default Cantor;