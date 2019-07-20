const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var users = [
    {
        id: '1',
        name: 'Dominik',
        valueUSD: '10',
        valueEUR: '20',
        valueCHF: '100',
        valueRUB: '50',
        valueCZK: '0',
        valueGBP: '60'
    },
];

const UserWallet = new GraphQLObjectType({
    name: 'Wallet',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        valueUSD: { type: GraphQLString },
        valueEUR: { type: GraphQLString },
        valueCHF: { type: GraphQLString },
        valueRUB: { type: GraphQLString },
        valueCZK: { type: GraphQLString },
        valueGBP: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        wallet: {
            type: UserWallet,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});