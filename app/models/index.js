const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER,
    dbConfig.PASSWORD, 
    {
    dialect: dbConfig.dialect,
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        idle: dbConfig.pool.idle,
        acquire: dbConfig.pool.acquire
    }
});

const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.students_data = require("./student_data.model.js")(sequelize, Sequelize);
module.exports = db;