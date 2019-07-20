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

const Currencies = (props) => {
    if (props.currencies[0] !== undefined) {
        return (
            <Container>
                <h2>Currencies</h2>
                <TableCurrencies currencies={props.currencies} buyCurrency={props.buyCurrency} />
                <PublicationDate date={props.publicationDate} />
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