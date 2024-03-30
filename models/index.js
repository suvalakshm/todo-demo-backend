const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config({ path: ".env" });
require("dotenv").config();
 
const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
 
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 

db.request = require("./table.model.js")(sequelize, Sequelize);
 

module.exports = db;