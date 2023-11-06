const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
var path = require('path');
const Router  = require('./routes/routes');

const app = express();
const PORT = 3000;

app.use(cors())

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(Router);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));