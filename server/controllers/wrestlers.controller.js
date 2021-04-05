const Wrestler = require("../models/wrestler.model.js");

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Wrestler.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving wrestlers."
            });
        else res.send(data);
    });
};

exports.findBySlug = (req, res) => {
    Wrestler.findBySlug(req.params.slug, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Wrestler with slug ${req.params.slug}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Wrestler with slug " + req.params.slug
                });
            }
        } else res.send(data[0]);
    });
};