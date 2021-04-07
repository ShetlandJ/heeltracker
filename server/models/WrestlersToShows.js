module.exports = (sequelize, DataTypes) => {
    const WrestlersToShows = sequelize.define('WrestlersToShows', {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    }, {
        tableName: 'wrestlers_to_shows'
    })

    WrestlersToShows.associate = models => {
        WrestlersToShows.hasOne(models.Wrestler, {
            foreignKey: 'id',
        });

        WrestlersToShows.hasOne(models.WrestlingShow, {
            foreignKey: 'id',
        });
    }

    return WrestlersToShows;
}