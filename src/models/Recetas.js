const { DataTypes } = require("sequelize");
const sequelizeInstance = require("../db/sequelize.js");


const Recetas = sequelizeInstance.define('Recetas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    imagenes: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    informacion: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    ingredientes: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    resumeRecipe: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    tags: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
}, {
    sequelizeInstance,
    modelName: 'Recetas'
})

module.exports = Recetas