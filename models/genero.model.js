const { DataTypes } = require("sequelize");
const db = require("../database/mysqlCNN");

const genero = db.define("Generos", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = genero;
