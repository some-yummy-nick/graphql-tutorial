const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');

const {MONGODB} = require("../config");

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose.connect(MONGODB, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false })
    .then(() => app.listen({port: 5005}));


