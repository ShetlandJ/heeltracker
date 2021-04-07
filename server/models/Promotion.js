module.exports = (sequelize, DataTypes) => {
    const Promotion = sequelize.define('Promotion', {
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
        description: { type: DataTypes.STRING },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        founded: { type: DataTypes.INTEGER },
        active: { type: DataTypes.BOOLEAN },
    }, {
        tableName: 'wrestling_promotions'
    })

    Promotion.associate = models => {
        Promotion.belongsTo(models.WrestlersToPromotions, {
            foreignKey: 'id',
        });
    }

    return Promotion;
}