const Sequelize = require('sequelize');

const Equipment = require('../app/models/Equipment');


const databaseConfig = require('../config/database');

const models = [Equipment];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(m => m.init(this.connection));
    ;
  }
}

module.exports = new Database();