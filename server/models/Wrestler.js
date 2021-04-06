module.exports = (sequelize, DataTypes) => {
    const Wrestler = sequelize.define('Wrestler', {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        forename: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        middle_names: { type: DataTypes.STRING },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        ring_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        active: { type: DataTypes.BOOLEAN },
        date_of_birth: { type: DataTypes.DATE },
        date_of_death: { type: DataTypes.DATE },
    }, {
        tableName: 'wrestlers'
    })

    Wrestler.associate = models => {
        Wrestler.hasMany(models.WrestlersToStates, {
            // through: models.WrestlersToStates,
            foreignKey: 'wrestler_id',
            otherKey: 'state_id',
            as: 'states',
        });
    }

    return Wrestler;
}