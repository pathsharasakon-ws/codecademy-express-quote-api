const express = require('express');
const quotesRouter = express.Router();
const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

quotesRouter.get('/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

quotesRouter.get('/', (req, res) => {
  if (req.query.person) {
    const personQuotes = quotes.filter(quote => quote.person === req.query.person);
    res.send({ quotes: personQuotes });
  } else {
    res.send({ quotes: quotes });
  }
});

quotesRouter.post('/', (req, res) => {
  const { quote, person, year } = req.query;
  if (quote && person) {
    const newQuote = { id: String(quotes.length + 1), quote, person };
    quotes.push(newQuote);
    res.status(201).send({ quote: newQuote });
  } else {
    res.status(400).send();
  }
});

quotesRouter.put('/:id', (req, res) => {
  const quoteIndex = quotes.findIndex(q => q.id === req.params.id);

  if (quoteIndex === -1) {
    return res.status(404).send({ error: 'Quote not found' });
  }

  const { quote, person, year } = req.query;
  if (quote) quotes[quoteIndex].quote = quote;
  if (person) quotes[quoteIndex].person = person;
  if (year) quotes[quoteIndex].year = year;

  res.send({ quote: quotes[quoteIndex] });
});

quotesRouter.delete('/:id', (req, res) => {
  const quoteIndex = quotes.findIndex(q => q.id === req.params.id);

  if (quoteIndex === -1) {
    return res.status(404).send({ error: 'Quote not found' });
  }

  quotes.splice(quoteIndex, 1);
  res.status(204).send();
});

module.exports = quotesRouter;