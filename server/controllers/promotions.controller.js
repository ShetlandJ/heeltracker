const { v4: uuidv4 } = require('uuid');
const { Promotion, Wrestler } = require('../models');

const getAll = async (req, res) => {
    try {
        const promotions = await Promotion.findAll();

        return res.status(201).json({
            data: promotions,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAll,
}