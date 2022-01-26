const Coven = require('../models/coven');

module.exports = {
    index,
    new: newCoven,
    create
};

function create(req, res) {
    var coven = new Coven(req.body);
    coven.save(function (err) {
        if (err) return res.redirect('/coven/new');
        res.redirect('/coven/:id')
    });
};

function newCoven(req, res) {
    res.render('covens/new', { title: "Found A Coven"});
}

function index(req, res) {
    res.render('covens', { title: "My Covens" })
}