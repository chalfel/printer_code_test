const Sequelize = require('sequelize');
const { Model } = Sequelize;

class Equipment extends Model {
  static init(sequelize) {
    super.init(
      {
        model: Sequelize.STRING,
        // category: {
        //   type: Sequelize.ENUM,
        //   values: ['cartucho', 'toner'],
        //   allowNull: false,
        // },
        category : Sequelize.STRING,
        ppm: Sequelize.INTEGER,
        wifi: Sequelize.BOOLEAN,
        consume: Sequelize.REAL,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Equipment;