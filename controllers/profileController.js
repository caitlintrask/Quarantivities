const db = require("../models");

module.exports = {
    
    findAll: function (req, res) {
        db.User
            .find({ activity: req.query.activity })
            .then()
    },

    create: function (req, res) {
        db.Activity
            .create(req.body)
            .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { activity: _id } }, { new: true } ))
            .then(dbUser => {
                res.json(dbUser)
            })
            .catch(err => res.status(422).json(err));
    },




}