const { DataTypes } = require("sequelize");
const db = require("../database/mysqlCNN");

const personaje = db.define("Personajes", {
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  peso: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  historia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = personaje;
