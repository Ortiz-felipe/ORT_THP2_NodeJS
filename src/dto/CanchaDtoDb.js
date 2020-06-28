import Sequelize from 'sequelize';
import db from '../db.js';

class CanchaDtoDb extends Sequelize.Model {}

CanchaDtoDb.init({
  id: {
    type: Sequelize.DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: Sequelize.DataTypes.DECIMAL,
    allowNull: false,
  },
  capacidad: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  estaHabilitada: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'cancha',
  modelName: 'Cancha',
});

export default CanchaDtoDb;
