import React from 'react';
import styled from 'styled-components';

/*
    ~~Styles~~
*/
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const Title = styled.h1`
    color: #44bd32;
`;

const Input = styled.input`
    padding: 0.5em 0.6em;
    margin: 5px 1px 3px 0;
    outline: none;
    border: 1px solid #dddddd;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    &:focus {
        box-shadow: 0 0 5px rgba(68, 189, 50,1.0);
        border: 1px solid rgba(68, 189, 50,1.0);
    }
`;

const Button = styled.button`
    margin: 1em;
    padding: 0.25em 1em;  
    font-size: 1em;
    cursor: pointer;
    color: #40739e;
    background-color: inherit;
    border: 2px solid #40739e;
    border-radius: 3px;
`;

/* ------------------------------- */

const Login = ({ handleButton, handleInput, loginName, amountMoney }) => {
    return (
        <Wrapper>
            <Title>Login panel</Title>
            <Input
                type='text'
                name='loginName'
                value={loginName}
                onChange={handleInput}
                minLength='3'
                maxLength='7'
                placeholder='Please enter name...'
            />
            <Input
                type='number'
                name='amountMoney'
                value={amountMoney}
                onChange={handleInput}
                placeholder='Please enter money...'
            />
            <Button onClick={() => handleButton()} type='submit'>Log in</Button>
        </Wrapper>
    );
};

export default Login;