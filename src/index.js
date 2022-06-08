const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/home-page-route');
const router2 = require('./routes/second-page-route');
const router3 = require('./routes/third-page-route');

const app = express();

require('dotenv/config');

app.set('view engine', 'ejs');
app.use(bodyParser.json());

app.use('/', router);
app.use('/', router2);
app.use('/', router3);
app.use(express.static(`${__dirname}/public`));

app.listen(8000);
