const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const Router  = require('./routes/routes');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(Router);
app.get('/', (req,res) => {
    return res.send("hello World");
})

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));