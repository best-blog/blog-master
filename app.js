const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const keys = require('./config/keys')
const HttpError = require('./model/http-error')
const usersRouters = require('./routes/blog-users')

const app = express();

app.use(bodyParser.json());

app.use('/api/users', usersRouters)

app.use((req, res, next) => {
    const error = new HttpError('Rota invalida', 404)
    return next(error)
})


mongoose
    .connect(keys.mongoURI)
    .then(() => console.log('mongoDB conectado.'))
    .catch(err => console.log(err))


app.listen(5000, () => console.log('server rodando na porta 5000'))