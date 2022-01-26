const Coven = require('../models/coven');

module.exports = {
    index,
    new: newCoven
};

function newCoven(req, res) {
    res.render('covens/new', { title: "Found A Coven"});
}

function index(req, res) {
    res.render('covens', { title: "My Covens" })
}