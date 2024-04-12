// University.js

import Sequelize from 'sequelize';
import { sequelize } from '../../config/database.js';

export const University = sequelize.define('university', {
  geom: {
    type: Sequelize.GEOMETRY('POINT'),
    allowNull: true
  },
  university_code: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  university_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  province: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  construction_batch: {
    type: Sequelize.STRING,
    allowNull: true
  },
  construction_discipline: {
    type: Sequelize.STRING,
    allowNull: true
  },
  university_nature: {
    type: Sequelize.STRING,
    allowNull: true
  },
  university_level: {
    type: Sequelize.STRING,
    allowNull: true
  },
  military: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  military_type: {
    type: Sequelize.STRING,
    allowNull: true
  },
  art: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  display_priority: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

University.sync();
