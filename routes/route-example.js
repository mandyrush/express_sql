const express = require('express');
const router = express.Router();

const controller = require('../controllers/controller-example');

// GET /record - will list all the previously recorded words
router.get('/record', controller.list);

// POST /record - body {word: "Test"}
router.post('/record', controller.create);

module.exports = router;