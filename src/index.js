const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/first_route');
const router2 = require('./router/second_route');

const app = express();

require('dotenv/config');

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/', router);
app.use('/', router2);
app.use(express.static(`${__dirname}/public`));

app.listen(8000);
