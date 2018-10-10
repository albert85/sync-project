'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserAccount = sequelize.define('UserAccount', {
    firstName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.BOOLEAN
  }, {});
  UserAccount.associate = function(models) {
    // associations can be defined here
  };
  return UserAccount;
};