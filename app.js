const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(config.port, () => {
  console.log(`Server jalan di http://localhost:${config.port}`);
});