import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
    ~~Styles~~
*/
const Hours = styled.span`
float: right;
`;

const Date = styled.span`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
/* ------------------------------- */

const PublicationDate = ({ date }) => {

    //Cutting from the downloaded date
    const actualDate = date.slice(0, 10);
    const actualHours = date.slice(11, 19);

    return (
        <>
            <h2>Publication date:
                <Hours>{actualHours}</Hours>
                <Date>{actualDate}</Date>
            </h2>
        </>
    );
};

PublicationDate.propTypes = {
    date: PropTypes.string,
};

export default PublicationDate;