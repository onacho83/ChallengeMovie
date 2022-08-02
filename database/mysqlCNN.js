const { Sequelize } = require("sequelize");
const { mysqlCNN } = require("./configDatabase,js");

const db = new Sequelize(
  mysqlCNN.database,
  mysqlCNN.username,
  mysqlCNN.password,
  {
    host: "localhost",
    dialect: mysqlCNN.dialect,
  }
);

module.exports = db;
