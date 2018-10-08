'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Exercise = db.define('exercises', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  category: Sequelize.ARRAY(Sequelize.STRING),
  description: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  time: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }

});

module.exports = Exercise;
