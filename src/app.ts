import Api from './core/app.api.js'
import { db } from './core/db.js';

const test = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test()