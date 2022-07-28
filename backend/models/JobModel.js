const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Job = sequelize.define("geralTrabalhos", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salary: {
    type: Sequelize.DECIMAL(18, 2),
    allowNull: false,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  newJob: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },

  created_at: {
    type: Sequelize.DATE,
  },
  update_at: {
    type: Sequelize.DATE,
  },
});

module.exports = Job;
