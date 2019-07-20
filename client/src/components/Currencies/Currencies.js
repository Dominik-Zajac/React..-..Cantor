import React from 'react';
import styled from 'styled-components';

/* Components */
import TableCurrencies from './TableCurrencies/TableCurrencies';
import PublicationDate from './PublicationDate/PublicationDate';

/*
    ~~Styles~~
*/
const Container = styled.div`
    margin: 1% 0;
`;
/* ------------------------------- */

const Currencies = ({ currencies, buyCurrency, publicationDate }) => {

    //Checking if the data has been downloaded
    if (currencies[0] !== undefined) {
        return (
            <Container>
                <h2>Currencies</h2>
                <TableCurrencies
                    currencies={currencies}
                    buyCurrency={buyCurrency}
                />
                <PublicationDate date={publicationDate} />
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

export default Currencies;