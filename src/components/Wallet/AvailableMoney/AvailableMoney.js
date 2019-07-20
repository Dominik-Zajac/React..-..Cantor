import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
    ~~Styles~~
*/
const NumberMoney = styled.span`
    margin-left: 5%;
`;
/* ------------------------------- */

const AvailableMoney = ({ amountMoney }) => {
    return (
        <>
            <h2>Available PLN:
                <NumberMoney>{amountMoney < 1 ? `Lack of money!` : amountMoney}</NumberMoney>
            </h2>
        </>
    );
};

AvailableMoney.propTypes = {
    amountMoney: PropTypes.string,
};

export default AvailableMoney;