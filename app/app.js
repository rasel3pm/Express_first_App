const express = require('express');
const middleware = require('./middelware');
const app = express();


app.use(middleware);
app.use(require('./router'))



module.exports = app