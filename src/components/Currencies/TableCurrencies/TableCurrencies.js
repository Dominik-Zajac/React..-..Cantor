import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/*
    ~~Styles~~
*/
const Table = styled.table`
    border-collapse: collapse;
`;

const ColumnHead = styled.th`
    padding: 1em;
    text-align: center;
    border: 1px solid #000;
    background-color: #44bd32;
`;

const Row = styled.tr`
    &:hover {
        background-color: rgba(68, 189, 50, 0.1);
    }
`;

const Column = styled.td`
    padding: 1em;
    text-align: center;
    border: 1px solid #000;
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

const TableCurrencies = ({ currencies, buyCurrency }) => {

    //Mapping the array to individual elements
    const arrayCurrencies = currencies.map((currency, index) => (
        <Row key={index}>
            <Column>{currency.Code}</Column>
            <Column>{currency.Unit}</Column>
            <Column>{currency.PurchasePrice.toFixed(2)}</Column>
            <Column>
                <BuyBtn onClick={() => buyCurrency(`${currency.Code}`)}>Buy</BuyBtn >
            </Column>
        </Row>
    ));

    return (
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
    );
};

TableCurrencies.propTypes = {
    currencies: PropTypes.array,
};

export default TableCurrencies;