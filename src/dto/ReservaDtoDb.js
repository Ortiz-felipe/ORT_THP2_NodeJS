import Sequelize from 'sequelize';
import db from '../db.js';
import CanchaDtoDb from './CanchaDtoDb.js';

class ReservaDtoDb extends Sequelize.Model {}

ReservaDtoDb.init({
  id: {
    type: Sequelize.DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: Sequelize.DataTypes.DATE,
    allowNull: false,
  },
  dni: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  estadoReserva: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'reserva',
  modelName: 'Reserva',
});

ReservaDtoDb.belongsTo(CanchaDtoDb, {
  foreignKey: {
    allowNull: false,
  },
});

export default ReservaDtoDb;
