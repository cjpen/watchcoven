var express = require('express');
var router = express.Router();
var covensCtrl = require('../controllers/covens');
var isLoggedIn = require('../config/auth');

// Get /covens (display my covens)
// router.get
router.get("/", isLoggedIn, covensCtrl.index);
// GET /covens/new (create a new coven)
router.get("/new", isLoggedIn, covensCtrl.new);
// POST /covens (Handle a new coven being submitted)
router.post("/", isLoggedIn, covensCtrl.create);
// GET /covens/:id (show coven details, including description and upcoming viewings)
router.get("/:id", isLoggedIn, covensCtrl.show);
// EDIT /covens/:id/edit (edit details of the Coven)

// POST /covens/:id/members (handle joining a Coven)
router.post("/:id/members", isLoggedIn, covensCtrl.join);

module.exports = router