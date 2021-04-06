module.exports = (sequelize, DataTypes) => {
    const WrestlersToStates = sequelize.define('WrestlersToStates', {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
        tableName: 'wrestlers_to_states'
    })

    WrestlersToStates.associate = models => {
        WrestlersToStates.belongsTo(models.Wrestler, {
            foreignKey: 'id',
        });

        WrestlersToStates.hasOne(models.WrestlerStates, {
            foreignKey: 'id',
            as: 'event_state',
        });
    }

    return WrestlersToStates;
}