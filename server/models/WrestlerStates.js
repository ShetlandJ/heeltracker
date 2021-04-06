module.exports = (sequelize, DataTypes) => {
    const WrestlerStates = sequelize.define('WrestlerStates', {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'wrestler_states'
    })

    WrestlerStates.associate = models => {
        WrestlerStates.belongsTo(models.WrestlersToStates, {
            foreignKey: 'id',
            as: 'event_state',
        });
    }

    return WrestlerStates;
}