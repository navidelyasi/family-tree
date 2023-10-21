const { DataTypes } = require("sequelize");
const sequelizeDB = require("./db-init"); // Assuming you have a database connection

const Member = sequelizeDB.define("Memeber", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fid: {
    type: DataTypes.INTEGER,
  },
  mid: {
    type: DataTypes.INTEGER,
  },
  pids: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  name: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  img: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
});

const User = sequelizeDB.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensure emails are unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { User, Member };
