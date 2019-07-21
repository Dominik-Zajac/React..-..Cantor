const graphql = require('graphql');
const _ = require('lodash');
const Wallet = require('../models/wallet');

const {
    GraphQLID,
    GraphQLInt,
    GraphQLSchema,
    GraphQLString,
    GraphQLList,
    GraphQLObjectType,
} = graphql;

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
                return Wallet.findById(args.id);
            }
        },
        wallets: {
            type: new GraphQLList(UserWallet),
            resolve(parent, args) {
                return Wallet.find({})
            }
        }
    }
});

const NewUser = new GraphQLObjectType({
    name: 'NewUser',
    fields: {
        addUser: {
            type: UserWallet,
            args: {
                name: { type: GraphQLString },
                valueUSD: { type: GraphQLInt },
                valueEUR: { type: GraphQLInt },
                valueCHF: { type: GraphQLInt },
                valueRUB: { type: GraphQLInt },
                valueCZK: { type: GraphQLInt },
                valueGBP: { type: GraphQLInt },
                amountMoney: { type: GraphQLInt }
            },
            resolve(parent, args) {
                let user = new Wallet({
                    name: args.name,
                    valueUSD: args.valueUSD,
                    valueEUR: args.valueEUR,
                    valueCHF: args.valueCHF,
                    valueRUB: args.valueRUB,
                    valueCZK: args.valueCZK,
                    valueGBP: args.valueGBP,
                    amountMoney: args.amountMoney
                });
                return user.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: NewUser
});