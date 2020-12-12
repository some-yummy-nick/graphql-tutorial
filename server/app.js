require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require("cors");

const MONGODB_LOGIN = process.env.MONGODB_LOGIN;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const url = `mongodb+srv://${MONGODB_LOGIN}:${MONGODB_PASSWORD}@cluster0.qgfv4.mongodb.net/graphql-tutorial?retryWrites=true&w=majority`;
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen({port: 5005}));


