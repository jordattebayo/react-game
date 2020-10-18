var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var User = require('./User');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


//Create a new user 
router.post("/", function (req, res) {
    User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    },
    function (err, user) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(user);
    });
});

//Returns all users in database
router.get("/", function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users");
        res.status(200).send(users);
    });
});

//Return a single user
router.get("/:id", function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding that user.");
        res.status(200).send(user);
    });
});

//Deletes a user from the database
router.delete("/:id", function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err,user) {
        if (err) return res.status(500).send("There was a problem finding that user.");
        res.status(200).send("User: " + user.name +" was deleted.");
    });
});

//Updates a user from the database
router.delete("/:id", function (req, res) {
    User.findByIdAndRemove(req.params.id, req.body, {new: true}, function (err,user) {
        if (err) res.status(500).send("There was a problem finding that user.");
        res.status(200).send(user);
    });
});

module.exports = router;