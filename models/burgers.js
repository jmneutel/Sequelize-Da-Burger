module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    name: DataTypes.STRING,
    eaten: DataTypes.INTEGER
  });
  return Burgers;
};
