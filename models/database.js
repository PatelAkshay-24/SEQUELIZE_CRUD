const { Sequelize, DataTypes } = require('sequelize');

//connect database
const sequelize = new Sequelize('employee', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  
  const db = {}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  db.Contact = require('./contact')(sequelize,DataTypes)
  db.User = require('./user')(sequelize,DataTypes)
 

  //create table code
  db.sequelize.sync({alter:true})

  // //Drop Table
  // db.sequelize.drop()

  //export model
  module.exports = db