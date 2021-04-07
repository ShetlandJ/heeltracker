module.exports = (sequelize, DataTypes) => {
    const WrestlingShow = sequelize.define('WrestlingShow', {
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
        tableName: 'wrestling_shows'
    })

    WrestlingShow.associate = models => {
        WrestlingShow.belongsTo(models.WrestlersToPromotions, {
            foreignKey: 'id',
        });
    }

    return WrestlingShow;
}