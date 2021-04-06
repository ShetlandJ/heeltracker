const { Wrestler } = require('../models');

const createWrestler = async (req, res) => {
    try {
        const wrestler = await Wrestler.create(req.body);
        return res.status(201).json({
            wrestler,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    createWrestler
}