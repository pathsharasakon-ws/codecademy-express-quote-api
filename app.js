const express = require('express');
const cors = require('cors');
const app = express();

const quotesRouter = require('./routes/quotes');
const biosRouter = require('./routes/bios');


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/quotes', quotesRouter);
app.use('/api/bios', biosRouter);

// export app for use in main.js and for testing
module.exports = {
  app
};

