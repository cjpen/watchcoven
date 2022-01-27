const Coven = require('../models/coven');

module.exports = {
    new: newViewing
}

function newViewing(req, res) {
    Coven.findById(req.params.id)
    .populate('members')
    .exec(function(err, coven) {
        res.render('viewings/new',{ title: "New Viewing", coven})
    });
}