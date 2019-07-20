const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLObjectType,
} = graphql;

var users = [
    {
        id: '1',
        name: 'Dominik',
        valueUSD: 10,
        valueEUR: 20,
        valueCHF: 100,
        valueRUB: 50,
        valueCZK: 0,
        valueGBP: 60,
        amountMoney: 1500,
    },
];

const UserWallet = new GraphQLObjectType({
    name: 'Wallet',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        valueUSD: { type: GraphQLInt },
        valueEUR: { type: GraphQLInt },
        valueCHF: { type: GraphQLInt },
        valueRUB: { type: GraphQLInt },
        valueCZK: { type: GraphQLInt },
        valueGBP: { type: GraphQLInt },
        amountMoney: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        wallet: {
            type: UserWallet,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});