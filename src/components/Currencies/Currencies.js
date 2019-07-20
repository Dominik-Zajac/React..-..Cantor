import React from 'react';
import styled from 'styled-components';

/* Components */
import PublicationDate from './PublicationDate/PublicationDate';

/*
    ~~Styles~~
*/
const Container = styled.div`
    margin: 1% 0;
`;

const Table = styled.table`
    border-collapse: collapse;
`;

const ColumnHead = styled.th`
    border: 1px solid #000;
    padding: 1em;
    text-align: center;
    background-color: #44bd32;
`;

const Row = styled.tr`
    &:hover {
        background-color: rgba(68, 189, 50, 0.1);
    }
`;

const Column = styled.td`
    border: 1px solid #000;
    padding: 1em;
    text-align: center;
`;

const BuyBtn = styled.button`
    min-width: 80px;
    padding: 0.25em 1em;  
    font-size: 1em;
    cursor: pointer;
    color: #40739e;
    background-color: inherit;
    border: 2px solid #40739e;
    border-radius: 3px;
`;

/* ------------------------------- */

const Currencies = (props) => {
    const arrayCurrencies = props.currencies.map((currency, index) => (
        <Row key={index}>
            <Column>{currency.Code}</Column>
            <Column>{currency.Unit}</Column>
            <Column>{currency.PurchasePrice.toFixed(2)}</Column>
            <Column>
                <BuyBtn onClick={() => props.buyCurrency(`${currency.Code}`)}>Buy</BuyBtn >
            </Column>
        </Row>
    ));

    if (props.currencies[0] !== undefined) {
        return (
            <Container>
                <h2>Currencies</h2>
                <Table>
                    <thead>
                        <tr>
                            <ColumnHead>Currency</ColumnHead>
                            <ColumnHead>Unit</ColumnHead>
                            <ColumnHead>Value</ColumnHead>
                            <ColumnHead>Actions</ColumnHead>
                        </tr>
                    </thead>
                    <tbody>
                        {arrayCurrencies}
                    </tbody>
                </Table>
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