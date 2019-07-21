import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql, compose } from 'react-apollo';
import { getUserQuery, addUserMutation } from '../../queries/queries';

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

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Label = styled.label`
`;

const Input = styled.input`
    padding: 0.5em 0.6em;
    margin: 10px 1px 3px 10px;
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            valueUSD: 0,
            valueEUR: 0,
            valueCHF: 0,
            valueRUB: 0,
            valueCZK: 0,
            valueGBP: 0,
            amountMoney: 0
        };
    };

    submitForm(e) {
        e.preventDefault();

        this.props.addUserMutation({
            variables: {
                name: this.state.name,
                valueUSD: this.state.valueUSD,
                valueEUR: this.state.valueEUR,
                valueCHF: this.state.valueCHF,
                valueRUB: this.state.valueRUB,
                valueCZK: this.state.valueCZK,
                valueGBP: this.state.valueGBP,
                amountMoney: this.state.amountMoney
            }
        });
    };

    render() {
        const currenciesValue = ['valueUSD', 'valueEUR', 'valueCHF', 'valueRUB', 'valueCZK', 'valueGBP'];

        //Created number inputs
        const inputs = currenciesValue.map((input, index) => (
            <label>{input}
                <Input
                    type='number'
                    onChange={(e) => this.setState({ input: e.target.value * 1 })}
                    placeholder='Please enter number...'
                />
            </label>
        ));

        return (
            <Wrapper>
                <Title>Login panel</Title>
                <Form onSubmit={this.submitForm.bind(this)}>
                    <Label>nameUser
                    <Input
                            type='text'
                            onChange={(e) => this.setState({ name: e.target.value })}
                            maxLength='7'
                            placeholder='Please enter name...'
                        />
                    </Label>
                    {inputs}
                    <Button onClick={() => this.props.handleLogin(this.state.name)} type='submit'>Log in</Button>
                </Form>
            </Wrapper>
        );
    };
};

export default compose(
    graphql(getUserQuery, { name: 'getUserQuery' }),
    graphql(addUserMutation, { name: 'addUserMutation' })
)(Login);