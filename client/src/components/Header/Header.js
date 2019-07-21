import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

/*
    ~~Styles~~
*/
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1%;
    padding: 0 2%;
    border: 1px solid #000;
`;

const Title = styled.h2`
    color: #44bd32;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 200px;
`;
/* ------------------------------- */

const Header = (props) => {
    return (
        <Container>
            <Title>Exchange</Title>
            <Row>
                <span>Logged in as {props.userName}</span>
                <FontAwesomeIcon
                    className='icon'
                    icon={faCog}
                />
                <FontAwesomeIcon
                    className='icon'
                    icon={faPowerOff}
                    onClick={() => props.handleLogOut()}
                />
            </Row>
        </Container>
    );
};

export default Header;