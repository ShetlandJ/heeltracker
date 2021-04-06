const Promotion = require("../models/promotion.model.js");

// Retrieve all Customers from the database.
exports.getWrestlersByAlias = (req, res) => {
    Promotion.getWrestlersByAlias(req.params.alias, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving wrestlers from a promotion."
            });
        else
            res.send(data);
    });
};

exports.getByAlias = (req, res) => {
    Promotion.getByAlias(req.params.alias, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving a promotion."
            });
        else res.send(data);
    });
};