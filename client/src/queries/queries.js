import { gql } from 'apollo-boost';

const getWalletQuery = gql`
    {
        wallets {
            id
            name
            valueUSD
            valueEUR
            valueCHF
            valueRUB
            valueCZK
            valueGBP
            amountMoney
        }
    }
`

const getUserQuery = gql`
    {
        wallets {
            id
            name
            valueUSD
            valueEUR
            valueCHF
            valueRUB
            valueCZK
            valueGBP
            amountMoney
        }
    }
`

const addUserMutation = gql`
    mutation($name: String!, $valueUSD: Int!, $valueEUR: Int!, $valueCHF: Int!, $valueRUB: Int!, $valueCZK: Int!, $valueGBP: Int!, $amountMoney: Int!){
        addUser( name: $name, valueUSD: $valueUSD, valueEUR: $valueEUR, valueCHF: $valueCHF, valueRUB: $valueRUB, valueCZK: $valueCZK, valueGBP: $valueGBP, amountMoney: $amountMoney) {
            id
            name

        }
    }
`;

export { getWalletQuery, getUserQuery, addUserMutation };