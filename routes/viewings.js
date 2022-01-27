var express = require('express');
var router = express.Router();

var viewingsCtrl = require('../controllers/viewings')

// GET /covens/:id/viewings
router.get("/covens/:id/viewings/new", viewingsCtrl.new);

module.exports = router;
