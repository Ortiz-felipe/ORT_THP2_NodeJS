import './env.js';
import app from './app.js';
import db from './db.js';

db.sync()
  .then(() => app.listen(3000, () => console.log('Escuchando en puerto 3000')))
  .catch((error) => console.log(error));
