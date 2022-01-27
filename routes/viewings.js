var express = require('express');
var router = express.Router();

var viewingsCtrl = require('../controllers/viewings')

// GET /covens/:id/viewings/new
router.get("/covens/:id/viewings/new", viewingsCtrl.new);
// POST /covens/:id/viewings
router.post('/covens/:id/viewings', viewingsCtrl.create);

module.exports = router;
