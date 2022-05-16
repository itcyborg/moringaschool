'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  issue.init({
    subject: DataTypes.STRING,
    description: DataTypes.TEXT,
    project_id: DataTypes.INTEGER,
    severity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'issue',
  });
  return issue;
};