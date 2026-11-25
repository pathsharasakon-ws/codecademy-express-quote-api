const express = require('express');
const biosRouter = express.Router();
const { bios } = require('../data');

biosRouter.get('/', (req, res) => {
    if (req.query.person) {
        const foundBio = bios.filter(b => b.person === req.query.person);
        res.send({ bios: foundBio });
    } else {
        res.send({ bios });
    }
});

biosRouter.post('/', (req, res) => {
    const { person, bio } = req.query;
    if (person && bio) {
        const newBio = { id: String(bios.length + 1), person, bio };
        bios.push(newBio);
        res.status(201).send({ bio: newBio });
    } else {
        res.status(400).send();
    }
});

module.exports = biosRouter;