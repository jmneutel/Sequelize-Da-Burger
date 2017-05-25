var express = require("express");

var router = express.Router();

// Import the model (app.js) to use its database functions.
var model = require("../models");

module.exports = function(app) {
    // Create all our routes and set up logic within those routes where required.
    router.get("/", function(req, res) {
        model.Burgers.findAll({})
            .then(function(dbBurgers) {
                var hbsObject = {
                    burgers: dbBurgers
                };
                res.render("index", hbsObject);
            })
            .catch(function(err){
                res.json(err)
            });
    });

    router.post("/", function(req, res) {
        model.Burgers.create({

                name: req.body.name,
                eaten: req.body.eaten
            })
            .then(function(dbBurgers) {
                // res.json(dbBurgers);
                res.redirect("/");
            })
    });

    router.put("/:id", function(req, res) {
        model.Burgers.update({
             eaten: req.body.eaten
            }, {
             where: {
                 id: req.params.id
             }
         })
         .then(function(dbBurgers) {
             // res.json(dbBurgers);
             res.redirect("/");
         })
         .catch(function(err) {
             res.json(err)
         });
 });


    router.delete("/:id", function(req, res) {
        model.Burgers.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(dbBurgers) {
                // res.json(dbBurgers);
                res.redirect("/");
            })
            .catch(function(err){
                res.json(err)
            });
    });

    return router;

};
// module.exports= router;
// Export routes for server.js to use.
