const { DataTypes } = require("sequelize");
const db = require("../database/mysqlCNN");

const peli_serie = db.define("pelis_series", {
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_Creacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calificacion: {
    type: DataTypes.TINYINT,
    allowNull: false,
    len: [1, 5],
  },
});

module.exports = peli_serie;
