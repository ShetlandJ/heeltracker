const { Wrestler } = require('../models');
const { WrestlersToStates } = require('../models');
const { WrestlerStates } = require('../models');

const getAll = async (req, res) => {
    try {
        const wrestlers = await Wrestler.findAll({
            include: [
                {
                    model: WrestlersToStates,
                    as: 'states',
                    include: [
                        {
                            model: WrestlerStates,
                            as: 'event_state'
                        }
                    ]
                },
            ]
        });
        return res.status(201).json({
            wrestlers,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    getAll
}