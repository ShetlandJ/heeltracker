const { v4: uuidv4 } = require('uuid');
const { Wrestler } = require('../models');
const { WrestlersToStates } = require('../models');
const { WrestlerStates } = require('../models');

const include = [
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

const getAll = async (req, res) => {
    try {
        const wrestlers = await Wrestler.findAll({
            include,
        });

        return res.status(201).json({
            data: wrestlers,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getWrestlerBySlug = async (req, res) => {
    try {
        const wrestlers = await Wrestler.findOne({
            where: {
                'slug': req.params.slug
            },
            include,
        });

        return res.status(201).json({
            data: wrestlers,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createWrestler = async (req, res) => {
    const payload = {
        'uuid': uuidv4(),
        'forename': req.body.forename,
        'middle_names': null,
        'surname': req.body.surname,
        'ring_name': req.body.ring_name,
        'active': req.body.active,
        'start_date': null,
        'end_date': null,
    }

    try {
        const newWrestler = await Wrestler.create(payload);

        return res.status(201).json({
            data: newWrestler,
        });

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getAll,
    getWrestlerBySlug,
    createWrestler
}