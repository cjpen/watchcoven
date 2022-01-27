const Coven = require('../models/coven');

module.exports = {
    index,
    new: newCoven,
    create,
    show,
    join,
    all,
    edit,
    update,
    delete: deleteCoven
};

function deleteCoven(req, res) {
    Coven.findOneAndDelete({_id: req.params.id, leader: req.user._id}, function(err){
        res.redirect('/covens');
    });
}

function edit(req, res) {
    Coven.findOne({_id: req.params.id, leader: req.user._id}, function(err, coven){
        if ( !coven ) return res.redirect("/covens");
        res.render('covens/edit', {title: "EDIT", coven});
    });
}

function update(req, res) {
    Coven.findOneAndUpdate({_id: req.params.id, leader: req.user._id}, req.body, function(err, coven){
        res.redirect(`/covens/${coven._id}`);
    });
}

function all(req, res) {
    Coven.find( {} , function(err, covens) {
        res.render('covens/all', {title: "All Covens", covens})
    });
}

function join(req, res) {
    Coven.findOne( {_id: req.params.id, members: {$nin: req.user._id}}, function(err, coven) {
        if (!coven) return res.redirect('/covens');
        coven.members.push(req.user._id);
        coven.save(function(){
            res.redirect(`/covens/${req.params.id}`);
        });
    });
}

function show(req,res) {
    Coven.findById(req.params.id)
    .populate('leader')
    .populate('members')
    .exec(function(err, coven) {
        res.render('covens/show', { title: `${coven.name}`, coven})
    });
}

function create(req, res) {
    var coven = new Coven(req.body);
    coven.leader = req.user._id;
    coven.members.push(req.user._id);
    coven.save(function (err) {
        if (err) return res.redirect('/coven/new');
        res.redirect('/covens')
    });
};

function newCoven(req, res) {
    res.render('covens/new', { title: "Found A Coven"});
}

function index(req, res) {
    Coven.find( {members: req.user._id}, function(err, covens) {
        res.render('covens/index', { title: "My Covens", covens });
    });
}