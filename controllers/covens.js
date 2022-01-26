const Coven = require('../models/coven');

module.exports = {
    new: newCoven
};

function newCoven(req, res) {
    res.render('covens/new', { title: "Found A Coven"});
}