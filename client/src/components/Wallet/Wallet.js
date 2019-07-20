import React from 'react';
import styled from 'styled-components';

/* Components */
import TableWallet from './TableWallet/TableWallet';
import AvailableMoney from './AvailableMoney/AvailableMoney';

/*
    ~~Styles~~
*/
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1% 0;
`;
/* ------------------------------- */

const Wallet = ({ currencies, amountMoney, sellCurrency }) => {

    //Checking if the data has been downloaded
    if (currencies[0] !== undefined) {
        return (
            <Container>
                <h2>My Wallet</h2>
                <TableWallet
                    currencies={currencies}
                    sellCurrency={sellCurrency}
                />
                <AvailableMoney amountMoney={amountMoney} />
            </Container>
        );
    } else {
        return (
            //Downloading data
            <>
                <h1>Pobieranie danych...</h1>
            </>
        );
    };
};

export default Wallet;