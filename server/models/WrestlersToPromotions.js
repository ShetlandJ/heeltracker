module.exports = (sequelize, DataTypes) => {
    const WrestlersToPromotions = sequelize.define('WrestlersToPromotions', {
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        date_joined: { type: DataTypes.DATE },
        date_left: { type: DataTypes.DATE },
    }, {
        tableName: 'wrestlers_to_promotions'
    })

    WrestlersToPromotions.associate = models => {
        WrestlersToPromotions.belongsTo(models.Wrestler, {
            foreignKey: 'id',
        });

        WrestlersToPromotions.hasOne(models.Promotion, {
            foreignKey: 'id',
        });
    }

    return WrestlersToPromotions;
}