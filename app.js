const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const keys = require('./config/keys')
const usersRouters = require('./routes/blog-users')

const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRouters)


mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('mongoDB conectado.'))
    .catch(err => console.log(err))


app.listen(5000, () => console.log('server rodando na porta 5000'))