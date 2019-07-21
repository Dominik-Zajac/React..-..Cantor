const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://dominik:pvn4gj@ds351807.mlab.com:51807/cantor');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql', cors(), graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
});