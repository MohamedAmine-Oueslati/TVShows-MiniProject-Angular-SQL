const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;
// const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');

app.listen(PORT, () => {
    console.log('App is listetning on PORT', PORT);
});