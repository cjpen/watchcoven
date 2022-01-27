const Coven = require('../models/coven');

module.exports = {
    new: newViewing,
    create
}

function create(req, res) {
    Coven.findById(req.params.id, function(err, coven){
        coven.viewings.push(req.body);
        coven.save(function(err) {
            res.redirect(`/covens/${coven._id}`);
        });
    });
}

function newViewing(req, res) {
    Coven.findById(req.params.id)
    .populate('members')
    .exec(function(err, coven) {
        res.render('viewings/new',{ title: "New Viewing", coven})
    });
}