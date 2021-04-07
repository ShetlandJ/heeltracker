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
        image_url: { type: DataTypes.STRING },
        alias: { type: DataTypes.STRING },
        founded: { type: DataTypes.INTEGER },


    }, {
        tableName: 'wrestling_promotions'
    })

    Promotion.associate = models => {
        Promotion.belongsTo(models.Promotion, {
            foreignKey: 'id',
        });
    }

    return Promotion;
}