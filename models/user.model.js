const { DataTypes } = require("sequelize");
const db = require("../database/mysqlCNN");

const Usuario = db.define("Usuarios", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue:true
  },
});

module.exports = Usuario;
