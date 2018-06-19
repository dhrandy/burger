// import Express and burger.js
// 1. Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


///////need to finish
router.post("/api/burgers", function(req, res) {
    var condition = "id = " +req.params.id;

    console.log("condition", condition);
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;