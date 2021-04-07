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