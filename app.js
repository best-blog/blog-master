const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => res.json({ok: 'status ok'}))

app.listen(5000, () => console.log('server rodando na porta 5000'))