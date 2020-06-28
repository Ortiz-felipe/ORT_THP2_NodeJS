import Sequelize from 'sequelize';

const sequelize = new Sequelize('tp-gestion-canchas', 'tp-gestion-canchas', 'tp-gestion-canchas', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
